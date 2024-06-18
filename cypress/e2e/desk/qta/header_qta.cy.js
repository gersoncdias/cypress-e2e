const env = require('../../../cypress.env.json')
const validation_data_header = require('../../../fixtures/header.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')
const cookies_data = require('../../../fixtures/cookies.json')

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
  it('01 BTV - Validate burger menu', () => {
    cy.burgerMenu(
      validation_data_header.header.modalBurger.txt_cart,
      validation_data_header.header.modalBurger.txt_bulk_order,
      validation_data_header.header.modalBurger.txt_registration,
    )
  })
  it.skip('02 BTV - Validate redirection - new cart', () => {
    cy.btnNewCart()
  })
  it.skip('02.1 BTV - Validate redirection - bulk order', () => {
    cy.btnBulkOrder()
  })
  it.skip('02.2 BTV - Validate redirection - registration', () => {
    cy.btnRegistration()
  })
  it('02.3 BTV - Validate redirection - logout', () => {
    cy.btnoLgout()
  })
  it('03 BTV - Validate attendant', () => {
    cy.userQta(env.user_qta.user_tlv.user_name)
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
  it('01 BTV - Validate burger menu', () => {
    cy.burgerMenu(
      validation_data_header.header.modalBurger.txt_cart,
      validation_data_header.header.modalBurger.txt_bulk_order,
      validation_data_header.header.modalBurger.txt_registration,
    )
  })
  it.skip('02 BTV - Validate redirection - new cart', () => {
    cy.btnNewCart()
  })
  it.skip('02.1 BTV - Validate redirection - bulk order', () => {
    cy.btnBulkOrder()
  })
  it.skip('02.2 BTV - Validate redirection - registration', () => {
    cy.btnRegistration()
  })
  it('02.3 BTV - Validate redirection - logout', () => {
    cy.btnoLgout()
  })
  it('03 BTV - Validate attendant', () => {
    cy.userQta(env.user_qta.user_tlv.user_name)
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
  it('01 BTV - Validate burger menu', () => {
    cy.burgerMenu(
      validation_data_header.header.modalBurger.txt_cart,
      validation_data_header.header.modalBurger.txt_bulk_order,
      validation_data_header.header.modalBurger.txt_registration,
    )
  })
  it.skip('02 BTV - Validate redirection - new cart', () => {
    cy.btnNewCart()
  })
  it.skip('02.1 BTV - Validate redirection - bulk order', () => {
    cy.btnBulkOrder()
  })
  it.skip('02.2 BTV - Validate redirection - registration', () => {
    cy.btnRegistration()
  })
  it('02.3 BTV - Validate redirection - logout', () => {
    cy.btnoLgout()
  })
  it('03 BTV - Validate attendant', () => {
    cy.userQta(env.user_qta.user_tlv.user_name)
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

  it.skip('02 BTV - Validate redirection - new cart', () => {
    cy.btnNewCart()
  })
  it.skip('02.1 BTV - Validate redirection - bulk order', () => {
    cy.btnBulkOrder()
  })
  it.skip('02.2 BTV - Validate redirection - registration', () => {
    cy.btnRegistration()
  })
  it('02.3 BTV - Validate redirection - logout', () => {
    cy.btnoLgout()
  })
  it('03 BTV - Validate attendant', () => {
    cy.userQta(env.user_qta.user_tlv.user_name)
  })
})
