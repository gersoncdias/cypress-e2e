const env = require('../../../cypress.env.json')
const cookies_data = require('../../../fixtures/cookies.json')
const validation_data_login = require('../../../fixtures/login.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')

describe('Regionalizado Benfica Personificado', () => {
  it('02 LG - Login with valid e-mail and password', () => {
    cy.visit(Cypress.config().url_loja)
    cy.modalLoginEmailQta(env.user_qta.user_tlv.user_name, validation_data_login.login.login_qta.title_email)
    cy.modalLoginPasswordQta(
      env.user_qta.user_tlv.password,
      validation_data_login.login.login_qta.title_password,
    )
    cy.validatePageAccessed(Cypress.config().url_loja)
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_benfica)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_benfica_qta)
    cy.userQta(env.user_qta.user_tlv.user_name)
  })
  it('03 LG - Personify with  e-mail', () => {
    cy.personifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
    cy.modalPerson(env.user_qecom.email)
    cy.confirmePerson(env.user_qecom.user_name)
    cy.userQta(env.user_qta.user_tlv.user_name)
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_benfica)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_benfica_qta)
  })
  it('04 LG - Personify with  CNPJ', () => {
    cy.personifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_benfica)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_benfica_qta)
    cy.modalPerson(env.user_qecom.cnpj)
    cy.confirmePerson(env.user_qecom.user_name_cnpj)
    cy.userQta(env.user_qta.user_tlv.user_name)
  })
  it('05 LG - Personify with  CPF', () => {
    cy.personifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_benfica)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_benfica_qta)
    cy.modalPerson(env.user_qecom.cpf)
    cy.userQta(env.user_qta.user_tlv.user_name)
    cy.confirmePerson(env.user_qecom.user_name)
  })
  it('06 LG - Validate Logout', () => {
    cy.personifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
    cy.logoutperson(validation_data_login.interface.exit)
  })
})
describe('Regionalizado Mooca Personificado', () => {
  it('02 LG - Login with valid e-mail and password', () => {
    cy.visit(Cypress.config().url_loja)
    cy.modalLoginEmailQta(env.user_qta.user_tlv.user_name, validation_data_login.login.login_qta.title_email)
    cy.modalLoginPasswordQta(
      env.user_qta.user_tlv.password,
      validation_data_login.login.login_qta.title_password,
    )
    cy.validatePageAccessed(Cypress.config().url_loja)
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_mooca)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_mooca_qta)
    cy.userQta(env.user_qta.user_tlv.user_name)
  })
  it('03 LG - Personify with  e-mail', () => {
    cy.personifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
    cy.modalPerson(env.user_qecom.email)
    cy.confirmePerson(env.user_qecom.user_name)
    cy.userQta(env.user_qta.user_tlv.user_name)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_mooca_qta)
  })
  it('04 LG - Personify with  CNPJ', () => {
    cy.personifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
      cookies_data.sellers.cookie_name.name,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.modalPerson(env.user_qecom.cnpj)
    cy.confirmePerson(env.user_qecom.user_name_cnpj)
    cy.userQta(env.user_qta.user_tlv.user_name)
  })
  it('05 LG - Personify with  CPF', () => {
    cy.personifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
      cookies_data.sellers.cookie_name.name,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.modalPerson(env.user_qecom.cpf)
    cy.userQta(env.user_qta.user_tlv.user_name)
    cy.confirmePerson(env.user_qecom.user_name)
  })
  it('06 LG - Validate Logout', () => {
    cy.personifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
      cookies_data.sellers.cookie_name.name,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      env.user_qecom.cpf,
      env.user_qecom.email,
    )
    cy.logoutperson(validation_data_login.interface.exit)
  })
})
describe('Regionalizado Mooca Não Personificado', () => {
  it('without  Personified', () => {
    cy.visit(Cypress.config().url_loja)
    cy.modalLoginEmailQta(env.user_qta.user_tlv.user_name, validation_data_login.login.login_qta.title_email)
    cy.modalLoginPasswordQta(
      env.user_qta.user_tlv.password,
      validation_data_login.login.login_qta.title_password,
    )
    cy.modalNotPerson(
      validation_data_login.interface.without_logged_qta_title +
        validation_data_login.interface.without_logged_qta_text,
    )
    cy.regionalizationPerson(validation_data_reg.regionalization.sellers.cep_mooca)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_mooca_qta)
  })
})
describe('Regionalizado Benfica Não Personificado', () => {
  it('without  Personified', () => {
    cy.visit(Cypress.config().url_loja)
    cy.modalLoginEmailQta(env.user_qta.user_tlv.user_name, validation_data_login.login.login_qta.title_email)
    cy.modalLoginPasswordQta(
      env.user_qta.user_tlv.password,
      validation_data_login.login.login_qta.title_password,
    )
    cy.modalNotPerson(
      validation_data_login.interface.without_logged_qta_title +
        validation_data_login.interface.without_logged_qta_text,
    )
    cy.regionalizationPerson(validation_data_reg.regionalization.sellers.cep_benfica)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_benfica_qta)
  })
})
