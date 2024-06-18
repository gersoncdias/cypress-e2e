const validation_data_login = require('../../../fixtures/login.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')

describe('Não Regionalizado Logado', () => {
  beforeEach(() => {
    cy.loggedQecom(Cypress.config().baseUrl, '', '')
    cy.scrollTo('bottom')
  })

  it('01 FT - Validate Footer', () => {
    cy.footerMobile()
  })
})
describe('Regionalizado Benfica Logado', () => {
  beforeEach(() => {
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
    cy.scrollTo('bottom')
  })

  it('01 FT - Validate Footer', () => {
    cy.footerMobile()
  })
})
describe('Regionalizado Mooca Logado', () => {
  beforeEach(() => {
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
    cy.scrollTo('bottom')
  })

  it('01 FT - Validate Footer', () => {
    cy.footerMobile()
  })
})
describe('Não Regionalizado Não Logado', () => {
  beforeEach(() => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
    cy.scrollTo('bottom')
  })
  it('01 FT - Validate Footer', () => {
    cy.footerMobile()
  })
})
describe('Regionalizado Mooca Não Logado', () => {
  beforeEach(() => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
    cy.scrollTo('bottom')
  })

  it('01 FT - Validate Footer', () => {
    cy.footerMobile()
  })
})
describe('Regionalizado Benfica Não Logado', () => {
  beforeEach(() => {
    cy.regionlizedWithoutLoginQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
    cy.scrollTo('bottom')
  })

  it('01 FT - Validate Footer', () => {
    cy.footerMobile()
  })
})
