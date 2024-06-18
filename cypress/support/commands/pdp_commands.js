const PDP_PAGE = require('../page_elements/pdp_page')
const PDP_PG = new PDP_PAGE()

Cypress.Commands.add('breadcrumb', (txt) => {
  cy.get(PDP_PG.BREADCRUMBS).should('exist').should('be.visible').should('contain.text', txt)
})
Cypress.Commands.add('validImage', () => {
  cy.get(PDP_PG.MODAL_IMAGE).should('exist').should('be.visible')
  cy.get(PDP_PG.PRODUCT_IMAGE).should('exist').should('be.visible').should('have.length', 1)
})
Cypress.Commands.add('validTitle', (text) => {
  cy.get(PDP_PG.TEXT_TITLE).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('increaserQuantity', () => {
  cy.get(PDP_PG.QUANTITY_SELECTOR)
    .invoke('val')
    .then((currentValue) => {
      const currentValueNumber = parseFloat(currentValue)
      const newValue = currentValueNumber * 2

      const expectedValue = newValue % 1 === 0 ? newValue.toFixed(0) : newValue.toFixed(2)

      cy.get(PDP_PG.BTN_INCREASE).click()
      cy.get(PDP_PG.QUANTITY_SELECTOR).should('have.value', expectedValue)
    })
})
Cypress.Commands.add('decreaserQuantity', () => {
  cy.increaserQuantity()
  cy.get(PDP_PG.QUANTITY_SELECTOR)
    .invoke('val')
    .then((currentValue) => {
      const currentValueNumber = parseFloat(currentValue)
      const newValue = currentValueNumber / 2
      const expectedValue = newValue % 1 === 0 ? newValue.toFixed(0) : newValue.toFixed(2)
      cy.get(PDP_PG.BTN_DECREASE).click()
      cy.get(PDP_PG.QUANTITY_SELECTOR).should('have.value', expectedValue)
    })
})
Cypress.Commands.add('clickAddToCart', (text, value) => {
  cy.get(PDP_PG.BTN_ADD_ITEM).should('be.visible').and('not.be.disabled').should('contain.text', text).click()
  cy.miniCartIconValue(value)
})
Cypress.Commands.add('validMoreInfo', (txt) => {
  cy.get(PDP_PG.BTN_MORE_INFO).should('be.visible').should('contain.text', txt).click()
})
Cypress.Commands.add('modalMoreInfo', (txt) => {
  cy.get(PDP_PG.MODAL_MORE_INFO).should('be.visible').should('contain.text', txt)
})
Cypress.Commands.add('closeMoreInfo', () => {
  cy.get(PDP_PG.BTN_CLOSE).should('be.visible').click()
  cy.get(PDP_PG.BTN_CLOSE).should('not.exist')
})
Cypress.Commands.add('validBreadcrumb', (txt1, txt2, txt3) => {
  cy.get(PDP_PG.BREADCRUMBS).as('breadcrumb')

  cy.get('@breadcrumb').should('exist')

  cy.get('@breadcrumb').find('.vtex-breadcrumb-1-x-homeLink').should('exist')
  cy.get('@breadcrumb').find('.vtex-breadcrumb-1-x-link--1').should('exist').and('have.text', txt1)
  cy.get('@breadcrumb').find('.vtex-breadcrumb-1-x-link--2').should('exist').and('have.text', txt2)
  cy.get('@breadcrumb').find('.vtex-breadcrumb-1-x-link--3').should('exist').and('have.text', txt3)
})
