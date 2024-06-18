const validation_data_search = require('../../../fixtures/search.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')
const validation_data_login = require('../../../fixtures/login.json')

describe('Não Regionalizado Logado', () => {
  beforeEach(() => {
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
  })
  it('00 SB - Validate suggestion', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.inputText(validation_data_search.search.input_text.text_suggestion, 4)
  })
  it('01 SB - Validate most searched terms', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalAutoComplite(validation_data_search.search.input_search.most_searched)
  })
  it('02 SB - Validate product not found', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalSearchSugestionsMobile(validation_data_search.search.input_text.text_not_found)
  })
  it('03 SB - Validate image', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.inputText(validation_data_search.search.input_text.text_suggestion, 4)
    cy.imageSearch(4)
  })
})
describe('Regionalizado Benfica Logado', () => {
  beforeEach(() => {
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_benfica)
  })
  it('00 SB - Validate suggestion', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.inputText(validation_data_search.search.input_text.text_suggestion, 4)
  })
  it('01 SB - Validate most searched terms', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalAutoComplite(validation_data_search.search.input_search.most_searched)
  })
  it('02 SB - Validate product not found', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalSearchSugestionsMobile(validation_data_search.search.input_text.text_not_found)
  })
  it('03 SB - Validate image', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.inputText(validation_data_search.search.input_text.text_suggestion, 4)
    cy.imageSearch(4)
  })
})
describe('Regionalizado Mooca Logado', () => {
  beforeEach(() => {
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
  })
  it('00 SB - Validate suggestion', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.inputText(validation_data_search.search.input_text.text_suggestion, 4)
  })
  it('01 SB - Validate most searched terms', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalAutoComplite(validation_data_search.search.input_search.most_searched)
  })
  it('02 SB - Validate product not found', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalSearchSugestionsMobile(validation_data_search.search.input_text.text_not_found)
  })
  it('03 SB - Validate image', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.inputText(validation_data_search.search.input_text.text_suggestion, 4)
    cy.imageSearch(4)
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
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
  })
  it('00 SB - Validate suggestion', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.inputText(validation_data_search.search.input_text.text_suggestion, 4)
  })
  it('01 SB - Validate most searched terms', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalAutoComplite(validation_data_search.search.input_search.most_searched)
  })
  it('02 SB - Validate product not found', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalSearchSugestionsMobile(validation_data_search.search.input_text.text_not_found)
  })
  it('03 SB - Validate image', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.inputText(validation_data_search.search.input_text.text_suggestion, 4)
    cy.imageSearch(4)
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
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
  })
  it('00 SB - Validate suggestion', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.inputText(validation_data_search.search.input_text.text_suggestion, 4)
  })
  it('01 SB - Validate most searched terms', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalAutoComplite(validation_data_search.search.input_search.most_searched)
  })
  it('02 SB - Validate product not found', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalSearchSugestionsMobile(validation_data_search.search.input_text.text_not_found)
  })
  it('03 SB - Validate image', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.inputText(validation_data_search.search.input_text.text_suggestion, 4)
    cy.imageSearch(4)
  })
})
describe('Regionalizado Benfica Não Logado', () => {
  beforeEach(() => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_benfica)
  })
  it('00 SB - Validate suggestion', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.inputText(validation_data_search.search.input_text.text_suggestion, 4)
  })
  it('01 SB - Validate most searched terms', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalAutoComplite(validation_data_search.search.input_search.most_searched)
  })
  it('02 SB - Validate product not found', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.modalSearchSugestionsMobile(validation_data_search.search.input_text.text_not_found)
  })
  it('03 SB - Validate image', () => {
    cy.inputSearch(validation_data_search.search.input_search.placeholder)
    cy.inputText(validation_data_search.search.input_text.text_suggestion, 4)
    cy.imageSearch(4)
  })
})
