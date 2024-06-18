const SEARCH_PAGE = require('../page_elements/search_page')
const SEARCH_PG = new SEARCH_PAGE()
const HEADER_PAGE = require('../page_elements/header_page')
const HEADER_PG = new HEADER_PAGE()

Cypress.Commands.add('inputSearch', (placeholder) => {
  cy.get(SEARCH_PG.INPUT_SEARCH)
    .should('exist')
    .should('be.visible')
    .should('have.attr', 'placeholder', placeholder)
})
Cypress.Commands.add('inputSearchQta', (placeholder) => {
  cy.get(SEARCH_PG.INPUT_SEARCH_QTA)
    .should('exist')
    .should('be.visible')
    .should('have.attr', 'placeholder', placeholder)
})
Cypress.Commands.add('modalSearch', () => {
  cy.get(SEARCH_PG.DIV_AUTO_COMPLETE).should('exist').should('be.visible')
})
Cypress.Commands.add('modalAutoComplite', (searched) => {
  cy.get(SEARCH_PG.INPUT_SEARCH).focus({ scrollBehavior: false })
  cy.get(SEARCH_PG.MODAL_AUTO_COMPLETE).should('exist').should('be.visible').should('contain.text', searched)
})
Cypress.Commands.add('modalAutoCompliteQta', (searched) => {
  cy.get(SEARCH_PG.INPUT_SEARCH_QTA).focus()
  cy.get(SEARCH_PG.MODAL_AUTO_COMPLETE).should('exist').should('be.visible').should('contain.text', searched)
})
Cypress.Commands.add('inputText', (text, value) => {
  cy.get(SEARCH_PG.INPUT_SEARCH).focus({ scrollBehavior: false })
  cy.get(SEARCH_PG.INPUT_SEARCH).type(text, { scrollBehavior: false })
  cy.get(SEARCH_PG.LIST_SEARCH_QTA).should('exist').should('be.visible').should('have.length', value)
})
Cypress.Commands.add('imageSearch', (value) => {
  cy.get(SEARCH_PG.LIST_SEARCH_QTA)
    .should('exist')
    .should('be.visible')
    .should('have.length', value)
    .each(($el) => {
      cy.wrap($el).find('img').should('exist').and('be.visible')
    })
})
Cypress.Commands.add('imageSearchQta', (value) => {
  cy.get(SEARCH_PG.LIST_SEARCH_QTA)
    .should('exist')
    .should('be.visible')
    .should('have.length', value)
    .each(($el) => {
      cy.wrap($el).find('img').should('exist').and('be.visible')
    })
})
Cypress.Commands.add('inputTextQta', (text, value) => {
  cy.get(SEARCH_PG.INPUT_SEARCH_QTA).focus({ scrollBehavior: false })
  cy.get(SEARCH_PG.INPUT_SEARCH_QTA).type(text, { scrollBehavior: false })
  cy.get(SEARCH_PG.LIST_SEARCH_QTA).should('exist').should('be.visible').should('have.length', value)
})
Cypress.Commands.add('modalSearchSugestions', (text) => {
  cy.get(SEARCH_PG.INPUT_SEARCH).focus({ scrollBehavior: false })
  cy.get(SEARCH_PG.INPUT_SEARCH).type(text, { scrollBehavior: false })
  cy.get(SEARCH_PG.MODAL_LIST).should('exist').should('be.visible').should('have.text', text)
})
Cypress.Commands.add('modalSearchSugestionsMobile', (text) => {
  cy.get(SEARCH_PG.INPUT_SEARCH).focus({ scrollBehavior: false })
  cy.get(SEARCH_PG.INPUT_SEARCH).type(text, { scrollBehavior: false })
  cy.get(SEARCH_PG.MODAL_AUTO_COMPLETE).should('exist').should('be.visible').should('have.text', text)
})
Cypress.Commands.add('modalSearchSugestionsQta', (text) => {
  cy.get(SEARCH_PG.INPUT_SEARCH_QTA).focus({ scrollBehavior: false })
  cy.get(SEARCH_PG.INPUT_SEARCH_QTA).type(text, { scrollBehavior: false })
  cy.get(SEARCH_PG.LIST_SEARCH_QTA).should('exist').should('be.visible').should('have.text', text)
})
Cypress.Commands.add('sliderTopBar', () => {
  cy.get(HEADER_PG.MODAL_TOP_BAR_SLIDER).should('exist').should('be.visible')
})
Cypress.Commands.add('budget', (budget, click) => {
  cy.get(HEADER_PG.LINK_BUDGET).should('contain.text', budget)
  cy.get(HEADER_PG.LINK_CLICK_BUDGET).should('contain.text', click)
  cy.get(HEADER_PG.MODAL_BUDGET).should('have.attr', 'href').and('include', Cypress.config().url_orcamax)
  cy.get(HEADER_PG.MODAL_BUDGET).invoke('removeAttr', 'target').click()
  cy.validatePageAccessed(Cypress.config().url_orcamax)
})
Cypress.Commands.add('redirectiLogo', (url1, url) => {
  cy.visit(url1)
  cy.wait(2000)
  cy.get(HEADER_PG.LINK_LOGO_HREF).first().click()
  cy.url().should('eq', url)
})
Cypress.Commands.add('allDepartments', () => {
  cy.get(HEADER_PG.LINK_DEPARTAMENTS).should('exist').should('be.visible').invoke('click')
})
Cypress.Commands.add('myAcademy', (url) => {
  cy.get(HEADER_PG.LINK_ACADEMY).should('exist').should('be.visible').invoke('click')
  cy.validatePageAccessed(url)
})
Cypress.Commands.add('linkBlog', (url) => {
  cy.get(HEADER_PG.LINK_BLOG).contains('Blog').invoke('removeAttr', 'target').click()
  cy.validatePageAccessed(url)
})
Cypress.Commands.add('maxForLess', (url, txt) => {
  cy.get(HEADER_PG.LINK_MAX_FOR_LESS).should('exist').should('be.visible').invoke('click')
  cy.validatePageAccessed(url)
  cy.get(HEADER_PG.SEARCH_RESULT).should('contain.text', txt)
})
Cypress.Commands.add('readerTopo', () => {
  cy.get(HEADER_PG.MODAL_READER_TOPO)
    .should('be.visible')
    .and('have.css', 'background-color', 'rgb(239, 127, 0)')
})
Cypress.Commands.add('readerTopoQta', () => {
  cy.get(HEADER_PG.MODAL_READER_TOPO_QTA)
    .should('be.visible')
    .and('have.css', 'background-color', 'rgb(0, 42, 91)')
})
Cypress.Commands.add('readerFixed', () => {
  cy.get(HEADER_PG.MODAL_READER_FIXED).should('exist').should('be.visible')
})
Cypress.Commands.add('logoReader', () => {
  cy.get(HEADER_PG.LINK_LOGO_HREF).should('exist').should('be.visible')
})
Cypress.Commands.add('miniLogoReader', () => {
  cy.scrollTo('bottom')
  cy.get(HEADER_PG.LINK_MINI_LOGO).should('exist').should('be.visible')
})
Cypress.Commands.add('myOrders', (txt) => {
  cy.get(HEADER_PG.BTN_MY_ORDER)
    .should('exist')
    .should('be.visible')
    .should('contain.text', txt)
    .first()
    .click({ scrollBehavior: false })
})
Cypress.Commands.add('myOrdersWithoutLogin', () => {
  cy.get(HEADER_PG.BTN_MY_ORDER).first().click({ scrollBehavior: false })
})
Cypress.Commands.add('burgerMenu', (txt1, txt2, txt3) => {
  cy.get(HEADER_PG.MENU_HANBURG).should('exist').should('be.visible').invoke('click')
  cy.get(HEADER_PG.MODAL_MENU_HANBURG).should('exist').should('be.visible').should('contain.text', txt1)
  cy.get(HEADER_PG.MODAL_MENU_HANBURG).should('exist').should('be.visible').should('contain.text', txt2)
  cy.get(HEADER_PG.MODAL_MENU_HANBURG).should('exist').should('be.visible').should('contain.text', txt3)
})
Cypress.Commands.add('signButton', (txt) => {
  cy.get(HEADER_PG.BTN_PERSON).should('exist').should('be.visible').should('contain.text', txt)
})
Cypress.Commands.add('btnNewCart', () => {
  cy.get(HEADER_PG.MENU_HANBURG).should('exist').should('be.visible').invoke('click')
  cy.get(HEADER_PG.BTN_MENU_HAMBURG).should('be.visible').and('contain', 'Novo Carrinho')
  cy.get(HEADER_PG.BTN_MENU_HAMBURG).click()
  cy.url().should('include', '/novo-carrinho')
})
Cypress.Commands.add('btnBulkOrder', () => {
  cy.get(HEADER_PG.MENU_HANBURG).should('exist').should('be.visible').invoke('click')
  cy.get(HEADER_PG.BTN_QUICKORDER).should('be.visible').and('contain', 'Pedido em Massa')
  cy.get(HEADER_PG.LINK_QUICKORDER).should('be.visible').invoke('removeAttr', 'target').click()
  cy.url().should('include', '/quickorder')
})
Cypress.Commands.add('btnRegistration', () => {
  cy.get(HEADER_PG.MENU_HANBURG).should('exist').should('be.visible')
  cy.get(HEADER_PG.BTN_BUX).should('be.visible').and('contain', 'Cadastro de Usuário')
  cy.get(HEADER_PG.LINK_BUX).invoke('removeAttr', 'target').click()
  cy.url().should('include', '/bux')
})
Cypress.Commands.add('btnoLgout', () => {
  cy.get(HEADER_PG.MENU_HANBURG).should('exist').should('be.visible').invoke('click')
  cy.get(HEADER_PG.BTN_CLOSE).should('be.visible').and('contain', 'Sair')
  cy.get(HEADER_PG.BTN_CLOSE).click()
  cy.url().should('include', '/logout')
})
Cypress.Commands.add('burgerMenuMobile', () => {
  cy.get(HEADER_PG.MENU_HANBURG).should('exist').should('be.visible').invoke('click')
})
Cypress.Commands.add('allDepartmentsMobile', (txt1) => {
  cy.get(HEADER_PG.LINK_DEPARTAMENTS_MOBILE).should('exist').should('be.visible').should('contain.text', txt1)
})
