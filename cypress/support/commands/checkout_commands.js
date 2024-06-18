const CHECKOUT_PAGE = require('../page_elements/checkout_page')
const CHECKOUT_PG = new CHECKOUT_PAGE()

Cypress.Commands.add('modalProfileData', (email, name, phone) => {
  cy.get(CHECKOUT_PG.MODAL_PROFILE_DATA).should('exist').should('be.visible')
  cy.get(CHECKOUT_PG.TEXT_EMAIL).should('be.visible').and('contain.text', email)
  cy.get(CHECKOUT_PG.TEXT_NAME).should('be.visible').and('contain.text', name)
  cy.get(CHECKOUT_PG.TEXT_TEL).should('be.visible').and('contain.text', phone)
})
Cypress.Commands.add('editAddress', () => {
  cy.get(CHECKOUT_PG.BTN_EDIT_ADDRESS).should('exist').should('be.visible').click()
  cy.get(CHECKOUT_PG.INPUT_STREET).should('exist').should('be.visible').focus()
})
Cypress.Commands.add('obligationOfPersonal', (email, firstName, lastName, cpf, phone) => {
  cy.get(CHECKOUT_PG.BTN_EDIT_PROFILE).should('exist').should('be.visible').click()
  cy.get(CHECKOUT_PG.TXT_SPAN_EMAIL).should('be.visible').should('contain.text', email)
  cy.get(CHECKOUT_PG.INPUT_FIRT_NAME).should('be.visible').should('have.value', firstName).clear()
  cy.get(CHECKOUT_PG.INPUT_FIRT_NAME).should('be.visible').focus()
  cy.get(CHECKOUT_PG.INPUT_FIRT_NAME).should('be.visible').type(firstName)
  cy.get(CHECKOUT_PG.INPUT_LAST_NAME).should('be.visible').should('have.value', lastName).clear()
  cy.get(CHECKOUT_PG.INPUT_LAST_NAME).should('be.visible').focus()
  cy.get(CHECKOUT_PG.INPUT_LAST_NAME).should('be.visible').type(lastName)
  cy.get(CHECKOUT_PG.INPUT_CPF).should('be.visible').should('have.value', cpf).clear()
  cy.get(CHECKOUT_PG.INPUT_CPF).should('be.visible').focus()
  cy.get(CHECKOUT_PG.INPUT_CPF).should('be.visible').type(cpf)
  cy.get(CHECKOUT_PG.INPUT_PHONE).should('be.visible').should('have.value', phone).clear()
  cy.get(CHECKOUT_PG.INPUT_PHONE).should('be.visible').focus()
  cy.get(CHECKOUT_PG.INPUT_PHONE).should('be.visible').type(phone)
})
Cypress.Commands.add('editPersonalData', (email, firstName, lastName, cpf, phone) => {
  cy.get(CHECKOUT_PG.BTN_EDIT_PROFILE).should('exist').should('be.visible').click()
  cy.get(CHECKOUT_PG.TXT_SPAN_EMAIL).should('be.visible').should('contain.text', email)
  cy.get(CHECKOUT_PG.INPUT_FIRT_NAME).should('be.visible').should('have.value', firstName).clear()
  cy.get(CHECKOUT_PG.INPUT_FIRT_NAME).should('be.visible').focus()
  cy.get(CHECKOUT_PG.INPUT_FIRT_NAME).should('be.visible').type(firstName)
  cy.get(CHECKOUT_PG.INPUT_LAST_NAME).should('be.visible').should('have.value', lastName).clear()
  cy.get(CHECKOUT_PG.INPUT_LAST_NAME).should('be.visible').focus()
  cy.get(CHECKOUT_PG.INPUT_LAST_NAME).should('be.visible').type(lastName)
  cy.get(CHECKOUT_PG.INPUT_CPF).should('be.visible').should('have.value', cpf).clear()
  cy.get(CHECKOUT_PG.INPUT_CPF).should('be.visible').focus()
  cy.get(CHECKOUT_PG.INPUT_CPF).should('be.visible').type(cpf)
  cy.get(CHECKOUT_PG.INPUT_PHONE).should('be.visible').should('have.value', phone).clear()
  cy.get(CHECKOUT_PG.INPUT_PHONE).should('be.visible').focus()
  cy.get(CHECKOUT_PG.INPUT_PHONE).should('be.visible').type(phone)
})
Cypress.Commands.add('paymentData', (txt, txt1) => {
  cy.get(CHECKOUT_PG.INPUT_SHIP_NUMBER).type(txt)
  cy.get(CHECKOUT_PG.INPUT_SHIP_NAME).type(txt1)
  cy.get(CHECKOUT_PG.BTN_GO_PAYMENT).click()
  cy.get(CHECKOUT_PG.MODAL_PAYMENT).should('exist').and('be.visible')
})
Cypress.Commands.add('PaymentPix', () => {
  cy.get(CHECKOUT_PG.BTN_PAYMENT_PIX).should('exist').and('be.visible').click()
  cy.get(CHECKOUT_PG.MODAL_IFRAME_PAYMENT).should('exist').and('be.visible')
  cy.get(CHECKOUT_PG.TEXT_PAYMENT_PIX).and('be.visible')
})
Cypress.Commands.add('PaymentCatd', () => {
  cy.get(CHECKOUT_PG.BTN_PAYMENT_CARD).should('exist').and('be.visible')
  cy.get(CHECKOUT_PG.MODAL_IFRAME_PAYMENT_CARD).should('exist').and('be.visible')
})
Cypress.Commands.add('PaymentBankSlip', (txt) => {
  cy.get(CHECKOUT_PG.BTN_PAYMENT_SLIP).should('exist').and('be.visible').click()
  cy.get(CHECKOUT_PG.MODAL_IFRAME_PAYMENT).and('be.visible').and('contain.text', txt)
})
Cypress.Commands.add('valeExchange', (txt) => {
  cy.get(CHECKOUT_PG.BTN_PAYMENT_EXCHANG).should('exist').and('be.visible').click()
  cy.get(CHECKOUT_PG.TEXT_PAYMENT_EXCHANG).should('exist').and('be.visible').and('contain.text', txt)
  cy.get(CHECKOUT_PG.INPUT_PAYMENT_EXCHANG).should('exist').and('be.visible').focus
})
Cypress.Commands.add('orderSummary', () => {
  cy.get(CHECKOUT_PG.MODAL_ORDER_SUMMARY).should('exist').and('be.visible')
})
Cypress.Commands.add('validateReturnCart', (url) => {
  cy.get(CHECKOUT_PG.BTN_RETORN_CART).should('exist').and('be.visible').click()
  cy.url().should('eq', url)
})
Cypress.Commands.add('btnPayment', (txt) => {
  cy.get(CHECKOUT_PG.BTN_PAYMENT).should('be.visible').and('contain.text', txt)
})
Cypress.Commands.add('validateOrderSummary', (title) => {
  cy.get(CHECKOUT_PG.TEXT_TITLE_CART).should('contain.text', title)
  cy.get(CHECKOUT_PG.TEXT_SUBTOTAL_VALUE)
    .should('exist')
    .should('be.visible')
    .invoke('text')
    .then((subtotal) => {
      expect(subtotal.trim()).to.match(/R\$ \d{1,3}(,\d{3})*(\.\d{2})?/)
    })
  cy.get(CHECKOUT_PG.TEXT_SHIPPING_VALUE)
    .should('exist')
    .invoke('text')
    .then((shipping) => {
      expect(shipping.trim()).to.match(/R\$ \d{1,3}(,\d{3})*(\.\d{2})?/)
    })
  cy.get(CHECKOUT_PG.TEXT_TOTAL_VALUE)
    .should('be.visible')
    .invoke('text')
    .then((total) => {
      expect(total.trim()).to.match(/R\$ \d{1,3}(,\d{3})*(\.\d{2})?/)
    })
})
