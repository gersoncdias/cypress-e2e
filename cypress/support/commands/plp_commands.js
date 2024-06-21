/* eslint-disable cypress/no-unnecessary-waiting */
const PDP_PAGE = require('../page_elements/pdp_page')
const PDP_PG = new PDP_PAGE()
const PLP_PAGE = require('../page_elements/plp_page')
const PLP_PG = new PLP_PAGE()
const HOME_PAGE = require('../page_elements/home_page')
const HOME_PG = new HOME_PAGE()

Cypress.Commands.add('clickAddToCart', (text, value) => {
  cy.get(PDP_PG.BTN_ADD_ITEM).should('be.visible').and('not.be.disabled').should('contain.text', text).click()
  cy.miniCartIconValue(value)
})
Cypress.Commands.add('validBreadcrumb_plp', (txt) => {
  cy.get(PDP_PG.BREADCRUMBS).as('breadcrumb')
  cy.get('@breadcrumb').should('exist')
  cy.get('@breadcrumb').find('.vtex-breadcrumb-1-x-homeLink').should('exist')
  cy.get('@breadcrumb').find('.vtex-breadcrumb-1-x-link--1').should('exist').and('have.text', txt)
})
Cypress.Commands.add('validFilter', (txt) => {
  cy.get(PLP_PG.BTN_FILTER).should('be.visible').and('not.be.disabled').contains(txt).click()
})
Cypress.Commands.add('validFilterMobile', (txt) => {
  cy.get(PLP_PG.BTN_FILTER_MOBILE).should('be.visible').contains(txt).click()
})
Cypress.Commands.add('tagFilter', (value) => {
  cy.get(PLP_PG.TAG_FILTER_MOBILE).should('exist').contains(value)
})
Cypress.Commands.add('tagFilterEmpty', () => {
  cy.get(PLP_PG.TAG_FILTER_MOBILE).should('not.exist')
})
Cypress.Commands.add('removeFilterMobile', () => {
  cy.get(PLP_PG.BTN_REMOVE_FILTER_MOBILE).click()
})
Cypress.Commands.add('ModalFilterMobile', (value) => {
  cy.get(PLP_PG.MODAL_FILTER_MOBILE).click()
})
Cypress.Commands.add('validCategotyMobile', () => {
  cy.get(PLP_PG.INPUT_FILTER_MOBILE).click()
})
Cypress.Commands.add('validCategoty', () => {
  cy.get(PLP_PG.INPUT_FILTER).check()
})
Cypress.Commands.add('validFilterCategoty', (txt) => {
  cy.reload()
  cy.get(PLP_PG.INPUT_LABEL).contains(txt).should('exist')
})
Cypress.Commands.add('validRemoveFilterCategoty', () => {
  cy.reload()
  cy.get(PLP_PG.INPUT_FILTER).click()
  cy.url().should('not.include', 'category-2')
})
Cypress.Commands.add('validOedenig', (txt, order) => {
  cy.get(PLP_PG.LABEL_ORDERING).should('be.visible').and('contain', txt)
  cy.get(PLP_PG.BTN_ORDERING).should('be.visible').click()
  cy.get(PLP_PG.BTN_ORDER_BY).within(() => {
    cy.contains('button', order).should('be.visible').click()
  })
})
Cypress.Commands.add('validShowMore', (txt) => {
  cy.scrollTo('center', { duration: 3000 })
  cy.get(PLP_PG.MODAL_CARD_GALLERY).should('be.visible').should('have.length', 12)
  cy.get(PLP_PG.BTN_SHOW_MORE, { timeout: 3000 }).should('be.visible').and('contain', txt).click()
  cy.scrollTo('bottom', { duration: 3000 })
  cy.get(PLP_PG.MODAL_CARD_GALLERY).should('be.visible').should('have.length', 24)
})
Cypress.Commands.add('validCard', () => {
  cy.get(PLP_PG.MODAL_CARD_GALLERY).should('be.visible').find('img').should('have.attr', 'src')
})
Cypress.Commands.add('validAddProductCard', () => {
  cy.get(PLP_PG.MODAL_CARD_GALLERY)
    .should('be.visible')
    .first()
    .within(() => {
      cy.get(HOME_PG.BTN_ADD_ITEM).click()
    })
})
Cypress.Commands.add('clickWishlist', () => {
  cy.wait(2000)
  cy.get(PLP_PG.MODAL_CARD_GALLERY)
    .should('be.visible')
    .first()
    .within(() => {
      cy.get(HOME_PG.BTN_ADD_WISHLIST).click({ force: true })
    })
})
Cypress.Commands.add('trendingProducts', (txt) => {
  const timeout = 15000
  cy.get(PLP_PG.MODAL_WIDGET, { timeout: timeout }).should('be.visible')
  cy.get(PLP_PG.IMAGE_WIDGET, { timeout: timeout }).should('be.visible')
  cy.get(PLP_PG.TEXT_WIDGET, { timeout: timeout }).should('contain.text', txt)
})
