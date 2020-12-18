module.exports = {
	ci: {
		collect: {
						url: ['https://www.svenbelz.com', 'http://digitalnotiz.de'],
			numberOfRuns: 3,
			settings: {
				chromeFlags: '--no-sandbox',
				 "emulatedFormFactor": "desktop",
					"throttling": {
					"rttMs": 40,
					"throughputKbps": 10240,
					"cpuSlowdownMultiplier": 1,
					"requestLatencyMs": 0,
					"downloadThroughputKbps": 0,
					"uploadThroughputKbps": 0
				}
			},
		},
	},
};
