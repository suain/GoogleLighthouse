# GoogleLighthouse

The most important factor is the device that is used for testing and of course everything that runs in the background and has an impact on the CPU. That is the reason to run GL direcly in GitHub.
Google is using a network and CPU throttling, as we know. To get the same values, you would have to adjust the CPU throttling. See https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md. This means that you would have to run an audit once to find out the own CPU value and then adjust the throttling according to https://lighthouse-cpu-throttling-calculator.vercel.app/.

This repro checks two websites and simulated a desktop and mobile device automatically Mo- Fr. at 10:00 pm. (CET)

## Lighthouse ci
https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md

For scheduling crontag.guru
