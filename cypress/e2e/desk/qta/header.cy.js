const env = require('../../../cypress.env.json')
const cookies_data = require('../../../fixtures/cookies.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')
const validation_data_my_account = require('../../../fixtures/my_account.json')

describe('Regionalizado Benfica Personificado', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.setCookie(cookies_data.personification.cookie_person_name, env.user_qecom.email)
    cy.personifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_benfica)
  })
  it('00 HE - Validate regionalization sallers', () => {
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_benfica_qta)
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().url_loja + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().url_loja,
    )
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartLogo()
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopoQta()
  })
  it('12.1 HE - Validate reader fixed', () => {
    cy.readerFixed()
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
  it('13.1 HE - Validate Mini Logo', () => {
    cy.miniLogoReader()
  })
})
describe('Regionalizado Mooca Personificado', () => {
  beforeEach(() => {
    cy.setCookie(cookies_data.personification.cookie_person_name, env.user_qecom.email)
    cy.personifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
  })
  it('00 HE - Validate regionalization sallers', () => {
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_benfica)
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().url_loja + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().url_loja,
    )
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartLogo()
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopoQta()
  })
  it('12.1 HE - Validate reader fixed', () => {
    cy.readerFixed()
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
  it('13.1 HE - Validate Mini Logo', () => {
    cy.miniLogoReader()
  })
})
describe('Regionalizado Mooca Não Personificado', () => {
  beforeEach(() => {
    cy.nopersonifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
  })
  it('00 HE - Validate regionalization sallers', () => {
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_benfica_qta)
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().url_loja + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().url_loja,
    )
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartLogo()
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopoQta()
  })
  it('12.1 HE - Validate reader fixed', () => {
    cy.readerFixed()
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
  it('13.1 HE - Validate Mini Logo', () => {
    cy.miniLogoReader()
  })
})
describe('Regionalizado Benfica Não Personificado', () => {
  beforeEach(() => {
    cy.nopersonifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_benfica)
  })
  it('00 HE - Validate regionalization sallers', () => {
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_benfica_qta)
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().url_loja + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().url_loja,
    )
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartLogo()
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopoQta()
  })
  it('12.1 HE - Validate reader fixed', () => {
    cy.readerFixed()
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
  it('13.1 HE - Validate Mini Logo', () => {
    cy.miniLogoReader()
  })
})
