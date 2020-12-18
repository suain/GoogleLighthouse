module.exports = {
	ci: {
		collect: {
						url: ['https://www.svenbelz.com', 'http://digitalnotiz.de'],
			numberOfRuns: 3,
			settings: {
				chromeFlags: '--no-sandbox',
				 "emulatedFormFactor": "mobile",

			},
		},
	},
};
