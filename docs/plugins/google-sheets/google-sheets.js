/*
 * SimpleStore Google Sheets Plugin
 * To use Google spreadsheet as your database, follow the steps below:
 * 1. Use the "DemoSpreadsheet.xlsx" as a starting point
 * 2. Create a new Google spreadsheet
 * 3. Set sharing permissions to either “Public” or set to “Anyone with link can view”
 * 4. Publish the sheet (File -> Publish to the web -> Publish)
 * 5. Add the spreadsheet ID to your 'config.js' ( spreadsheetID : "XXXXXXXXXXXXXXXXXXXXXXX" )
 */

simpleStore.plugins.google = (function() {

	var storeProducts = verifyProducts = [];

	function getSpreadsheetData(s, verify, callback) {

		verify = typeof verify !== 'undefined' ? verify : false;

		var hostname =  "https://sheets.googleapis.com/v4"; 

		var spreadsheetURL = hostname + "/spreadsheets/" + s.spreadsheetID + "?key="+s.sheetkey;

		var settingsSheetName = "Settings";
		var productsSheetName = "Products";
		var sheetIDs = {};

		function getSheetInfo (url, callback) {
			// Need to do this because od6 is default Google Sheet ID
			$.getJSON(url)
				.done(function(data) {

					var sheets = data.sheets;

					$(sheets).each(function(i, sheet) {

						var title = sheet.title;
						var sheetID = sheet.sheetId;
						if(title == settingsSheetName) {
							sheetIDs.settingsSheetID = sheetID;
						}
						if(title == productsSheetName) {
							sheetIDs.productsSheetID  = sheetID;
						}
					});
					callback();
					loadProductData(sheetIDs.productsSheetID);
				});
		}

		function loadSiteSettings (callback) {

			var settingsSheetURL = hostname + "/spreadsheets/" + s.spreadsheetID + "/values/"+settingsSheetName+"?key="+s.sheetkey;

			$.getJSON(settingsSheetURL)
				.done(function(data) {
					var data = data.values;
					var s = simpleStore.settings;

					if(data[1]) {

						var siteName = data[1][0];
						var columns = data[1][1];

						if (siteName) {
							s.brand = siteName;
						}
						if (columns) {
							s.numColumns = columns;
						}

						simpleStore.setLayout(s);
					}
				});
		}

		function loadProductData (id) {

			var productsSheetURL = hostname + "/spreadsheets/" + s.spreadsheetID+ "/values/"+productsSheetName+"?key="+s.sheetkey;

			// Get Main Sheet Products data
			$.getJSON(productsSheetURL)
				.done(function(data) {

					var productsData = data.values;

					// Build products
					$(productsData).each(function(i) {
						if ( i == 0 ) return;
						var options = this[4];
						var setOptions = function(options) {
							var productOptions = [];
							if(options) {
								var opts = options.split(";").filter(function(el) {return el.length != 0});
								$(opts).each(function(i, option) {
									var opt = option.trim().split(":"),
										key = opt[0],
										val = opt[1],
										optObj = {};

									optObj[key] = val;
									productOptions.push(optObj);
								});
							}
							return productOptions;
						};

						// Get product values
						var product = {
							name : this[1],
							category : this[3],
							price : this[2],
							description : this[5],
							hostnation : this[11],
							options : setOptions(options),
							image : this[6]
						};

						if (verify) {
							verifyProducts.push(product);
						} else {
							storeProducts.push(product);
						}
					});
					callback();
				})
				.fail(function(data){
					if (verify) {
						var errorMsg = 'There was an error validating your cart.';
					} else {
						var errorMsg = 'Error loading spreadsheet data. Make sure the spreadsheet ID is correct.';
					}
					setTimeout(function(){ simpleStore.renderError(s, errorMsg); }, 1000);
				});
		}

		// Get Sheet data
		getSheetInfo(spreadsheetURL, loadSiteSettings);
	}

	function validatePrices(s, checkoutData) {
		verifyProducts = [];

		getSpreadsheetData(s, true, function() {
			if(simpleStore.verifyCheckoutData(checkoutData, verifyProducts, true)) {
        		simpleStore.checkout(s, checkoutData);
			} else {
				var errorMsg = 'There was an error validating your cart.';
				simpleStore.renderError(s, errorMsg);
			}
		});
	}

	return {
		init: function(callback) {
			var s = simpleStore.settings;

			// Clears out brand to allow for spreadsheet site name
			s.brand = "";
			simpleStore.setLayout(s);

			getSpreadsheetData(s, false, function(){
				callback(storeProducts);
			});
		},
		validate: function(checkoutData) {
			validatePrices(simpleStore.settings, checkoutData);
		}
	};
})();
