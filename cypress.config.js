const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  env: {
    allure: true,
  },
  //retries: 3,
  defaultCommandTimeout: 7000,
  pageLoadTimeout: 60000,
  //numTestsKeptInMemory: 0,
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
  // viewportWidth: 360,
  // viewportHeight: 740,
  viewportWidth: 1930,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
    baseUrl: 'https://www.obramax.com.br/',
    url_loja: 'https://lojaobramax.myvtex.com/',
    url_orcamax: 'https://orcamax.obramax.com.br/',
    url_academy: 'https://academiadeprofissionais.obramax.com.br/',
    url_blog: 'https://blog.obramax.com.br/',
    experimentalRunAllSpecs: true,
    modifyObstructiveCode: false,
    notifications: 'allow',
    geolocation: 'allow',
  },
})
