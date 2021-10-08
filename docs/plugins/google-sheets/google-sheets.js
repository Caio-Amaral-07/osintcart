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
						var options = this[5];
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
						/* 
						1.  Name	
						2.  Category
						3.  Description
						4.  Link
						5.  Options
						6.  Image
						7.  Cost
						8.  Provider Identity
						9.  Owner Details
						10. Provider Access
						11. Provider Nation
						12. Funding
						13. Open-Source Code
						14. Required Data
						15. Data Location
						16. Data Access
						17. Location Control
						18. Self-Host
						19. Provider Retention 
						20. Legal obligations
						21. Remedy
						22. Bans
						23. Vulnerability Transparency
						24. Independent Audit
						25. Known Risks
						26. Security Features
						27. Missing Features
						28. Helpful Guides
						29. User Support
						30. Maintenance
						31. Training
						32. Interaction Issues
						33. Compatibility
						34. Language
						35. Localization
						36. Accommodations
						37. Sources
						*/
						var product = {
							productid : 1,
							name : this[1],			
							category : this[2],
							description : this[3],
							link : this[4],
							options : setOptions(options),
							image : this[6],
							cost : this[7],
							provideridentity : this[8],
							ownerdetails : this[9],
							provideraccess : this[10],
							providernation : this[11],
							funding : this[12],
							opensource : this[13],
							requireddata : this[14],
							datalocation : this[15],
							dataaccess : this[16],
							locationcontrol : this[17],
							selfhost : this[18],
							providerretention : this[19],
							legalobligations : this[20],
							remedy : this[21],
							bans : this[22],
							vultrans : this[23],
							audit : this[24],
							risks : this[25],
							securityfeatures : this[26],
							missingfeatures : this[27],
							helpfulguides : this[28],
							usersupport : this[29],
							maintenance : this[30],
							training : this[31],
							interactions : this[32],
							compatibility : this[33],
							language : this[34],
							localization : this[35],
							accomodations : this[36],
							sources : this[37]
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
