const HOME_PAGE = require('../page_elements/home_page')
const HOME_PG = new HOME_PAGE()

Cypress.Commands.add('validatePageAccessed', (Url) => {
  cy.url().should('eq', Url)
})
Cypress.Commands.add('acessStore', () => {
  cy.fixture('storeSettings.json').then(() => {
    cy.visit(Cypress.config('url_loja'))
    cy.url().should('eq', Cypress.config('url_loja'))
  })
})
Cypress.Commands.add('departmentShelf', (title) => {
  cy.get(HOME_PG.TEXT_CATEGORY).should('exist').should('be.visible').should('contain.text', title)
  cy.get(HOME_PG.MODAL_SHELF_DEPART).should('exist').should('be.visible')
  cy.get(HOME_PG.IMG_MODAL_SHELF_DEPRT).should('have.attr', 'src')
})
Cypress.Commands.add('departmentShelfNavigate', () => {
  cy.get(HOME_PG.MODAL_SHELF_DEPART)
    .should('be.visible')
    .within(() => {
      cy.get(HOME_PG.BTN_SLIDER_RIGHT_SHELF).should('be.visible').click()
      cy.get(HOME_PG.BTN_SLIDER_LEFT_SHELF).should('be.visible').click()
    })
})
Cypress.Commands.add('componetShelf', () => {
  cy.wait(3000)
  cy.get(HOME_PG.TEXT_SHELF).should('exist').should('be.visible')
})
Cypress.Commands.add('clickMiddleProduct', () => {
  cy.get(HOME_PG.MODAL_SHELF)
    .find(HOME_PG.MODAL_ITEM_SHELF)
    .then(($elements) => {
      const thirdIndex = 2
      cy.wrap($elements.eq(thirdIndex)).find(HOME_PG.BTN_ADD_ITEM).click()
    })
})
Cypress.Commands.add('clickMiddleWishlist', () => {
  cy.wait(2000)
  cy.get(HOME_PG.MODAL_SHELF)
    .find(HOME_PG.MODAL_ITEM_SHELF)
    .then(($elements) => {
      const middleIndex = Math.floor($elements.length / 2)
      cy.wrap($elements.eq(middleIndex)).find(HOME_PG.BTN_ADD_WISHLIST).click({ force: true })
    })
})
Cypress.Commands.add('clearWishlist', () => {
  cy.visit(Cypress.config().baseUrl + 'account#/wishlist')
  cy.wait(3000)
  cy.get('body').then(($body) => {
    if ($body.find(HOME_PG.BTN_ADD_WISHLIST).length > 0) {
      cy.get(HOME_PG.BTN_ADD_WISHLIST).click({ multiple: true })
    }
  })
})
Cypress.Commands.add('wishlistempty', () => {
  cy.visit(Cypress.config().baseUrl + 'account#/wishlist')
  cy.wait(3000)
  cy.get('.vtex-product-summary-2-x-element').should('exist').children().should('exist')
})
Cypress.Commands.add('validaDuploBanners', () => {
  cy.get(HOME_PG.DIV_BANNER).within(() => {
    cy.get(HOME_PG.BANNER_SH)
      .should('have.length', 2)
      .each(($banner) => {
        cy.wrap($banner).find('img').should('have.attr', 'src').and('not.be.empty')
      })
  })
})
Cypress.Commands.add('validaBanners', () => {
  cy.get(HOME_PG.IMG_BANNER_HOME).should('be.visible').should('exist').find('img').should('exist')
  cy.get(HOME_PG.BTN_SLIDER_RIGHT_HOME).should('be.visible').should('exist')
  cy.get(HOME_PG.BTN_SLIDER_LEFT_HOME).should('be.visible').should('exist')
  cy.get(HOME_PG.BTN_PAGINATION_DOTS_HOME).should('be.visible').should('exist')
})
Cypress.Commands.add('validaBannersMobile', () => {
  cy.get(HOME_PG.IMG_BANNER_HOME).should('be.visible').should('exist').find('img').should('exist')
  cy.get(HOME_PG.BTN_PAGINATION_DOTS_HOME).should('be.visible').should('exist')
})
Cypress.Commands.add(
  'validaNewsletter',
  (description, name, email, register, text_description, thanks, fake_email, fake_name) => {
    cy.wait(2000)
    cy.get(HOME_PG.NEWSLETTER.CONTAINER).should('be.visible').should('exist')

    cy.get(HOME_PG.NEWSLETTER.IMG_ELEMENT).should('exist').and('have.attr', 'src').and('not.be.empty')

    cy.get(HOME_PG.NEWSLETTER.TEXT_DESCRIPTION).should('be.visible').contains(description)

    cy.get(HOME_PG.NEWSLETTER.INPUT_NAME)
      .should('be.visible')
      .and('have.attr', 'placeholder', name)
      .type(fake_name)

    cy.get(HOME_PG.NEWSLETTER.INPUT_EMAIL)
      .should('be.visible')
      .and('have.attr', 'placeholder', email)
      .type(fake_email)

    cy.get(HOME_PG.NEWSLETTER.BTN_SUBMIT).should('be.visible').contains(register).click()
    cy.get(HOME_PG.NEWSLETTER.IMG_ELEMENT).should('be.visible').and('have.attr', 'src').and('not.be.empty')
    cy.get(HOME_PG.NEWSLETTER.TEXT_DESCRIPTION).should('be.visible').should('contain.text', text_description)

    cy.get(HOME_PG.NEWSLETTER.TEXT_SUCCESS, { timeout: 6000 })
      .should('be.visible')
      .should('contain.text', thanks)
  }
)
Cypress.Commands.add('validaNewsletterMobile', () => {
  cy.get(HOME_PG.NEWSLETTER.CONTAINER_MOBILE).should('be.visible').should('exist')
  cy.validaNewsletter()
})
