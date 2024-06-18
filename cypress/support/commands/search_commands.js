const SEARCH_PAGE = require('../page_elements/search_page')
const SEARCH_PG = new SEARCH_PAGE()

Cypress.Commands.add('inputSearch', (placeholder) => {
  cy.get(SEARCH_PG.INPUT_SEARCH)
    .should('exist')
    .should('be.visible')
    .should('have.attr', 'placeholder', placeholder)
})
Cypress.Commands.add('modalSearch', () => {
  cy.get(SEARCH_PG.DIV_AUTO_COMPLETE).should('exist').should('be.visible')
})
Cypress.Commands.add('modalAutoComplite', (searched) => {
  cy.get(SEARCH_PG.INPUT_SEARCH).focus()
  cy.get(SEARCH_PG.MODAL_AUTO_COMPLETE).should('exist').should('be.visible').should('contain.text', searched)
})
Cypress.Commands.add('inputText', (text) => {
  cy.get(SEARCH_PG.INPUT_SEARCH).focus()
  cy.get(SEARCH_PG.INPUT_SEARCH).type(text)
  cy.get(SEARCH_PG.LIST_SEARCH).should('exist').should('be.visible').should('have.length', 4)
})
