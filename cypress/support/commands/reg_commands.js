const LOGIN_PAGE = require('../page_elements/login_page')
const LOGIN_PG = new LOGIN_PAGE()
const REGION_PAGE = require('../page_elements/reg_page')
const REGION_PG = new REGION_PAGE()

Cypress.Commands.add('modalLocation', (...messages) => {
  cy.get(REGION_PG.BTN_REGION)
    .should('exist')
    .should('be.visible')
    .then(($modalContent) => {
      const modalText = $modalContent.text()
      const containsMessage = messages.some((message) => modalText.includes(message))
      expect(containsMessage, `O modal deve conter uma das mensagens: ${messages.join(', ')}`).to.be.true
    })
    .then(() => {
      cy.get(REGION_PG.BTN_CHANGE_REGION).should('exist').should('be.visible')
    })
})
Cypress.Commands.add('modalRegion', (title, subTitle, success_message, cep_input_store, location) => {
  cy.get(REGION_PG.MODAL_REGION)
    .should('exist')
    .should('be.visible')
    .should('contain.text', title)
    .should('contain.text', subTitle)
    .should('contain.text', success_message)
    .should('contain.text', cep_input_store)
  cy.get(REGION_PG.BTN_LOCATION).should('exist').should('be.visible').should('contain.text', location)
})
Cypress.Commands.add('regionalization', (cep) => {
  cy.get(REGION_PG.INPUT_REGION_CEP).should('exist').should('be.visible').type(cep)
  cy.get(REGION_PG.BTN_POSTAL).click()
})
Cypress.Commands.add('modalSelectSeller', () => {
  cy.get(REGION_PG.MODAL_SELECT_SELLER).should('exist').should('be.visible').click()
})
Cypress.Commands.add('modalDropdowSeller', (seller) => {
  cy.get(REGION_PG.DROP_SELLER).select(seller)
  cy.wait(1000)
  cy.get(REGION_PG.BTN_DROP_SELLER).click()
})
Cypress.Commands.add('confirmRegionalization', (sellerName) => {
  cy.get(REGION_PG.TXT_REGION, { timeout: 10000 })
    .should('exist')
    .should('be.visible')
    .should('contain.text', sellerName)
})
Cypress.Commands.add('confirmRegionalizationQta', (sellerName) => {
  cy.get(REGION_PG.TXT_REGION_QTA).should('exist').should('be.visible').should('contain.text', sellerName)
})
Cypress.Commands.add('locationRegion', () => {
  cy.get(REGION_PG.MODAL_TOP_BAR_MODIFY).invoke('click')
  cy.get(REGION_PG.BTN_LOCATION).invoke('click')
})
Cypress.Commands.add('toastRegionalization', (without_delivery) => {
  cy.get(REGION_PG.TOAST_REGION).should('exist').should('be.visible').should('contain.text', without_delivery)
})
Cypress.Commands.add('setRegionalization', (seller, sellerName) => {
  cy.setCookie('seller', seller)
  cy.setCookie('sellerName', sellerName)
  //cy.get(REGION_PG.TXT_REGION).should('exist').should('be.visible').should('contain.text', sellerName)
})
Cypress.Commands.add('changeRegion', (txt) => {
  cy.get(REGION_PG.BTN_CHANGE_REGION).should('exist').should('be.visible').should('contain.text', txt)
  cy.get(REGION_PG.BTN_CHANGE_REGION).click({ scrollbehavior: false })
})
Cypress.Commands.add('modalNotPerson', (title, without_logged) => {
  cy.get(LOGIN_PG.POPUP_REGION)
    .should('exist')
    .should('be.visible')
    .should('contain.text', title, without_logged)
})
Cypress.Commands.add('regionalizationPerson', (cep) => {
  cy.get(REGION_PG.INPUT_REGION_PERSON)
    .should('exist')
    .should('be.visible')
    .invoke('click', { scrollbehavior: false })
  cy.get(REGION_PG.INPUT_REGION_PERSON).should('exist').should('be.visible').type(cep)
  cy.get(REGION_PG.BTN_POSTAL_PERSON).click()
})
Cypress.Commands.add('regionalizationCep', (cep) => {
  cy.get(REGION_PG.INPUT_REGION_CEP).should('exist').should('be.visible').invoke('click')
  cy.get(REGION_PG.INPUT_REGION_CEP).should('exist').should('be.visible').type(cep)
  cy.get(REGION_PG.BTN_POSTAL_CEP).click()
})
Cypress.Commands.add('dropDownRegionalizatin', (cep) => {
  cy.get(REGION_PG.DROP_REGION).select(cep)
  cy.get(REGION_PG.BTN_POSTAL_CEP).click()
})
Cypress.Commands.add('regionTopBar', (offer, region, modify) => {
  cy.get(REGION_PG.MODAL_TOP_BAR_OFFER).should('exist').should('be.visible').should('contain.text', offer)

  cy.get(REGION_PG.MODAL_TOP_BAR_REGION).should('exist').should('be.visible').should('contain.text', region)

  cy.get(REGION_PG.MODAL_TOP_BAR_MODIFY).should('exist').should('be.visible').should('contain.text', modify)
})
Cypress.Commands.add('calculateShipping', (txt) => {
  cy.get(REGION_PG.MODAL_CALCULATE_SHIPPING).should('exist').should('be.visible')
  cy.get(REGION_PG.MODAL_CALCULATE_SHIPPING_TITLE)
    .should('exist')
    .should('be.visible')
    .should('contain.text', txt)
})
Cypress.Commands.add('inputAddress', (data) => {
  cy.get(REGION_PG.INPUT_ADDRESS).should('exist').should('be.visible').clear()
  cy.get(REGION_PG.INPUT_ADDRESS).should('exist').should('be.visible').type(data)
  cy.get(REGION_PG.BTN_INPUT_ADDRESS).should('exist').should('be.visible').click({ force: true })
})
Cypress.Commands.add('warningMessage', (txt) => {
  cy.get(REGION_PG.TXT_WARNING).should('exist').should('be.visible').should('contain.text', txt)
})
Cypress.Commands.add('errorMessage', (txt) => {
  cy.get(REGION_PG.TXT_ERROR).should('exist').should('be.visible').should('contain.text', txt)
})
Cypress.Commands.add('sucessMessage', (txt) => {
  cy.get(REGION_PG.TXT_SUCESS_TITLE).should('exist').should('be.visible').should('contain.text', txt)
})
Cypress.Commands.add('hideFeedbackWidget', () => {
  cy.get('body').then(($body) => {
    const $feedbackContainer = $body.find('#_hj_feedback_container')
    if ($feedbackContainer.length) {
      cy.log('Hiding feedback widget')
      $feedbackContainer.hide()
    }
  })
})
