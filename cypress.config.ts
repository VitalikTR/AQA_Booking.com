import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    UI_HOST: 'https://www.booking.com/',
  },
  chromeWebSecurity: false,
  watchForFileChanges: false,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/test-results/mocha',
    charts: true,
    reportPageTitle: 'Test Suite AQA',
    embeddedScreenshots: true,
    inlineAssets: true,
    html: true,
    json: true
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.*',
  },
})
