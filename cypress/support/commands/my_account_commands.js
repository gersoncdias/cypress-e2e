const MY_ACCOUNT_PAGE = require('../page_elements/my_account_page')
const MY_ACCOUNT_PG = new MY_ACCOUNT_PAGE()

Cypress.Commands.add('acessMyAccount', (url) => {
  cy.url().should('eq', url)
})
Cypress.Commands.add('menuMyAccount', (text) => {
  cy.get(MY_ACCOUNT_PG.MENU).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('personData', (text) => {
  cy.get(MY_ACCOUNT_PG.LINK_PERSON_DATA).should('exist').should('be.visible').click()
  cy.get(MY_ACCOUNT_PG.MODAL_ORDER).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('modalPersonData', () => {
  cy.get(MY_ACCOUNT_PG.MODAL_PERSON_DATA).should('exist').should('be.visible')
})
Cypress.Commands.add('modalName', (labelName, nameText, labelLastname, lastNameText) => {
  cy.get(MY_ACCOUNT_PG.LABEL_NAME).should('exist').should('be.visible').should('contain.text', labelName)
  cy.get(MY_ACCOUNT_PG.TEXT_NAME).should('exist').should('be.visible').should('contain.text', nameText)
  cy.get(MY_ACCOUNT_PG.LABEL_LAST_NAME)
    .should('exist')
    .should('be.visible')
    .should('contain.text', labelLastname)
  cy.get(MY_ACCOUNT_PG.TEXT_LAST_NAME)
    .should('exist')
    .should('be.visible')
    .should('contain.text', lastNameText)
})
Cypress.Commands.add('modalEmail', (emaiLabel, emailText) => {
  cy.get(MY_ACCOUNT_PG.LABEL_EMAIL).should('exist').should('be.visible').should('contain.text', emaiLabel)
  cy.get(MY_ACCOUNT_PG.TEXT_EMAIL).should('exist').should('be.visible').should('contain.text', emailText)
})
Cypress.Commands.add('modalCpf', (cpfLabel, cpfNumber) => {
  cy.get(MY_ACCOUNT_PG.LABEL_CPF).should('exist').should('be.visible').should('contain.text', cpfLabel)
  const formattedCPF = cpfNumber.replace(/[^\d]/g, '')

  cy.get(MY_ACCOUNT_PG.NUMBER_CPF)
    .should('exist')
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      const actualCPF = text.replace(/[^\d]/g, '')
      expect(actualCPF).to.eq(formattedCPF)
    })
})
Cypress.Commands.add('modalGender', (genderLabel, genderTextr) => {
  cy.get(MY_ACCOUNT_PG.LABEL_GENDER).should('exist').should('be.visible').should('contain.text', genderLabel)
  cy.get(MY_ACCOUNT_PG.TEXT_GENDER).should('exist').should('be.visible').should('contain.text', genderTextr)
})
Cypress.Commands.add('modalGender', (genderLabel, genderTextr) => {
  cy.get(MY_ACCOUNT_PG.LABEL_GENDER).should('exist').should('be.visible').should('contain.text', genderLabel)
  cy.get(MY_ACCOUNT_PG.TEXT_GENDER).should('exist').should('be.visible').should('contain.text', genderTextr)
})
Cypress.Commands.add('birthDate', (birthDateLabel, birthDateText) => {
  cy.get(MY_ACCOUNT_PG.LABEL_BIRTH_DATE)
    .should('exist')
    .should('be.visible')
    .should('contain.text', birthDateLabel)
  cy.get(MY_ACCOUNT_PG.TEXT_BIRTH_DATE)
    .should('exist')
    .should('be.visible')
    .should('contain.text', birthDateText)
})
Cypress.Commands.add('phoneNumber', (phoneLabel, phoneNumber) => {
  cy.get(MY_ACCOUNT_PG.LABEL_PHONE_NUMBER)
    .should('exist')
    .should('be.visible')
    .should('contain.text', phoneLabel)
  cy.get(MY_ACCOUNT_PG.PHONE_NUMBER).should('exist').should('be.visible').should('contain.text', phoneNumber)
})
Cypress.Commands.add('btnEdit', (btnLabel) => {
  cy.get(MY_ACCOUNT_PG.BTN_EDIT).should('exist').should('be.visible').should('contain.text', btnLabel)
})
Cypress.Commands.add('adress', (text) => {
  cy.get(MY_ACCOUNT_PG.LINK_ADRESS).should('exist').should('be.visible').click()
  cy.get(MY_ACCOUNT_PG.LINK_ADRESS).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('adresMobile', (text) => {
  cy.get(MY_ACCOUNT_PG.LINK_ADRESS).should('exist').should('be.visible').click()
  cy.get(MY_ACCOUNT_PG.LINK_ADRESS_MOBILE).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('modalAdressTitle', (text) => {
  cy.get(MY_ACCOUNT_PG.MODAL_ADRESS_TITLE).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('modalAddAdress', (text) => {
  cy.get(MY_ACCOUNT_PG.MODAL_ADD_ADRESS).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('modalAdress', (text) => {
  cy.get(MY_ACCOUNT_PG.MODAL_ADRESS).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('myOrder', (text) => {
  cy.get(MY_ACCOUNT_PG.LINK_MY_ORDER).should('exist').should('be.visible').click()
  cy.get(MY_ACCOUNT_PG.LINK_MY_ORDER).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('myCards', (text) => {
  cy.get(MY_ACCOUNT_PG.LINK_MY_CARDS).should('exist').should('be.visible').click()
  cy.get(MY_ACCOUNT_PG.LINK_MY_CARDS).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('myCredit', (text) => {
  cy.get(MY_ACCOUNT_PG.LINK_MY_CREDIT).should('exist').should('be.visible').click()
  cy.get(MY_ACCOUNT_PG.LINK_MY_CREDIT).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('authentication', (text) => {
  cy.get(MY_ACCOUNT_PG.LINK_AUTH).should('exist').should('be.visible').click()
  cy.get(MY_ACCOUNT_PG.LINK_AUTH).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('myWorks', (text1, text2) => {
  cy.get(MY_ACCOUNT_PG.LINK_MY_WORK).should('exist').should('be.visible').click()
  cy.get(MY_ACCOUNT_PG.LINK_MY_WORK).should('exist').should('be.visible').should('contain.text', text1)
  cy.get(MY_ACCOUNT_PG.MODAL_MY_WORK).should('exist').should('be.visible').should('contain.text', text2)
})
Cypress.Commands.add('creditMyWorks', (text1) => {
  cy.get(MY_ACCOUNT_PG.LINK_MY_WORK).should('exist').should('be.visible').click()
  cy.get(MY_ACCOUNT_PG.MODAL_MY_WORK).should('exist').should('be.visible').should('contain.text', text1)
  cy.get(MY_ACCOUNT_PG.MODAL_VALUE_WORK)
    .invoke('text')
    .then((text) => {
      const balance = text.replace(/\s/g, '')
      expect(balance).to.match(/^R\$\d+,\d{2}$/)
    })
})
Cypress.Commands.add('modalCredit', (text) => {
  cy.get(MY_ACCOUNT_PG.MODAL_ORDER).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('modalOrder', (text) => {
  cy.get(MY_ACCOUNT_PG.MODAL_ORDER, { timeout: 10000 })
    .should('exist')
    .should('be.visible')
    .should('contain.text', text)
})
Cypress.Commands.add('modalCards', (text) => {
  cy.get(MY_ACCOUNT_PG.MODAL_ORDER).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('btnExit', (text) => {
  cy.get(MY_ACCOUNT_PG.BTN_EXIT).should('exist').should('be.visible').should('contain.text', text).click()
})
Cypress.Commands.add('modalExit', (text, labelBtn) => {
  cy.get(MY_ACCOUNT_PG.MODAL_EXIT).should('exist').should('be.visible').should('contain.text', text)
  cy.get(MY_ACCOUNT_PG.BTN_MODAL_EXIT)
    .should('exist')
    .should('be.visible')
    .should('contain.text', labelBtn)
    .click()
})
