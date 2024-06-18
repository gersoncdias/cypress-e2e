const env = require('../../../cypress.env.json')
const validation_data_login = require('../../../fixtures/login.json')
const validation_data_my_account = require('../../../fixtures/my_account.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')

describe('Não Regionalizado Logado', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.loginMobile()
  })

  it('02 LG - Login with valid e-mail and password', () => {
    cy.modalLoginMobile(env.user_qecom.email, env.user_qecom.password)
  })
  it('03 LG - Login with  CNPJ', () => {
    cy.modalLoginMobile(env.user_qecom.cnpj, env.user_qecom.password)
    cy.checkuseMobile(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.account,
      env.user_qecom.user_name_cnpj_mobile
    )
  })
  it('04 LG - Login with  CPF', () => {
    cy.modalLoginMobile(env.user_qecom.cpf, env.user_qecom.password)
    cy.checkuseMobile(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.account,
      env.user_qecom.user_name
    )
  })
  it.skip('05 LG – Login without email or CPF/CNPJ', () => {
    cy.loginMobile()
    cy.modalLoginMobile(
      ' ',
      ' ',
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.withoutEmail()
  })
  it.skip('06 LG – Login without password', () => {
    cy.loginMobile()
    cy.modalLoginMobile(
      env.user_qecom.cpf,
      ' ',
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.withoutPassword()
  })
  it('07 LG - Validate Logout', () => {
    cy.loggedQecomMobile(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
    cy.logoutMobile(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.account,
      validation_data_login.interface.exit
    )
    cy.validatePageAccessed(Cypress.config().baseUrl)
  })
})
describe('Regionalizado Benfica Logado', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.loginMobile()
  })

  it('02 LG - Login with valid e-mail and password', () => {
    cy.loginMobile()
    cy.modalLoginMobile(env.user_qecom.email, env.user_qecom.password)
  })
  it('03 LG - Login with  CNPJ', () => {
    cy.loginMobile()
    cy.modalLoginMobile(env.user_qecom.cnpj, env.user_qecom.password)
    cy.checkuseMobile(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.account,
      env.user_qecom.user_name_cnpj_mobile
    )
  })
  it('04 LG - Login with  CPF', () => {
    cy.loginMobile()
    cy.modalLoginMobile(env.user_qecom.cpf, env.user_qecom.password)
    cy.checkuseMobile(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.account,
      env.user_qecom.user_name
    )
  })
  it.skip('05 LG – Login without email or CPF/CNPJ', () => {
    cy.loginMobile()
    cy.modalLoginMobile(
      ' ',
      ' ',
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.withoutEmail()
  })
  it.skip('06 LG – Login without password', () => {
    cy.loginMobile()
    cy.modalLoginMobile(
      env.user_qecom.cpf,
      ' ',
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.withoutPassword()
  })
  it('07 LG - Validate Logout', () => {
    cy.loggedQecomMobile(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
    cy.logoutMobile(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.account,
      validation_data_login.interface.exit
    )
    cy.validatePageAccessed(Cypress.config().baseUrl)
  })
})
describe('Regionalizado Mooca Logado', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.loginMobile()
  })

  it('02 LG - Login with valid e-mail and password', () => {
    cy.loginMobile()
    cy.modalLoginMobile(env.user_qecom.email, env.user_qecom.password)
  })
  it('03 LG - Login with  CNPJ', () => {
    cy.loginMobile()
    cy.modalLoginMobile(env.user_qecom.cnpj, env.user_qecom.password)
    cy.checkuseMobile(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.account,
      env.user_qecom.user_name_cnpj_mobile
    )
  })
  it('04 LG - Login with  CPF', () => {
    cy.loginMobile()
    cy.modalLoginMobile(env.user_qecom.cpf, env.user_qecom.password)
    cy.checkuseMobile(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.account,
      env.user_qecom.user_name
    )
  })
  it.skip('05 LG – Login without email or CPF/CNPJ', () => {
    cy.loginMobile()
    cy.modalLoginMobile(
      ' ',
      ' ',
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.withoutEmail()
  })
  it.skip('06 LG – Login without password', () => {
    cy.loginMobile()
    cy.modalLoginMobile(
      env.user_qecom.cpf,
      ' ',
      validation_data_login.interface.select_option_login,
      validation_data_login.interface.input_type
    )
    cy.withoutPassword()
  })
  it('07 LG - Validate Logout', () => {
    cy.loggedQecomMobile(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
    cy.logoutMobile(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.account,
      validation_data_login.interface.exit
    )
    cy.validatePageAccessed(Cypress.config().baseUrl)
  })
})
