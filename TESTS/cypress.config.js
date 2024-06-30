const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3ee4m3',
  e2e: {
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true    
  },
});
