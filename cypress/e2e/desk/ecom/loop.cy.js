const env = require('../../../cypress.env.json')
const validation_data_stores = require('../../../fixtures/storeSettings.json')

describe('Load Test', () => {
  const numIterations = 600

  beforeEach(() => {
    // Cria e reutiliza a sessão de login
    cy.session('loginSession', () => {
      cy.loginByApi(
        env.user_qecom.email,
        env.user_qecom.password,
        validation_data_stores.api.account_name,
        validation_data_stores.api.cookie_name,
        validation_data_stores.api.account_name
      )
    })

    // Visita a URL base
    cy.visit(Cypress.config().baseUrl)
  })

  // Teste em loop
  for (let i = 0; i < numIterations; i++) {
    it(`Iteration ${i + 1}`, () => {
      cy.validaBanners()
    })
  }
})
