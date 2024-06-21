const LOGIN_PAGE = require('../page_elements/login_page')
const LOGIN_PG = new LOGIN_PAGE()

Cypress.Commands.add('login', () => {
  cy.get(LOGIN_PG.BTN_LOGIN).first().should('exist').should('be.visible').click({ scrollBehavior: false })
})
Cypress.Commands.add('modalUserLoggedi', (greeting, user_name) => {
  cy.intercept(`${Cypress.config('baseUrl')}api/vtexid/pub/authenticated/user`).as('getUser')
  cy.get(LOGIN_PG.TEXT_LOGGEDIN_USER, { timeout: 8000 })
    .should('exist')
    .should('be.visible')
    .should('contain.text', greeting, user_name)
  cy.wait('@getUser', { timeout: 8000 }).its('response.statusCode')
})
Cypress.Commands.add('withoutEmail', () => {
  cy.get('.bg-danger--faded')
    .should('exist')
    .should('be.visible')
    .should('contain.text', 'Entre com um e-mail ou CPF/CNPJ válidos')
})
Cypress.Commands.add('withoutPassword', () => {
  cy.get('.relative > .pa2')
    .should('exist')
    .should('be.visible')
    .within(() => {
      cy.get('.flex.flex-row.c-danger')
        .eq(0)
        .should('contain.text', 'ABC')
        .should('contain.text', 'Uma letra maiúscula')

      cy.get('.flex.flex-row.c-danger')
        .eq(1)
        .should('contain.text', 'abc')
        .should('contain.text', 'Uma letra minúscula')

      cy.get('.flex.flex-row.c-danger')
        .eq(2)
        .should('contain.text', '123')
        .should('contain.text', 'Um número')

      cy.get('.flex.flex-row.c-danger')
        .eq(3)
        .should('contain.text', '***')
        .should('contain.text', 'No mínimo 8 caracteres')
    })
})
Cypress.Commands.add('modalWithoutUserLoggedi', (text) => {
  cy.get(LOGIN_PG.TEXT_WITHOUT_LOGGEDI).should('exist').should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('loginMobile', () => {
  cy.get(LOGIN_PG.MODAL_LOGIN_MOBILE).should('exist').should('be.visible').invoke('click')
})
Cypress.Commands.add('modalLogin', (email, password, txt, txt_input) => {
  cy.get(LOGIN_PG.MODAL_LOGIN).should('exist').should('be.visible').should('contain.text', txt)
  cy.get(LOGIN_PG.MODAL_LOGIN).contains(txt_input).should('be.visible').click({ scrollBehavior: false })
  cy.get(LOGIN_PG.INPUT_EMAIL).should('exist').should('be.visible').type(email)
  cy.get(LOGIN_PG.INPUT_PASSWORD).should('exist').should('be.visible').type(password, { log: false })
  cy.get(LOGIN_PG.BTN_ENTER).should('exist').should('be.visible').click()
})
Cypress.Commands.add('modalLoginWithoutLogin', (txt) => {
  cy.get(LOGIN_PG.MODAL_LOGIN_OPTIONS).should('exist').should('be.visible').should('contain.text', txt)
})
Cypress.Commands.add('modalLoginMobile', (email, password) => {
  cy.get(LOGIN_PG.INPUT_EMAIL_MOBILE).should('exist').should('be.visible').type(email)
  cy.get(LOGIN_PG.INPUT_PASSWORD_MOBILE).should('exist').should('be.visible').type(password, { log: false })
  cy.get('body').click(0, 0)
  cy.get(LOGIN_PG.BTN_LOGIN).click()
})
Cypress.Commands.add('modalLoginCode', (code) => {
  cy.get(LOGIN_PG.MODAL_CODE).should('exist').should('be.visible')
  cy.get(LOGIN_PG.INPUT_CODE).should('exist').should('be.visible').type(code)
})
Cypress.Commands.add('modalPerson', (code) => {
  cy.get(LOGIN_PG.MODAL_PERSON).should('exist').should('be.visible').as('loginButton')
  cy.get('@loginButton').should('exist').should('be.visible').click({ force: true })
  cy.get(LOGIN_PG.INPUT_CODE_PERSON).should('exist').should('be.visible').type(code)
  cy.get(LOGIN_PG.BTN_ENTER_PERSON).should('exist').should('be.visible').click()
})
Cypress.Commands.add('account_options', (text) => {
  cy.get(LOGIN_PG.TEXT_LOGGEDIN_USER).first().click({ scrollBehavior: false })
  cy.get(LOGIN_PG.MODAL_LOGIN).should('exist').should('be.visible').click({ scrollBehavior: false })
  cy.get('.vtex-button__label').contains(text).should('be.visible').click()
})
Cypress.Commands.add('logoutperson', () => {
  cy.get('.mt0 > :nth-child(1) > .pa4').click()
  cy.get('.lojaobramax-store-components-0-x-menu__title--menu__button__close').click()
})
Cypress.Commands.add('confirmePerson', (text) => {
  cy.get('.lojaobramax-telemarketing-qta-0-x-logoutHeader')
    .should('exist')
    .should('be.visible')
    .should('contain.text', text)
})
Cypress.Commands.add('logoutMobile', (url, txt) => {
  cy.visit(url)
  cy.get(LOGIN_PG.MODAL_MENU_ACOUNT_MOBILE).should('exist').should('be.visible')
  cy.get(LOGIN_PG.BTN_EXIT_LOGIN_MOBILE).should('exist').should('be.visible').invoke('click')
  cy.get(LOGIN_PG.MODAL_CONFIRMATIN_MOBILE).should('exist').should('be.visible')
  cy.get(LOGIN_PG.BTN_CONFIRMATION_EXIT_MOBILE).contains(txt).invoke('click')
})
Cypress.Commands.add('checkuseMobile', (url, name) => {
  cy.wait(3000)
  cy.visit(url)
  cy.get(LOGIN_PG.MODAL_INFO_MOBILE).should('exist').should('be.visible').should('contain.text', name)
})
Cypress.Commands.add('loginByApi', (email, password, account_name, cookieName, scope) => {
  cy.generateAndValidateToken(email, password, account_name, scope).then((token) => {
    localStorage.setItem(cookieName, token)
  })
})
Cypress.Commands.add('interceptAndCheckEmailInProfile', (email) => {
  cy.intercept('POST', `${Cypress.config('url_loja')}_v/get-profile-telemarketing`, {
    body: email,
  }).as('getProfile')
  cy.wait('@getProfile', { timeout: 8000 }).then((interception) => {
    const responseData = interception.response.body
    expect(responseData).to.include(email)
  })
})
Cypress.Commands.add('interceptAndCheckEmailInProfileCnpj', (email) => {
  cy.intercept('POST', `${Cypress.config('url_loja')}_v/private/cldata`, { body: email }).as(
    'getProfileTelemarketing'
  )
  cy.wait('@getProfileTelemarketing').then((interception) => {
    const responseData = interception.response.body
    expect(responseData).to.include(email)
  })
})
Cypress.Commands.add('loginWithCPF', (cpf) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.config('baseUrl')}_v/private/cldata/`,
    headers: {},
    body: {
      document: cpf,
    },
  }).then((response) => {
    expect(response.status).to.equal(200)
  })
})
Cypress.Commands.add('modalLoginEmailQta', (email, title_email) => {
  cy.get(LOGIN_PG.MODAL_QTA).should('exist').should('be.visible').should('contain.text', title_email)
  cy.get(LOGIN_PG.INPUT_EMAIL_QTA).should('exist').should('be.visible').click()
  cy.get(LOGIN_PG.INPUT_EMAIL_QTA).should('exist').should('be.visible').type(email)
  cy.get(LOGIN_PG.BTN_EMAIL_QTA).should('exist').should('be.visible').click()
})
Cypress.Commands.add('modalLoginPasswordQta', (password, title_password) => {
  cy.get(LOGIN_PG.MODAL_QTA).should('exist').should('be.visible').should('contain.text', title_password)
  cy.get(LOGIN_PG.INPUT_PASSWORD_ATEND).should('exist').should('be.visible').click()
  cy.get(LOGIN_PG.INPUT_PASSWORD_ATEND).should('exist').should('be.visible').type(password, { log: false })
  cy.get(LOGIN_PG.BTN_ENTER_QTA).should('exist').should('be.visible').click()
})
Cypress.Commands.add('userQta', (user) => {
  cy.get(LOGIN_PG.USER_QTA).should('exist').should('be.visible').should('contain.text', user)
})
Cypress.Commands.add('userQtaMobile', (user) => {
  cy.get(LOGIN_PG.USER_QTA)
    .should('exist')
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      const userEmail = user.split('@')[0]
      expect(text).to.include(userEmail)
    })
})
