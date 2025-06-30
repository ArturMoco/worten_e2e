const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.worten.pt",
    supportFile: "cypress/support/e2e.js",
    video: true,
    screenshotOnRunFailure: true
  },
  video: true,
  screenshotOnRunFailure: true
});
