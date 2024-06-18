const env = require('../../../cypress.env.json')
const cookies_data = require('../../../fixtures/cookies.json')
const validation_data_search = require('../../../fixtures/search.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')

describe('Regionalizado Benfica Personificado', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.setCookie(cookies_data.personification.cookie_person_name, env.user_qecom.email)
    cy.personifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password
    )
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_benfica)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_benfica_qta)
  })

  it('00 SB - Validate suggestion', () => {
    cy.modalSearch()
    cy.inputSearchQta(validation_data_search.search.input_search.placeholder)
    cy.inputTextQta(validation_data_search.search.input_text.text_suggestion, 2)
  })
  it('01 SB - Validate most searched terms', () => {
    cy.modalSearch()
    cy.inputSearchQta(validation_data_search.search.input_search.placeholder)
    cy.modalAutoCompliteQta(validation_data_search.search.input_search.most_searched)
  })
  it('02 SB - Validate product not found', () => {
    cy.modalSearch()
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalSearchSugestionsQta(validation_data_search.search.input_text.text_not_found)
  })
  it('03 SB - Validate image', () => {
    cy.modalSearch()
    cy.inputSearchQta(validation_data_search.search.input_search.placeholder)
    cy.inputTextQta(validation_data_search.search.input_text.text_suggestion, 2)
    cy.imageSearchQta(2)
  })
})
describe('Regionalizado Mooca Personificado', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.setCookie(cookies_data.personification.cookie_person_name, env.user_qecom.email)
    cy.personifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password
    )
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_mooca)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_mooca_qta)
  })
  it('00 SB - Validate suggestion', () => {
    cy.modalSearch()
    cy.inputSearchQta(validation_data_search.search.input_search.placeholder)
    cy.inputTextQta(validation_data_search.search.input_text.text_suggestion, 2)
  })
  it('01 SB - Validate most searched terms', () => {
    cy.modalSearch()
    cy.inputSearchQta(validation_data_search.search.input_search.placeholder)
    cy.modalAutoCompliteQta(validation_data_search.search.input_search.most_searched)
  })
  it('02 SB - Validate product not found', () => {
    cy.modalSearch()
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalSearchSugestionsQta(validation_data_search.search.input_text.text_not_found)
  })
  it('03 SB - Validate image', () => {
    cy.modalSearch()
    cy.inputSearchQta(validation_data_search.search.input_search.placeholder)
    cy.inputTextQta(validation_data_search.search.input_text.text_suggestion, 2)
    cy.imageSearchQta(2)
  })
})
describe('Regionalizado Mooca Não Personificado', () => {
  beforeEach(() => {
    cy.nopersonifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password
    )
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_mooca_qta)
  })
  it('00 SB - Validate suggestion', () => {
    cy.modalSearch()
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.inputTextQta(validation_data_search.search.input_text.text_suggestion, 2)
  })
  it('01 SB - Validate most searched terms', () => {
    cy.modalSearch()
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalAutoCompliteQta(validation_data_search.search.input_search.most_searched)
  })
  it('02 SB - Validate product not found', () => {
    cy.modalSearch()
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalSearchSugestionsQta(validation_data_search.search.input_text.text_not_found)
  })
  it('03 SB - Validate image', () => {
    cy.modalSearch()
    cy.inputSearchQta(validation_data_search.search.input_search.placeholder)
    cy.inputTextQta(validation_data_search.search.input_text.text_suggestion, 2)
    cy.imageSearchQta(2)
  })
})
describe('Regionalizado Benfica Não Personificado', () => {
  beforeEach(() => {
    cy.nopersonifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password
    )
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_benfica)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_benfica_qta)
  })
  it('00 SB - Validate suggestion', () => {
    cy.modalSearch()
    cy.inputSearchQta(validation_data_search.search.input_search.placeholder)
    cy.inputTextQta(validation_data_search.search.input_text.text_suggestion, 2)
  })
  it('01 SB - Validate most searched terms', () => {
    cy.modalSearch()
    cy.inputSearchQta(validation_data_search.search.input_search.placeholder)
    cy.modalAutoCompliteQta(validation_data_search.search.input_search.most_searched)
  })
  it('02 SB - Validate product not found', () => {
    cy.modalSearch()
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalSearchSugestionsQta(validation_data_search.search.input_text.text_not_found)
  })
  it('03 SB - Validate image', () => {
    cy.modalSearch()
    cy.inputSearchQta(validation_data_search.search.input_search.placeholder)
    cy.inputTextQta(validation_data_search.search.input_text.text_suggestion, 2)
    cy.imageSearchQta(2)
  })
})
