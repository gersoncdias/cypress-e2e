const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  env: {
    allure: true,
  },
  retries: 1,
  defaultCommandTimeout: 7000,
  video: false,
  chromeWebSecurity: false,
  viewportWidth: 360,
  viewportHeight: 740,
  // viewportWidth: 1920,
  // viewportHeight: 740,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      require('cypress-grep/src/plugin')(config)
      return config
    },
    baseUrl: 'https://www.obramax.com.br/',
    url_loja: 'https://lojaobramax.myvtex.com/',
    url_orcamax: 'https://www.obramax.com.br/orcamax',
    url_academy: 'https://academiadeprofissionais.obramax.com.br/',
    url_blog: 'https://blog.obramax.com.br/',
    modifyObstructiveCode: false,
    experimentalMemoryManagement: true,
    notifications: 'allow',
    geolocation: 'allow',
  },
})
