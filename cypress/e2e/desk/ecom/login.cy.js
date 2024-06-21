const env = require('../../../cypress.env.json')
const validation_data_login = require('../../../fixtures/login.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')
const validation_data_stores = require('../../../fixtures/storeSettings.json')

describe('Não Regionalizado Logado', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('02 LG - Login with valid e-mail and password', { tags: ['@smoke', '@critical'] }, () => {
    cy.login()
    cy.modalLogin(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.modalUserLoggedi(validation_data_login.interface.greeting + env.user_qecom.user_name)
  })
  it('03 LG - Login with  CNPJ', { tags: ['@smoke', '@critical'] }, () => {
    cy.login()
    cy.modalLogin(
      env.user_qecom.cnpj,
      env.user_qecom.password,
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.modalUserLoggedi(env.user_qecom.user_name_cnpj_mobile)
  })
  it('04 LG - Login with  CPF', { tags: ['@smoke', '@critical'] }, () => {
    cy.login()
    cy.modalLogin(
      env.user_qecom.cpf,
      env.user_qecom.password,
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.modalUserLoggedi(validation_data_login.interface.greeting + env.user_qecom.user_name)
  })
  it('05 LG - Login without email or CPF/CNPJ', () => {
    cy.login()
    cy.modalLogin(
      ' ',
      ' ',
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.withoutEmail()
  })
  it('06 LG - Login without password', () => {
    cy.login()
    cy.modalLogin(
      env.user_qecom.cpf,
      ' ',
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.withoutPassword()
  })
  it('07 LG - Validate Logout', { tags: ['@smoke', '@critical'] }, () => {
    cy.loginByApi(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_stores.api.account_name
    )
    cy.visit(Cypress.config().baseUrl)

    cy.account_options(validation_data_login.interface.exit)
  })
})
describe('Regionalizado Benfica Logado', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
  })
  it('02 LG - Login with valid e-mail and password', { tags: ['@smoke', '@critical'] }, () => {
    cy.login()
    cy.modalLogin(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.modalUserLoggedi(validation_data_login.interface.greeting + env.user_qecom.user_name)
  })
  it('03 LG - Login with  CNPJ', { tags: ['@smoke', '@critical'] }, () => {
    cy.login()
    cy.modalLogin(
      env.user_qecom.cnpj,
      env.user_qecom.password,
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.modalUserLoggedi(env.user_qecom.user_name_cnpj_mobile)
  })
  it('04 LG - Login with  CPF', { tags: ['@smoke', '@critical'] }, () => {
    cy.login()
    cy.modalLogin(
      env.user_qecom.cpf,
      env.user_qecom.password,
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.modalUserLoggedi(validation_data_login.interface.greeting + env.user_qecom.user_name)
  })
  it('05 LG - Login without email or CPF/CNPJ', () => {
    cy.login()
    cy.modalLogin(
      ' ',
      ' ',
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.withoutEmail()
  })
  it('06 LG - Login without password', () => {
    cy.login()
    cy.modalLogin(
      env.user_qecom.cpf,
      ' ',
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.withoutPassword()
  })
  it('07 LG - Validate Logout', { tags: ['@smoke', '@critical'] }, () => {
    cy.loginByApi(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_stores.api.account_name
    )
    cy.visit(Cypress.config().baseUrl)

    cy.account_options(validation_data_login.interface.exit)
  })
})
describe('Regionalizado Mooca Logado', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
  })
  it('02 LG - Login with valid e-mail and password', { tags: ['@smoke', '@critical'] }, () => {
    cy.login()
    cy.modalLogin(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.modalUserLoggedi(validation_data_login.interface.greeting + env.user_qecom.user_name)
  })
  it('03 LG - Login with  CNPJ', { tags: ['@smoke', '@critical'] }, () => {
    cy.login()
    cy.modalLogin(
      env.user_qecom.cnpj,
      env.user_qecom.password,
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.modalUserLoggedi(env.user_qecom.user_name_cnpj_mobile)
  })
  it('04 LG - Login with  CPF', { tags: ['@smoke', '@critical'] }, () => {
    cy.login()
    cy.modalLogin(
      env.user_qecom.cpf,
      env.user_qecom.password,
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.modalUserLoggedi(validation_data_login.interface.greeting + env.user_qecom.user_name)
  })
  it('05 LG - Login without email or CPF/CNPJ', () => {
    cy.login()
    cy.modalLogin(
      ' ',
      ' ',
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.withoutEmail()
  })
  it('06 LG - Login without password', () => {
    cy.login()
    cy.modalLogin(
      env.user_qecom.cpf,
      ' ',
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.withoutPassword()
  })
  it('07 LG - Validate Logout', { tags: ['@smoke', '@critical'] }, () => {
    cy.loginByApi(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_stores.api.account_name
    )
    cy.visit(Cypress.config().baseUrl)
    cy.account_options(validation_data_login.interface.exit)
  })
})
