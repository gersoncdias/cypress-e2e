const env = require('../../cypress.env.json')
const cookies_data = require('../../fixtures/cookies.json')
const validation_data_stores = require('../../fixtures/storeSettings.json')

Cypress.Commands.add('loggedQecom', (url, seller, sellerName) => {
  cy.loginByApi(
    env.user_qecom.email,
    env.user_qecom.password,
    validation_data_stores.api.account_name,
    validation_data_stores.api.cookie_name,
    validation_data_stores.api.account_name
  )
  cy.visit(url)
  cy.setRegionalization(seller, sellerName)
  cy.modalUserLoggedi(env.user_qecom.user_name)
})
Cypress.Commands.add('loggedQecomMobile', (url, seller, sellerName) => {
  cy.loginByApi(
    env.user_qecom.email,
    env.user_qecom.password,
    validation_data_stores.api.account_name,
    validation_data_stores.api.cookie_name,
    validation_data_stores.api.account_name
  )
  cy.setCookie(cookies_data.allowed.allowed_cookie, 'true')
  cy.visit(url)
  cy.setRegionalization(seller, sellerName)
})
Cypress.Commands.add('noLoggedQecom', (url, text_without_loggedi, seller, sellerName) => {
  cy.setCookie(cookies_data.allowed.allowed_cookie, 'true')
  cy.visit(url)
  cy.setRegionalization(seller, sellerName)
  cy.modalWithoutUserLoggedi(text_without_loggedi)
})
Cypress.Commands.add('regionlizedWithoutLoginQecom', (url, text_without_loggedi, seller, sellerName) => {
  cy.setCookie(cookies_data.allowed.allowed_cookie, 'true')
  cy.visit(url)
  cy.setRegionalization(seller, sellerName)
  cy.modalWithoutUserLoggedi(text_without_loggedi)
})
Cypress.Commands.add('personifiedQta', (url, user_qta, password_qta) => {
  cy.loginByApi(
    user_qta,
    password_qta,
    validation_data_stores.api.account_name,
    validation_data_stores.api.cookie_name,
    ''
  )
  cy.setCookie(cookies_data.allowed.allowed_cookie, 'true')
  cy.visit(url)
})
Cypress.Commands.add('nopersonifiedQta', (url, user_qta, password_qta) => {
  cy.loginByApi(
    user_qta,
    password_qta,
    validation_data_stores.api.account_namee,
    validation_data_stores.api.cookie_name,
    ''
  )
  cy.setCookie(cookies_data.allowed.allowed_cookie, 'true')
  cy.visit(url)
  cy.modalNotPerson(without_logged_qta_title, without_logged_qta_next)
})
Cypress.Commands.add('setupCartWithProductAndAddress', (product, address) => {
  cy.removeAllItems(cookies_data.checkout.order_forme).then(() => {
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId

      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)

        cy.addShippingAddress(orderFormId, address)
      })
    })
  })
})
Cypress.Commands.add('loginAndVisitCart', (email, password, accountName, cookieName, cartUrl) => {
  cy.loginByApi(email, password, accountName, cookieName, accountName)
  cy.visit(Cypress.config().baseUrl + cartUrl)
})
