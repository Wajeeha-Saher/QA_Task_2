const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1200,
  viewportHeight: 800,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  numTestKeptInMemory: 1,
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
    timestamp: 'mmddyyyy_HHMMss',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  
});