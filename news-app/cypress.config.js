const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    // testIsolation: false,
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      // implement node event listeners here
      return config;
    },
  },
});
