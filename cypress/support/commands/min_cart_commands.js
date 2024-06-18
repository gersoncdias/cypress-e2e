/* eslint-disable cypress/no-unnecessary-waiting */
const MIN_PAGE = require('../page_elements/min_cart_page')
const MIN_PG = new MIN_PAGE()

Cypress.Commands.add('miniCart', (title, value) => {
  cy.get(MIN_PG.TEXT_MINICART_TITLE).should('exist').should('be.visible').should('contain.text', title)
  cy.get(MIN_PG.IMG_CART).should('exist').should('be.visible').should('have.length', value)
})
Cypress.Commands.add('removeProduct', () => {
  cy.get(MIN_PG.BTN_ICON_DELETE).click()
})
Cypress.Commands.add('miniCartEmpty', (title, text, description, txt_btn) => {
  cy.get(MIN_PG.TEXT_MINICART_TITLE).should('exist').should('be.visible').should('contain.text', title)
  cy.get(MIN_PG.MODAL_MINI_CART)
    .should('be.visible')
    .should('contain.text', text)
    .should('contain.text', description)
  cy.get(MIN_PG.BTN_MINI_CART_EMPTY).should('be.visible').should('contain.text', txt_btn).click()
})
Cypress.Commands.add('closeMiniCart', () => {
  cy.get(MIN_PG.BTN_CLOSE).should('exist').should('be.visible').invoke('click')
  cy.get(MIN_PG.TEXT_MINICART_TITLE).should('not.be.visible')
})
Cypress.Commands.add('miniCartQta', (title, weight) => {
  cy.get(MIN_PG.TEXT_MINICART_TITLE).should('exist').should('be.visible').should('contain.text', title)
  cy.get(MIN_PG.IMG_CART).should('exist').should('be.visible').should('have.length', 1)
  cy.get(MIN_PG.PRODUCT_WEIGTH).should('exist').should('be.visible').should('contain.text', weight)
})
Cypress.Commands.add('miniCartIcon', () => {
  cy.get(MIN_PG.ICON_MINI_CART_MOBILE).should('exist').should('be.visible').click()
})
Cypress.Commands.add('miniCartIconValue', (expectedQuantity) => {
  cy.get(MIN_PG.QUANTITY_ICON).should('be.visible').and('contain.text', expectedQuantity.toString())
})
Cypress.Commands.add('miniCartLogoMobile', () => {
  cy.wait(1000)
  cy.get(MIN_PG.ICON_MINI_CART_MOBILE).should('exist').should('be.visible').invoke('click')
})
Cypress.Commands.add('miniCartLogo', () => {
  cy.wait(1000)
  cy.get(MIN_PG.ICON_MINI_LOGO).should('exist').should('be.visible').invoke('click')
})
Cypress.Commands.add('miniCartAddCart', (total, conclude) => {
  cy.get(MIN_PG.MODAL_MINICAR_SUMARY).should('exist').should('be.visible').should('contain.text', total)
  cy.get(MIN_PG.MODAL_MINICAR_SUMARY).should('exist').should('be.visible')
  cy.get(MIN_PG.BTN_MINICAR_SUMARY).should('contain.text', conclude).invoke('click')
})
Cypress.Commands.add('increaserQuantityMiniCart', () => {
  cy.get(MIN_PG.QUANTITY_SELECTOR)
    .invoke('val')
    .then((currentValue) => {
      const currentValueNumber = parseFloat(currentValue)
      const newValue = currentValueNumber * 2

      const expectedValue = newValue % 1 === 0 ? newValue.toFixed(0) : newValue.toFixed(2)

      cy.get(MIN_PG.BTN_INCREASE).click()
      cy.get(MIN_PG.QUANTITY_SELECTOR).should('have.value', expectedValue)
    })
})
Cypress.Commands.add('QuantityProductMiniCart', (Value) => {
  cy.get(MIN_PG.QUANTITY_SELECTOR).should('have.value', Value)
})
Cypress.Commands.add('decreaserQuantityMiniCart', () => {
  cy.increaserQuantityMiniCart()
  cy.get(MIN_PG.QUANTITY_SELECTOR)
    .invoke('val')
    .then((currentValue) => {
      const currentValueNumber = parseFloat(currentValue)
      const newValue = currentValueNumber / 2
      const expectedValue = newValue % 1 === 0 ? newValue.toFixed(0) : newValue.toFixed(2)
      cy.get(MIN_PG.BTN_DECREASE).click()
      cy.get(MIN_PG.QUANTITY_SELECTOR).should('have.value', expectedValue)
    })
})
