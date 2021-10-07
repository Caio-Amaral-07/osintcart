$(function() {
	simpleCart({

	    // array representing the format and columns of the cart, see
	    // the cart columns documentation
	    cartColumns: [
	        { attr: "name" , label: "Name" },
	        { attr: "category" , label: "Category"},
	        { attr: "productid" , label: false },
	        { attr: "hostnation" , label: "Provider Nation" },
	        { view: "remove" , text: "Remove" , label: "      " }
	    ],

	    // "div" or "table" - builds the cart as a table or collection of divs
	    cartStyle: "div",

	    // how simpleCart should checkout, see the checkout reference for more info
	    checkout: {
	        type: "GenerateHTML"
	    },

	    // set the currency, see the currency reference for more info
	    currency: "USD",

	    // collection of arbitrary data you may want to store with the cart,
	    // such as customer info
	    data: {},

	    // set the cart langauge (may be used for checkout)
	    language: "english-us",

	    // array of item fields that will not be sent to checkout
	    excludeFromCheckout: [
	    	'qty',
	    	'thumb',
	    	'productid'
	    ],

	    // event callbacks
	    beforeAdd               	: null,
	    afterAdd                	: null,
	    load                    	: null,
	    beforeSave              	: null,
	    afterSave               	: null,
	    update                  	: null,
	    ready                   	: null,
	    checkoutSuccess             : null,
	    checkoutFail                : null,
	    beforeCheckout              : null

	});

	simpleStore.init({

		// brand can be text or image URL
		brand : "OSINTCart",

		// numder of products per row (accepts 1, 2 or 3)
		numColumns : 3,

		// name of JSON file, located in directory root
		JSONFile : "products.json",

		//required for GoogleSheet database
		spreadsheetID : "1y3aPg6fmTVusJzX0u2Pj8pMDPIxJCozpWlCx5fmSqmI",
		sheetkey : "AIzaSyCSf7mq5cKvMzyCC5MdYi0vYZnYOJohytg"

	});

});
