const env = require('../../../cypress.env.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')
const validation_data_stores = require('../../../fixtures/storeSettings.json')

describe('Não Regionalizado Logado', { testIsolation: false }, () => {
  before(() => {
    cy.loginByApi(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_stores.api.account_name
    )
    cy.visit(Cypress.config().baseUrl)
    cy.scrollTo('bottom')
  })

  it('01 FT - Validate Footer', { tags: ['@smoke'] }, () => {
    cy.footer()
  })
  it('02 FT - Validate Menu Policy', () => {
    cy.footerMenuPolicy()
  })
  it('03 FT - Validate Menu Title', { tags: ['@smoke'] }, () => {
    cy.footerMenuTitle()
  })
  it('04 FT - Validate Menu Seller', () => {
    cy.footerMenuSeller()
  })
  it('05 FT - Validate Footer Menu', () => {
    cy.footerMenu()
  })
  it('06 FT - Validate Copy Richt', () => {
    cy.footerCopyRicht()
  })
  it('07 FT - Validate Footer Image', { tags: ['@smoke'] }, () => {
    cy.footerImagens()
  })
  it('08 FT - Validate Footer Institutional', () => {
    cy.footerInstitutional()
  })
})
describe('Regionalizado Benfica Logado', { testIsolation: false }, () => {
  before(() => {
    cy.loginByApi(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_stores.api.account_name
    )
    cy.visit(Cypress.config().baseUrl)
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
    cy.scrollTo('bottom')
  })
  it('01 FT - Validate Footer', { tags: ['@smoke'] }, () => {
    cy.footer()
  })
  it('02 FT - Validate Menu Policy', () => {
    cy.footerMenuPolicy()
  })
  it('03 FT - Validate Menu Title', { tags: ['@smoke'] }, () => {
    cy.footerMenuTitle()
  })
  it('04 FT - Validate Menu Seller', () => {
    cy.footerMenuSeller()
  })
  it('05 FT - Validate Footer Menu', () => {
    cy.footerMenu()
  })
  it('06 FT - Validate Copy Richt', () => {
    cy.footerCopyRicht()
  })
  it('07 FT - Validate Footer Image', { tags: ['@smoke'] }, () => {
    cy.footerImagens()
  })
  it('08 FT - Validate Footer Institutional', () => {
    cy.footerInstitutional()
  })
})
describe('Regionalizado Mooca Logado', { testIsolation: false }, () => {
  before(() => {
    cy.loginByApi(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_stores.api.account_name
    )
    cy.visit(Cypress.config().baseUrl)
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
    cy.scrollTo('bottom')
  })
  it('01 FT - Validate Footer', { tags: ['@smoke'] }, () => {
    cy.footer()
  })
  it('02 FT - Validate Menu Policy', () => {
    cy.footerMenuPolicy()
  })
  it('03 FT - Validate Menu Title', { tags: ['@smoke'] }, () => {
    cy.footerMenuTitle()
  })
  it('04 FT - Validate Menu Seller', () => {
    cy.footerMenuSeller()
  })
  it('05 FT - Validate Footer Menu', () => {
    cy.footerMenu()
  })
  it('06 FT - Validate Copy Richt', () => {
    cy.footerCopyRicht()
  })
  it('07 FT - Validate Footer Image', { tags: ['@smoke'] }, () => {
    cy.footerImagens()
  })
  it('08 FT - Validate Footer Institutional', () => {
    cy.footerInstitutional()
  })
})
describe('Não Regionalizado Não Logado', { testIsolation: false }, () => {
  before(() => {
    cy.loginByApi(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_stores.api.account_name
    )
    cy.visit(Cypress.config().baseUrl)
    cy.scrollTo('bottom')
  })
  it('01 FT - Validate Footer', { tags: ['@smoke'] }, () => {
    cy.footer()
  })
  it('02 FT - Validate Menu Policy', () => {
    cy.footerMenuPolicy()
  })
  it('03 FT - Validate Menu Title', { tags: ['@smoke'] }, () => {
    cy.footerMenuTitle()
  })
  it('04 FT - Validate Menu Seller', () => {
    cy.footerMenuSeller()
  })
  it('05 FT - Validate Footer Menu', () => {
    cy.footerMenu()
  })
  it('06 FT - Validate Copy Richt', () => {
    cy.footerCopyRicht()
  })
  it('07 FT - Validate Footer Image', { tags: ['@smoke'] }, () => {
    cy.footerImagens()
  })
  it('08 FT - Validate Footer Institutional', () => {
    cy.footerInstitutional()
  })
})
describe('Regionalizado Mooca Não Logado', { testIsolation: false }, () => {
  before(() => {
    cy.visit(Cypress.config().baseUrl)
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
    cy.scrollTo('bottom')
  })
  it('01 FT - Validate Footer', { tags: ['@smoke'] }, () => {
    cy.footer()
  })
  it('02 FT - Validate Menu Policy', () => {
    cy.footerMenuPolicy()
  })
  it('03 FT - Validate Menu Title', { tags: ['@smoke'] }, () => {
    cy.footerMenuTitle()
  })
  it('04 FT - Validate Menu Seller', () => {
    cy.footerMenuSeller()
  })
  it('05 FT - Validate Footer Menu', () => {
    cy.footerMenu()
  })
  it('06 FT - Validate Copy Richt', () => {
    cy.footerCopyRicht()
  })
  it('07 FT - Validate Footer Image', { tags: ['@smoke'] }, () => {
    cy.footerImagens()
  })
  it('08 FT - Validate Footer Institutional', () => {
    cy.footerInstitutional()
  })
})
describe('Regionalizado Benfica Não Logado', { testIsolation: false }, () => {
  before(() => {
    cy.visit(Cypress.config().baseUrl)
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
    cy.scrollTo('bottom')
  })
  it('01 FT - Validate Footer', { tags: ['@smoke'] }, () => {
    cy.footer()
  })
  it('02 FT - Validate Menu Policy', () => {
    cy.footerMenuPolicy()
  })
  it('03 FT - Validate Menu Title', { tags: ['@smoke'] }, () => {
    cy.footerMenuTitle()
  })
  it('04 FT - Validate Menu Seller', () => {
    cy.footerMenuSeller()
  })
  it('05 FT - Validate Footer Menu', () => {
    cy.footerMenu()
  })
  it('06 FT - Validate Copy Richt', () => {
    cy.footerCopyRicht()
  })
  it('07 FT - Validate Footer Image', { tags: ['@smoke'] }, () => {
    cy.footerImagens()
  })
  it('08 FT - Validate Footer Institutional', () => {
    cy.footerInstitutional()
  })
})
