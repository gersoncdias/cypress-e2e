const CART_PAGE = require('../page_elements/cart_page')
const CART_PG = new CART_PAGE()
const CHECKOUT_PAGE = require('../page_elements/checkout_page')
const CHECKOUT_PG = new CHECKOUT_PAGE()

Cypress.Commands.add('cardProductCart', (value) => {
  cy.get(CART_PG.CARD_CART, { timeout: 2000 })
    .should('exist')
    .should('be.visible')
    .find(CART_PG.MODAL_ITEM)
    .should('have.length', value)
})
Cypress.Commands.add('deliveryday', (txt) => {
  cy.get(CART_PG.MODAL_DELIVERY, { timeout: 2000 })
    .should('exist')
    .should('be.visible')
    .should('contain.text', txt)
})
Cypress.Commands.add('validateReceiveText', (expectedText) => {
  cy.get(CART_PG.TXT_RECEIVE, { timeout: 4000 })
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.eq(expectedText)
    })
})
Cypress.Commands.add('validateCEP', (expectedCEP) => {
  cy.get(CART_PG.TXT_CEP)
    .invoke('text')
    .then((cep) => {
      expect(cep.trim()).to.eq(expectedCEP)
    })
})
Cypress.Commands.add('captureDeliveryTime', () => {
  return cy
    .get(CART_PG.TXT_DELIVERY_TIME, { timeout: 2000 })
    .invoke('text')
    .then((text) => {
      return text.trim()
    })
})
Cypress.Commands.add('increaseQuantityCart', () => {
  cy.get(CART_PG.QUANTITY_SELECTOR)
    .invoke('val')
    .then((currentValue) => {
      const currentValueNumber = parseFloat(currentValue)
      const newValue = currentValueNumber * 2

      const expectedValue = newValue % 1 === 0 ? newValue.toFixed(0) : newValue.toFixed(2)

      cy.get(CART_PG.BTN_INCREASE).click()
      cy.get(CART_PG.QUANTITY_SELECTOR).should('have.value', expectedValue)
    })
})
Cypress.Commands.add('decreaserQuantityCart', () => {
  cy.increaseQuantityCart()
  cy.get(CART_PG.QUANTITY_SELECTOR)
    .invoke('val')
    .then((currentValue) => {
      const currentValueNumber = parseFloat(currentValue)
      const newValue = currentValueNumber / 2
      const expectedValue = newValue % 1 === 0 ? newValue.toFixed(0) : newValue.toFixed(2)
      cy.get(CART_PG.BTN_DECREASE).click()
      cy.get(CART_PG.QUANTITY_SELECTOR).should('have.value', expectedValue)
    })
})
Cypress.Commands.add('QuantityProductCart', (Value) => {
  cy.get(CART_PG.QUANTITY_SELECTOR).should('have.value', Value)
})
Cypress.Commands.add('removeProductCart', () => {
  cy.get(CART_PG.BTN_REMOVE).should('exist').should('be.visible').click()
})
Cypress.Commands.add('cartEmpty', (txt) => {
  cy.get(CART_PG.TXT_CART_EMPTY).should('exist').should('be.visible').should('contain.text', txt)
})
Cypress.Commands.add('titleWidget', (txt) => {
  cy.get(CART_PG.TXT_TITLE_WIDGET).should('exist').should('be.visible').should('contain.text', txt)
})
Cypress.Commands.add('cardWidget', () => {
  cy.get(CART_PG.CARD_WIDGET).should('exist').should('be.visible')
  cy.get(CART_PG.CARD_IMG_WIDGET).should('exist').should('be.visible')
})
Cypress.Commands.add('totalValue', () => {
  const roundToTwo = (num) => {
    return Math.round(num * 100) / 100
  }
  cy.get('tr.Items .monetary')
    .invoke('text')
    .then((subtotalText) => {
      const subtotal = parseFloat(subtotalText.replace('R$', '').replace(',', '.').trim())
      const roundedSubtotal = roundToTwo(subtotal)
      cy.get(CART_PG.TXT_SUBTOTAL)
        .invoke('text')
        .then((shippingText) => {
          const shipping = parseFloat(shippingText.replace('R$', '').replace(',', '.').trim())
          const roundedShipping = roundToTwo(shipping)
          const expectedTotal = roundToTwo(roundedSubtotal + roundedShipping)
          cy.get(CART_PG.TXT_TOTAL)
            .invoke('text')
            .then((totalText) => {
              const displayedTotal = parseFloat(totalText.replace('R$', '').replace(',', '.').trim())
              const roundedDisplayedTotal = roundToTwo(displayedTotal)
              expect(roundedDisplayedTotal).to.eq(expectedTotal)
            })
        })
    })
})
Cypress.Commands.add('validateChooseMoreProductsLink', (url) => {
  cy.get(CART_PG.BTN_CLOSE_MORE).should('be.visible').click()
  cy.url().should('eq', url)
})
Cypress.Commands.add('valiateButtonWithdraw', () => {
  cy.get(CART_PG.BTN_WITHDRAW, { timeout: 2000 }).click()
})
Cypress.Commands.add('valiateRemoveAll', (txt) => {
  cy.get(CART_PG.BTN_REMOVE_ALL, { timeout: 2000 }).should('contain.text', txt).click()
})
Cypress.Commands.add('valiateModalRemoveAll', (txt1, txt2, txt3) => {
  cy.get(CART_PG.TXT_REMOVE_ITEM).should('contain.text', txt1)
  cy.get(CART_PG.MODAL_TXT_REMOVE_ITEM).should('contain.text', txt2)
  cy.get(CART_PG.MODAL_BTN_REMOVE_ITEM).should('contain.text', txt3).click()
})
Cypress.Commands.add('valiateCloseOrder', (txt, url) => {
  cy.get(CART_PG.BTN_CLOSE_ORDER).should('contain.text', txt).click()
  cy.url().should('eq', url)
})
Cypress.Commands.add('valiateLogo', (url) => {
  cy.get(CHECKOUT_PG.IMG_LOGO).should('be.visible').and('have.attr', 'href', '/').click()
  cy.url().should('eq', url)
})
Cypress.Commands.add('validateEmailInfo', (txt) => {
  cy.get(CHECKOUT_PG.MODAL_INFO_EMAIL).should('be.visible').contains(txt)
})
Cypress.Commands.add('validateBackToCartLink', (url) => {
  cy.get(CART_PG.BTN_BACK_CAT).should('be.visible').and('have.attr', 'href', '#/cart').click()
  cy.url().should('eq', url)
})
Cypress.Commands.add('validateEmailField', (txt, email) => {
  cy.get(CART_PG.INPUT_PRE_EMAIL).should('be.visible').and('have.attr', 'placeholder', txt)
  cy.get(CART_PG.INPUT_PRE_EMAIL).should('be.visible').type(email)
  cy.get(CART_PG.BTN_PRE_EMAIL).click()
})
Cypress.Commands.add('validateSecurityIcon', (txt, url) => {
  cy.get(CART_PG.ICON_LOK).should('be.visible')
  cy.get(CART_PG.TXT_IDENTIFIED_HELLO).should('be.visible').and('contain.text', 'Olá!')
  cy.get(CART_PG.TXT_IDENTIFIED).should('be.visible').and('contain.text', txt)
  cy.get(CART_PG.BTN_IDENTIFIED)
    .should('be.visible')
    .and('have.class', 'btn btn-large identified-user-button')
    .and('have.attr', 'data-dismiss', 'modal')
    .click()
  cy.url().should('eq', url)
})
