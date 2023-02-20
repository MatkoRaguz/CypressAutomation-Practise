const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 30000,
  defaultCommandTimeout: 8000,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.js",
  },
});
