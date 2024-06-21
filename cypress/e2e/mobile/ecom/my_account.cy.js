const env = require('../../../cypress.env.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')
const validation_data_my_account = require('../../../fixtures/my_account.json')
const validation_data_stores = require('../../../fixtures/storeSettings.json')

describe('Não Regionalizado Logado', () => {
  beforeEach(() => {
    cy.loginByApi(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_stores.api.account_name
    )
    cy.visit(Cypress.config().baseUrl + validation_data_my_account.my_account.url.account)
  })
  it('00 MA - Validate acess', () => {
    cy.acessMyAccount(Cypress.config().baseUrl + validation_data_my_account.my_account.url.account)
  })
  it('01 MA - Validate person data', () => {
    cy.personData(validation_data_my_account.my_account.menu.personal_data)
    cy.modalPersonData()
    cy.modalName(
      validation_data_my_account.my_account.labels.name,
      env.user_qecom.user_name,
      validation_data_my_account.my_account.labels.last_name,
      env.user_qecom.last_name
    )
    cy.modalEmail(validation_data_my_account.my_account.labels.email, env.user_qecom.email)
    cy.modalCpf(validation_data_my_account.my_account.labels.cpf, env.user_qecom.cpf)
    cy.birthDate(validation_data_my_account.my_account.labels.birth_date, env.user_qecom.birth_date)
    cy.phoneNumber(validation_data_my_account.my_account.labels.phone_number, env.user_qecom.phone_number)
    cy.btnEdit(validation_data_my_account.my_account.labels.btn_edit)
  })
  it('02 MA - Validate address', () => {
    cy.adresMobile(validation_data_my_account.my_account.menu.address)
  })
  it('03 MA - Validate my orders', () => {
    cy.myOrder(validation_data_my_account.my_account.menu.order)
    cy.modalOrder(validation_data_my_account.my_account.menu.without_order)
  })
  it('04 MA - Validate my cards', () => {
    cy.myCards(validation_data_my_account.my_account.menu.cards)
    cy.modalOrder(validation_data_my_account.my_account.menu.without_cards)
  })
  it.skip('05 MA - Validate my credit', () => {
    cy.myCredit(validation_data_my_account.my_account.menu.my_credits)
    cy.modalOrder(validation_data_my_account.my_account.menu.without_credit)
  })
  it('06 MA - Validate authentication', () => {
    cy.authentication(validation_data_my_account.my_account.menu.authentication)
    cy.modalOrder(validation_data_my_account.my_account.menu.authentication)
  })
  it('07 MA - Validate my works', () => {
    cy.myWorks(
      validation_data_my_account.my_account.menu.my_works,
      validation_data_my_account.my_account.menu.my_balance
    )
  })
  it.skip('10 MA - Validate CredObra balance in the "My Credits" tab', () => {
    cy.creditMyWorks(validation_data_my_account.my_account.menu.my_works)
  })
  it('16 MA - Validate to go out', () => {
    cy.btnExit(validation_data_my_account.my_account.menu.exit)
    cy.modalExit(
      validation_data_my_account.my_account.menu.claim_exit,
      validation_data_my_account.my_account.menu.exit
    )
    cy.validatePageAccessed(Cypress.config().baseUrl)
  })
})
describe('Regionalizado Benfica Logado', () => {
  beforeEach(() => {
    cy.loginByApi(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_stores.api.account_name
    )
    cy.visit(Cypress.config().baseUrl + validation_data_my_account.my_account.url.my_account)
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
  })
  it('00 MA - Validate acess', () => {
    cy.acessMyAccount(Cypress.config().baseUrl + validation_data_my_account.my_account.url.my_account)
  })
  it('01 MA - Validate person data', () => {
    cy.personData(validation_data_my_account.my_account.menu.personal_data)
    cy.modalPersonData()
    cy.modalName(
      validation_data_my_account.my_account.labels.name,
      env.user_qecom.user_name,
      validation_data_my_account.my_account.labels.last_name,
      env.user_qecom.last_name
    )
    cy.modalEmail(validation_data_my_account.my_account.labels.email, env.user_qecom.email)
    cy.modalCpf(validation_data_my_account.my_account.labels.cpf, env.user_qecom.cpf)
    cy.birthDate(validation_data_my_account.my_account.labels.birth_date, env.user_qecom.birth_date)
    cy.phoneNumber(validation_data_my_account.my_account.labels.phone_number, env.user_qecom.phone_number)
    cy.btnEdit(validation_data_my_account.my_account.labels.btn_edit)
  })
  it('02 MA - Validate address', () => {
    cy.adress(validation_data_my_account.my_account.menu.address)
    cy.modalAdressTitle(validation_data_my_account.my_account.menu.address)
    cy.modalAddAdress(validation_data_my_account.my_account.menu.add_adress)
    cy.modalAdress(validation_data_my_account.my_account.menu.addres)
  })
  it('03 MA - Validate my orders', () => {
    cy.myOrder(validation_data_my_account.my_account.menu.order)
    cy.modalOrder(validation_data_my_account.my_account.menu.without_order)
  })
  it('04 MA - Validate my orders', () => {
    cy.myCards(validation_data_my_account.my_account.menu.cards)
    cy.modalOrder(validation_data_my_account.my_account.menu.without_cards)
  })
  it.skip('05 MA - Validate my credit', () => {
    cy.myCredit(validation_data_my_account.my_account.menu.my_credits)
    cy.modalOrder(validation_data_my_account.my_account.menu.without_credit)
  })
  it('06 MA - Validate authentication', () => {
    cy.authentication(validation_data_my_account.my_account.menu.authentication)
    cy.modalOrder(validation_data_my_account.my_account.menu.authentication)
  })
  it('07 MA - Validate my works', () => {
    cy.myWorks(
      validation_data_my_account.my_account.menu.my_works,
      validation_data_my_account.my_account.menu.my_balance
    )
  })
  it.skip('10 MA - Validate CredObra balance in the "My Credits" tab', () => {
    cy.creditMyWorks(validation_data_my_account.my_account.menu.my_works)
  })
  it('16 MA - Validate to go out', () => {
    cy.btnExit(validation_data_my_account.my_account.menu.exit)
    cy.modalExit(
      validation_data_my_account.my_account.menu.claim_exit,
      validation_data_my_account.my_account.menu.exit
    )
    cy.validatePageAccessed(Cypress.config().baseUrl)
  })
})
describe('Regionalizado Mooca Logado', () => {
  beforeEach(() => {
    cy.loginByApi(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_stores.api.account_name
    )
    cy.visit(Cypress.config().baseUrl + validation_data_my_account.my_account.url.my_account)
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
  })
  it('00 MA - Validate acess', () => {
    cy.acessMyAccount(Cypress.config().baseUrl + validation_data_my_account.my_account.url.my_account)
  })
  it('01 MA - Validate person data', () => {
    cy.personData(validation_data_my_account.my_account.menu.personal_data)
    cy.modalPersonData()
    cy.modalName(
      validation_data_my_account.my_account.labels.name,
      env.user_qecom.user_name,
      validation_data_my_account.my_account.labels.last_name,
      env.user_qecom.last_name
    )
    cy.modalEmail(validation_data_my_account.my_account.labels.email, env.user_qecom.email)
    cy.modalCpf(validation_data_my_account.my_account.labels.cpf, env.user_qecom.cpf)
    cy.birthDate(validation_data_my_account.my_account.labels.birth_date, env.user_qecom.birth_date)
    cy.phoneNumber(validation_data_my_account.my_account.labels.phone_number, env.user_qecom.phone_number)
    cy.btnEdit(validation_data_my_account.my_account.labels.btn_edit)
  })
  it('02 MA - Validate address', () => {
    cy.adress(validation_data_my_account.my_account.menu.address)
    cy.modalAdressTitle(validation_data_my_account.my_account.menu.address)
    cy.modalAddAdress(validation_data_my_account.my_account.menu.add_adress)
    cy.modalAdress(validation_data_my_account.my_account.menu.addres)
  })
  it('03 MA - Validate my orders', () => {
    cy.myOrder(validation_data_my_account.my_account.menu.order)
    cy.modalOrder(validation_data_my_account.my_account.menu.without_order)
  })
  it('04 MA - Validate my orders', () => {
    cy.myCards(validation_data_my_account.my_account.menu.cards)
    cy.modalOrder(validation_data_my_account.my_account.menu.without_cards)
  })
  it.skip('05 MA - Validate my credit', () => {
    cy.myCredit(validation_data_my_account.my_account.menu.my_credits)
    cy.modalOrder(validation_data_my_account.my_account.menu.without_credit)
  })
  it('06 MA - Validate authentication', () => {
    cy.authentication(validation_data_my_account.my_account.menu.authentication)
    cy.modalOrder(validation_data_my_account.my_account.menu.authentication)
  })
  it('07 MA - Validate my works', () => {
    cy.myWorks(
      validation_data_my_account.my_account.menu.my_works,
      validation_data_my_account.my_account.menu.my_balance
    )
  })
  it.skip('10 MA - Validate CredObra balance in the "My Credits" tab', () => {
    cy.creditMyWorks(validation_data_my_account.my_account.menu.my_works)
  })
  it('16 MA - Validate to go out', () => {
    cy.btnExit(validation_data_my_account.my_account.menu.exit)
    cy.modalExit(
      validation_data_my_account.my_account.menu.claim_exit,
      validation_data_my_account.my_account.menu.exit
    )
    cy.validatePageAccessed(Cypress.config().baseUrl)
  })
})
