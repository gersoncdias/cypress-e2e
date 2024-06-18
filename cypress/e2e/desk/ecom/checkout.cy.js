const env = require('../../../cypress.env.json')
const validation_data_stores = require('../../../fixtures/storeSettings.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')
const validation_data_products = require('../../../fixtures/products.json')
const validation_data_check = require('../../../fixtures/checkout.json')
const validation_data_cart = require('../../../fixtures/cart.json')

describe('Não Regionalizado Logado', () => {
  it('01. CH - Validate obligation of personal data fields', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.shipping,
    )
    cy.modalProfileData(env.user_qecom.email, env.user_qecom.user_name, env.user_qecom.phone_number)
  })
  it('01.1 CH - Validate obligation of personal data fields', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.shipping,
    )
    cy.modalProfileData(env.user_qecom.email, env.user_qecom.user_name, env.user_qecom.phone_number)
  })
  it('01.2 CH - Validate edit personal data', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.shipping,
    )
    cy.editPersonalData(
      env.user_qecom.email,
      env.user_qecom.user_name,
      env.user_qecom.last_name,
      env.user_qecom.cpf,
      env.user_qecom.phone_number,
    )
  })
  it('02.1 CH - Validate edit Address', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.shipping,
    )
    cy.editAddress()
  })
  it('03 CH - Validate payment', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
  })
  it('04 CH - Validor Order summary', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.validateOrderSummary(validation_data_check.modalSummary.title)
  })
  it('05 CH - Validate "Return to cart"', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.validateReturnCart(Cypress.config().baseUrl + validation_data_cart.cart.url_cat)
  })
  it('06 CH - Validate Total products', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.validateOrderSummary(validation_data_check.modalSummary.title)
  })
  it('07 CH - Validar botão "Finalizar compra"', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.btnPayment(validation_data_check.modalSummary.txt_submit)
  })
  it('09 CH - Validate payment options - Vale Exchange', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.valeExchange(validation_data_check.payment.valeExchange)
  })
  it('09.1 CH - Validate payment options - Cards', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.PaymentCatd()
  })
  it('09.2 CH - Validate payment options - Boleto', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.PaymentBankSlip(validation_data_check.payment.bankSlip)
  })
  it('09.3 CH-Validate payment options - Pix', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.PaymentPix()
  })
})
describe('Regionalizado Benfica Logado', () => {
  it('01. CH - Validate obligation of personal data fields', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.shipping,
    )
    cy.modalProfileData(env.user_qecom.email, env.user_qecom.user_name, env.user_qecom.phone_number)
  })
  it('01.1 CH - Validate obligation of personal data fields', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.shipping,
    )
    cy.modalProfileData(env.user_qecom.email, env.user_qecom.user_name, env.user_qecom.phone_number)
  })
  it('01.2 CH - Validate edit personal data', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.shipping,
    )
    cy.editPersonalData(
      env.user_qecom.email,
      env.user_qecom.user_name,
      env.user_qecom.last_name,
      env.user_qecom.cpf,
      env.user_qecom.phone_number,
    )
  })
  it('02.1 CH - Validate edit Address', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.shipping,
    )
    cy.editAddress()
  })
  it('03 CH - Validate payment', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
  })
  it('04 CH - Validor Order summary', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.validateOrderSummary(validation_data_check.modalSummary.title)
  })
  it('05 CH - Validate "Return to cart"', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.validateReturnCart(Cypress.config().baseUrl + validation_data_cart.cart.url_cat)
  })
  it('06 CH - Validate Total products', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.benfica,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.validateOrderSummary(validation_data_check.modalSummary.title)
  })
  it('07 CH - Validar botão "Finalizar compra"', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.btnPayment(validation_data_check.modalSummary.txt_submit)
  })
  it('09 CH - Validate payment options - Vale Exchange', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.valeExchange(validation_data_check.payment.valeExchange)
  })
  it('09.1 CH - Validate payment options - Cards', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.PaymentCatd()
  })
  it('09.2 CH - Validate payment options - Boleto', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.PaymentBankSlip(validation_data_check.payment.bankSlip)
  })
  it('09.3 CH-Validate payment options - Pix', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.PaymentPix()
  })
})
describe('Regionalizado Mooca Logado', () => {
  it('01. CH - Validate obligation of personal data fields', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.shipping,
    )
    cy.modalProfileData(env.user_qecom.email, env.user_qecom.user_name, env.user_qecom.phone_number)
  })
  it('01.1 CH - Validate obligation of personal data fields', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.shipping,
    )
    cy.modalProfileData(env.user_qecom.email, env.user_qecom.user_name, env.user_qecom.phone_number)
  })
  it('01.2 CH - Validate edit personal data', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.shipping,
    )
    cy.editPersonalData(
      env.user_qecom.email,
      env.user_qecom.user_name,
      env.user_qecom.last_name,
      env.user_qecom.cpf,
      env.user_qecom.phone_number,
    )
  })
  it('02.1 CH - Validate edit Address', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.shipping,
    )
    cy.editAddress()
  })
  it('03 CH - Validate payment', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
  })
  it('04 CH - Validor Order summary', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.validateOrderSummary(validation_data_check.modalSummary.title)
  })
  it('05 CH - Validate "Return to cart"', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.validateReturnCart(Cypress.config().baseUrl + validation_data_cart.cart.url_cat)
  })
  it('06 CH - Validate Total products', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.validateOrderSummary(validation_data_check.modalSummary.title)
  })
  it('07 CH - Validar botão "Finalizar compra"', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.btnPayment(validation_data_check.modalSummary.txt_submit)
  })
  it('09 CH - Validate payment options - Vale Exchange', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.valeExchange(validation_data_check.payment.valeExchange)
  })
  it('09.1 CH - Validate payment options - Cards', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.PaymentCatd()
  })
  it('09.2 CH - Validate payment options - Boleto', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.PaymentBankSlip(validation_data_check.payment.bankSlip)
  })
  it('09.3 CH-Validate payment options - Pix', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca,
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_check.url.payment,
    )
    cy.paymentData(env.user_qecom.number_adrres, env.user_qecom.user_name)
    cy.PaymentPix()
  })
})
