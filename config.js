let config = {
	address: "0.0.0.0",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["xxxxx", ""],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "de",
	locale: "de-DE",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Müllkalender",
			position: "top_left",

			config: {

				dateFormat: "dddd D.M",
				fullDayEventDateFormat: "dddd D.M",
				//urgency: 3,
				//timeFormat:"absolute",
				showEnd: false,

				calendars: [
					{


						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "xxx.ics",
						maximumEntries: 3
					},

					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "xxx.ics",
						maximumEntries: 2,

					},
					
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "xxxx.ics",
						maximumEntries: 2,

					}

					
					
				]
			}
		},

		{
			module: "newsfeed",
			position: "bottom_center",
			config: {
				feeds: [
					{
						title: "Tagesschau",
						url: " https://www.tagesschau.de/index~rss2.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true,
				showDescription: true,
				updateInterval: 15000,
				reloadInterval: 1500000
			}
		},

		{
			module: "MMM-cryptocurrency",
			position: "top_left",
				config: {
				apikey: 'xxxxxxx',
				currency: ['ethereum', 'bitcoin'],
				conversion: 'EUR',
				headers: ['change24h', 'change7d'],
				displayType: 'logoWithChanges',
				showGraphs: true,
				//significantDigits: 10,
				minimumFractionDigits: 0,
				maximumFractionDigits: 0

			}
		},
		{

  			  module: 'MMM-OpenWeatherMapForecast',
   			 position: 'top_right',
			 header: "Wetter",
			 classes: "default everyone",
  			  config: {
        			apikey: "xxxxx",
				latitude: "x.9110",
				longitude: "x.2249",
				updateInterval: 120,
				maxHourliesToShow: 5,
				maxDailiesToShow: 5,
				forecastLayout: "table",
				language: "de",
				label_timeFormat: "HH"
    				}
		},
		{
   			module: "MMM-Formula1",
 			position: "top_center",
   			header: "Formula 1",
    				config: {
   				   maxRowsDriver: 4,
				   maxRowsConstructor: 4
   					 }
  		},
		

		{
 		 module: "MMM-Jast",
		position: "top_bar",
			  config: {
				    currencyStyle: "code", // One of ["code", "symbol", "name"]
				    fadeSpeedInSeconds: 300,
				    lastUpdateFormat: "HH:mm",
				    maxChangeAge: 1 * 24 * 60 * 60 * 1000,
				    maxWidth: "100%",
				    numberDecimalsPercentages: 1,
				    numberDecimalsValues: 2,
				    displayMode: "horizontal", // One of ["none", "vertical", "horizontal", "table"]
				    showColors: true,
				    showCurrency: true,
				    showChangePercent: true,
				    showChangeValue: true,
				    showChangeValueCurrency: true,
				    showHiddenStocks: false,
				    showLastUpdate: false,
				    showPortfolioValue: false,
				    showPortfolioGrowthPercent: false,
				    showPortfolioGrowth: false,
				    showPortfolioPerformanceValue: false,
				    showPortfolioPerformancePercent: false,
				    showStockPerformanceValue: false,
				    showStockPerformanceValueSum: false,
				    showStockPerformancePercent: false,
				    //stocksPerPage: 2, // Only relevant for display mode "table"
				    updateIntervalInSeconds: 3000,
				    useGrouping: false,
				    virtualHorizontalMultiplier: 2,
				    stocks: [
					      { name: 'MSCI World', symbol: 'IWDA.L' },
					      { name: 'MSCI EU', symbol: 'CEMU.AS'},
					      { name: 'MSCI Soc.Res.', symbol: 'WSRUS.SW' },
					      { name: 'MSCI Equal W.', symbol: 'IE000OEF25S1.SG' },
					      { name: 'Porsche', symbol: 'P911.F' },
					      { name: 'Gold Royalty', symbol: 'CA38071H1064.SG' }
    					]
				  }
		},
		
		 {
   			   module: "MMM-Flights",
     			 position: "top_center",
      			config: {
     			  laMin: x.3527,
      			  laMax: x.9427,
      			  loMin: x.0916,
      			  loMax: x.2613,
			  mapHeight: "500px",
			 showMap: "always"
      			},
		},


// ab hier geht es nur noch um die pages
		    {
     			   module: "MMM-pages",
     				   config: {
         				   timings: {
               					 //default: 5000,               // rotate every 5 seconds   
               					 //0: 20000,                    // page 0 rotates every 20 seconds
                
            					},
            				   modules: [
                				["calendar", "newsfeed" ,"MMM-cryptocurrency", "MMM-OpenWeatherMapForecast" ,"MMM-Formula1" , "MMM-Jast"],  // page 0
                				["MMM-Flights"], 											   // page 1
           				 ],
           				   fixed: [    // modules that are always shown
             					   "clock", "MMM-page-indicator"
          				  ],

    				    }
  		  },

		     {
      			  module: 'MMM-page-indicator',
       			 position: 'bottom_right',
       			 config: {
         			 activeBright: true,
      			  }
   		 }

		
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
