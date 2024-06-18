const env = require('../../../cypress.env.json')
const cookies_data = require('../../../fixtures/cookies.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')
const validation_data_my_account = require('../../../fixtures/my_account.json')

describe('Regionalizado Benfica Personificado', () => {
  beforeEach(() => {
    cy.setCookie(cookies_data.personification.cookie_person_name, env.user_qecom.email)
    cy.personifiedQta(
      Cypress.config().url_loja + validation_data_my_account.my_account.url.my_account,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_benfica)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_benfica_qta)
  })
  it('00 MA - Validate acess', () => {
    cy.acessMyAccount(Cypress.config().url_loja + validation_data_my_account.my_account.url.my_account)
  })
  it('01 MA - Validate person data', () => {
    cy.personData(validation_data_my_account.my_account.menu.personal_data)
    cy.modalPersonData()
    cy.modalName(
      validation_data_my_account.my_account.labels.name,
      env.user_qecom.user_name,
      validation_data_my_account.my_account.labels.last_name,
      env.user_qecom.last_name,
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
  it('16 MA - Validate to go out', () => {
    cy.btnExit(validation_data_my_account.my_account.menu.exit)
    cy.modalExit(
      validation_data_my_account.my_account.menu.claim_exit,
      validation_data_my_account.my_account.menu.exit,
    )
    cy.validatePageAccessed(Cypress.config().url_loja)
  })
})
describe('Regionalizado Mooca Personificado', () => {
  beforeEach(() => {
    cy.setCookie(cookies_data.personification.cookie_person_name, env.user_qecom.email)
    cy.personifiedQta(
      Cypress.config().url_loja + validation_data_my_account.my_account.url.my_account,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_mooca)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_mooca_qta)
  })
  it('00 MA - Validate acess', () => {
    cy.acessMyAccount(Cypress.config().url_loja + validation_data_my_account.my_account.url.my_account)
  })
  it('01 MA - Validate person data', () => {
    cy.personData(validation_data_my_account.my_account.menu.personal_data)
    cy.modalPersonData()
    cy.modalName(
      validation_data_my_account.my_account.labels.name,
      env.user_qecom.user_name,
      validation_data_my_account.my_account.labels.last_name,
      env.user_qecom.last_name,
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
  it('16 MA - Validate to go out', () => {
    cy.btnExit(validation_data_my_account.my_account.menu.exit)
    cy.modalExit(
      validation_data_my_account.my_account.menu.claim_exit,
      validation_data_my_account.my_account.menu.exit,
    )
    cy.validatePageAccessed(Cypress.config().url_loja)
  })
})
