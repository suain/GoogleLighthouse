module.exports = {
	ci: {
		collect: {
						url: ['https://www.svenbelz.com', 'https://www.digitalnotiz.de/'],
			numberOfRuns: 3,
			settings: {
				"preset": "desktop",
				chromeFlags: '--no-sandbox',
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
