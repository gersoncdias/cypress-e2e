import 'cypress-plugin-api'
import './commands/api_commands'
import './commands/reg_commands'
import './commands/plp_commands'
import './commands/pdp_commands'
import './commands/home_commands'
import './commands/cart_commands'
import './commands/login_commands'
import 'cypress-plugin-xhr-toggle'
import './commands/footer_commands'
import './commands/search_commands'
import './commands/header_commands'
import './commands/min_cart_commands'
import './commands/checkout_commands'
import '@shelex/cypress-allure-plugin'
import './commands/my_account_commands'
import './commands/pre_condition_commands'

Cypress.on('uncaught:exception', () => {
  return false
})

beforeEach(() => {
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.setCookie('user_allowed_save_cookie', 'true')
})
