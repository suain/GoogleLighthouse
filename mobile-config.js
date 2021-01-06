module.exports = {
	ci: {
		collect: {
		        url: ['https://www.svenbelz.com', 'https://www.digitalnotiz.de'],
			numberOfRuns: 3,
			settings: {
				chromeFlags: '--no-sandbox',
				 "emulatedFormFactor": "mobile",

			},
		},
	},
};
