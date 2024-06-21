const env = require('../../../cypress.env.json')
const validation_data_stores = require('../../../fixtures/storeSettings.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')
const validation_data_products = require('../../../fixtures/products.json')
const validation_data_cart = require('../../../fixtures/cart.json')
const validation_data_check = require('../../../fixtures/checkout.json')

describe('Não Regionalizado Logado', () => {
  it('01 CA - Logo', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.valiateLogo(Cypress.config().baseUrl)
  })
  it('02 CA - Image of products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.cardProductCart(1)
  })
  it('03 CA - Delivery day information', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )

    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )

    cy.deliveryday(validation_data_cart.delivery.title)
    cy.validateReceiveText(validation_data_cart.delivery.receive)
    cy.validateCEP(validation_data_reg.regionalization.order_form.mooca.postalCode)
    cy.captureDeliveryTime().then((deliveryTime) => {
      expect(deliveryTime).to.match(/Em até \d+ dias úteis/)
    })
  })
  it('04 CA - Validate button increase product quantity', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.increaseQuantityCart()
  })
  it('04.1 CA - Validate button decrease product quantity', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.decreaserQuantityCart()
  })
  it('05 CA - Validate remove', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.removeProductCart()
    cy.cartEmpty(validation_data_cart.carty_empty.title)
  })
  it('06 CA - Validate Enjoy and Take It Too', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.titleWidget(validation_data_cart.widget.title)
    cy.cardWidget()
  })
  it('07 CA - Validate "Close order" LOGGED IN', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateCloseOrder(
      validation_data_cart.close_order.btn_texto,
      Cypress.config().baseUrl + validation_data_check.url.shipping_rest
    )
  })
  it('08 CA - Validate total value Products+delivery', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.totalValue()
  })
  it('09 CA - Add 2 identical products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.QuantityProductCart(2)
  })
  it('10 CA - Add 2 different products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.cardProductCart(2)
  })
  it('13 CA - Validate withdraw', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateButtonWithdraw()
    cy.validateReceiveText(validation_data_cart.delivery.withdrawn)
    cy.captureDeliveryTime().then((deliveryTime) => {
      expect(deliveryTime).to.match(/Pronto em até \d+ dias úteis/)
    })
  })
  it('14 CA - Validate deletion of all items', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.without
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateRemoveAll(validation_data_cart.remove.all)
    cy.valiateModalRemoveAll(
      validation_data_cart.remove.title,
      validation_data_cart.remove.texto,
      validation_data_cart.remove.btn_texto
    )
    cy.cartEmpty(validation_data_cart.carty_empty.title)
  })
  it('15 CA - Validate link more products', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.validateChooseMoreProductsLink(Cypress.config().baseUrl)
  })
})
describe('Regionalizado Benfica Logado', () => {
  it('01 CA - Logo', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.valiateLogo(Cypress.config().baseUrl)
  })
  it('02 CA - Image of products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.cardProductCart(1)
  })
  it('03 CA - Delivery day information', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )

    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )

    cy.deliveryday(validation_data_cart.delivery.title)
    cy.validateReceiveText(validation_data_cart.delivery.receive)
    cy.validateCEP(validation_data_reg.regionalization.order_form.benfica.postalCode)
    cy.captureDeliveryTime().then((deliveryTime) => {
      expect(deliveryTime).to.match(/Em até \d+ dias úteis/)
    })
  })
  it('04 CA - Validate button increase product quantity', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.increaseQuantityCart()
  })
  it('04.1 CA - Validate button decrease product quantity', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.decreaserQuantityCart()
  })
  it('05 CA - Validate remove', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.removeProductCart()
    cy.cartEmpty(validation_data_cart.carty_empty.title)
  })
  it('06 CA - Validate Enjoy and Take It Too', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.titleWidget(validation_data_cart.widget.title)
    cy.cardWidget()
  })
  it('07 CA - Validate "Close order" LOGGED IN', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateCloseOrder(
      validation_data_cart.close_order.btn_texto,
      Cypress.config().baseUrl + validation_data_check.url.shipping_rest
    )
  })
  it('08 CA - Validate total value Products+delivery', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.totalValue()
  })
  it('09 CA - Add 2 identical products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.QuantityProductCart(2)
  })
  it('10 CA - Add 2 different products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.cardProductCart(2)
  })
  it('13 CA - Validate withdraw', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateButtonWithdraw()
    cy.validateReceiveText(validation_data_cart.delivery.withdrawn)
    cy.captureDeliveryTime().then((deliveryTime) => {
      expect(deliveryTime).to.match(/Pronto em até \d+ dias úteis/)
    })
  })
  it('14 CA - Validate deletion of all items', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.without
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateRemoveAll(validation_data_cart.remove.all)
    cy.valiateModalRemoveAll(
      validation_data_cart.remove.title,
      validation_data_cart.remove.texto,
      validation_data_cart.remove.btn_texto
    )
    cy.cartEmpty(validation_data_cart.carty_empty.title)
  })
  it('15 CA - Validate link more products', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.validateChooseMoreProductsLink(Cypress.config().baseUrl)
  })
})
describe('Regionalizado Mooca Logado', () => {
  it('01 CA - Logo', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.valiateLogo(Cypress.config().baseUrl)
  })
  it('02 CA - Image of products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.cardProductCart(1)
  })
  it('03 CA - Delivery day information', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )

    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )

    cy.deliveryday(validation_data_cart.delivery.title)
    cy.validateReceiveText(validation_data_cart.delivery.receive)
    cy.validateCEP(validation_data_reg.regionalization.order_form.mooca.postalCode)
    cy.captureDeliveryTime().then((deliveryTime) => {
      expect(deliveryTime).to.match(/Em até \d+ dias úteis/)
    })
  })
  it('04 CA - Validate button increase product quantity', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.increaseQuantityCart()
  })
  it('04.1 CA - Validate button decrease product quantity', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.decreaserQuantityCart()
  })
  it('05 CA - Validate remove', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.removeProductCart()
    cy.cartEmpty(validation_data_cart.carty_empty.title)
  })
  it('06 CA - Validate Enjoy and Take It Too', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.titleWidget(validation_data_cart.widget.title)
    cy.cardWidget()
  })
  it('07 CA - Validate "Close order" LOGGED IN', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateCloseOrder(
      validation_data_cart.close_order.btn_texto,
      Cypress.config().baseUrl + validation_data_check.url.shipping_rest
    )
  })
  it('08 CA - Validate total value Products+delivery', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.totalValue()
  })
  it('09 CA - Add 2 identical products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.QuantityProductCart(2)
  })
  it('10 CA - Add 2 different products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.cardProductCart(2)
  })
  it('13 CA - Validate withdraw', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateButtonWithdraw()
    cy.validateReceiveText(validation_data_cart.delivery.withdrawn)
    cy.captureDeliveryTime().then((deliveryTime) => {
      expect(deliveryTime).to.match(/Pronto em até \d+ dias úteis/)
    })
  })
  it('14 CA - Validate deletion of all items', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.without
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateRemoveAll(validation_data_cart.remove.all)
    cy.valiateModalRemoveAll(
      validation_data_cart.remove.title,
      validation_data_cart.remove.texto,
      validation_data_cart.remove.btn_texto
    )
    cy.cartEmpty(validation_data_cart.carty_empty.title)
  })
  it('15 CA - Validate link more products', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.loginAndVisitCart(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_cart.cart.url
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.validateChooseMoreProductsLink(Cypress.config().baseUrl)
  })
})
describe('Não Regionalizado Não Logado', () => {
  it('01 CA - Logo', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateLogo(Cypress.config().baseUrl)
  })
  it('02 CA - Image of products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.cardProductCart(1)
  })
  it('03 CA - Delivery day information', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.deliveryday(validation_data_cart.delivery.title)
    cy.validateReceiveText(validation_data_cart.delivery.receive)
    cy.validateCEP(validation_data_reg.regionalization.order_form.mooca.postalCode)
    cy.captureDeliveryTime().then((deliveryTime) => {
      expect(deliveryTime).to.match(/Em até \d+ dias úteis/)
    })
  })
  it('04 CA - Validate button increase product quantity', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.increaseQuantityCart()
  })
  it('04.1 CA - Validate button decrease product quantity', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.decreaserQuantityCart()
  })
  it('05 CA - Validate remove', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.removeProductCart()
    cy.cartEmpty(validation_data_cart.carty_empty.title)
  })
  it('06 CA - Validate Enjoy and Take It Too', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.titleWidget(validation_data_cart.widget.title)
    cy.cardWidget()
  })
  it('07.1 CA - Validate "Close order" NOT LOGGED IN', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateCloseOrder(
      validation_data_cart.close_order.btn_texto,
      Cypress.config().baseUrl + validation_data_cart.cart.url_email
    )
    cy.validateEmailInfo(validation_data_check.modalInfo.title)
    cy.validateEmailField(validation_data_cart.placeholder, env.user_qecom.email)
    cy.validateSecurityIcon(
      validation_data_cart.modal_info,
      Cypress.config().baseUrl + validation_data_check.url.shipping_rest
    )
  })
  it('07.2 CA - Validate "Close order" NOT LOGGED IN', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateCloseOrder(
      validation_data_cart.close_order.btn_texto,
      Cypress.config().baseUrl + validation_data_cart.cart.url_email
    )
    cy.validateBackToCartLink(Cypress.config().baseUrl + validation_data_cart.cart.url)
  })
  it('08 CA - Validate total value Products+delivery', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.totalValue()
  })
  it('09 CA - Add 2 identical products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.QuantityProductCart(2)
  })
  it('10 CA - Add 2 different products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.cardProductCart(2)
  })
  it('13 CA - Validate withdraw', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateButtonWithdraw()
    cy.validateReceiveText(validation_data_cart.delivery.withdrawn)
    cy.captureDeliveryTime().then((deliveryTime) => {
      expect(deliveryTime).to.match(/Pronto em até \d+ dias úteis/)
    })
  })
  it('14 CA - Validate deletion of all items', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.without
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateRemoveAll(validation_data_cart.remove.all)
    cy.valiateModalRemoveAll(
      validation_data_cart.remove.title,
      validation_data_cart.remove.texto,
      validation_data_cart.remove.btn_texto
    )
    cy.cartEmpty(validation_data_cart.carty_empty.title)
  })
  it('15 CA - Validate link more products', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.validateChooseMoreProductsLink(Cypress.config().baseUrl)
  })
})
describe('Regionalizado Mooca Não Logado', () => {
  it('01 CA - Logo', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateLogo(Cypress.config().baseUrl)
  })
  it('02 CA - Image of products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.cardProductCart(1)
  })
  it('03 CA - Delivery day information', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.deliveryday(validation_data_cart.delivery.title)
    cy.validateReceiveText(validation_data_cart.delivery.receive)
    cy.validateCEP(validation_data_reg.regionalization.order_form.mooca.postalCode)
    cy.captureDeliveryTime().then((deliveryTime) => {
      expect(deliveryTime).to.match(/Em até \d+ dias úteis/)
    })
  })
  it('04 CA - Validate button increase product quantity', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.increaseQuantityCart()
  })
  it('04.1 CA - Validate button decrease product quantity', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.decreaserQuantityCart()
  })
  it('05 CA - Validate remove', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.removeProductCart()
    cy.cartEmpty(validation_data_cart.carty_empty.title)
  })
  it('06 CA - Validate Enjoy and Take It Too', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.titleWidget(validation_data_cart.widget.title)
    cy.cardWidget()
  })
  it('07.1 CA - Validate "Close order" NOT LOGGED IN', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateCloseOrder(
      validation_data_cart.close_order.btn_texto,
      Cypress.config().baseUrl + validation_data_cart.cart.url_email
    )
    cy.validateEmailInfo(validation_data_check.modalInfo.title)
    cy.validateEmailField(validation_data_cart.placeholder, env.user_qecom.email)
    cy.validateSecurityIcon(
      validation_data_cart.modal_info,
      Cypress.config().baseUrl + validation_data_check.url.shipping_rest
    )
  })
  it('07.2 CA - Validate "Close order" NOT LOGGED IN', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateCloseOrder(
      validation_data_cart.close_order.btn_texto,
      Cypress.config().baseUrl + validation_data_cart.cart.url_email
    )
    cy.validateBackToCartLink(Cypress.config().baseUrl + validation_data_cart.cart.url)
  })
  it('08 CA - Validate total value Products+delivery', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.totalValue()
  })
  it('09 CA - Add 2 identical products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.QuantityProductCart(2)
  })
  it('10 CA - Add 2 different products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.cardProductCart(2)
  })
  it('13 CA - Validate withdraw', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateButtonWithdraw()
    cy.validateReceiveText(validation_data_cart.delivery.withdrawn)
    cy.captureDeliveryTime().then((deliveryTime) => {
      expect(deliveryTime).to.match(/Pronto em até \d+ dias úteis/)
    })
  })
  it('14 CA - Validate deletion of all items', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.without
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateRemoveAll(validation_data_cart.remove.all)
    cy.valiateModalRemoveAll(
      validation_data_cart.remove.title,
      validation_data_cart.remove.texto,
      validation_data_cart.remove.btn_texto
    )
    cy.cartEmpty(validation_data_cart.carty_empty.title)
  })
  it('15 CA - Validate link more products', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.mooca
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.validateChooseMoreProductsLink(Cypress.config().baseUrl)
  })
})
describe('Regionalizado Benfica Não Logado', () => {
  it('01 CA - Logo', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateLogo(Cypress.config().baseUrl)
  })
  it('02 CA - Image of products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.cardProductCart(1)
  })
  it('03 CA - Delivery day information', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.deliveryday(validation_data_cart.delivery.title)
    cy.validateReceiveText(validation_data_cart.delivery.receive)
    cy.validateCEP(validation_data_reg.regionalization.order_form.benfica.postalCode)
    cy.captureDeliveryTime().then((deliveryTime) => {
      expect(deliveryTime).to.match(/Em até \d+ dias úteis/)
    })
  })
  it('04 CA - Validate button increase product quantity', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.increaseQuantityCart()
  })
  it('04.1 CA - Validate button decrease product quantity', { tags: ['@smoke', '@critical'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.decreaserQuantityCart()
  })
  it('05 CA - Validate remove', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.removeProductCart()
    cy.cartEmpty(validation_data_cart.carty_empty.title)
  })
  it('06 CA - Validate Enjoy and Take It Too', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.titleWidget(validation_data_cart.widget.title)
    cy.cardWidget()
  })
  it('07.1 CA - Validate "Close order" NOT LOGGED IN', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateCloseOrder(
      validation_data_cart.close_order.btn_texto,
      Cypress.config().baseUrl + validation_data_cart.cart.url_email
    )
    cy.validateEmailInfo(validation_data_check.modalInfo.title)
    cy.validateEmailField(validation_data_cart.placeholder, env.user_qecom.email)
    cy.validateSecurityIcon(
      validation_data_cart.modal_info,
      Cypress.config().baseUrl + validation_data_check.url.shipping_rest
    )
  })
  it('07.2 CA - Validate "Close order" NOT LOGGED IN', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateCloseOrder(
      validation_data_cart.close_order.btn_texto,
      Cypress.config().baseUrl + validation_data_cart.cart.url_email
    )
    cy.validateBackToCartLink(Cypress.config().baseUrl + validation_data_cart.cart.url)
  })
  it('08 CA - Validate total value Products+delivery', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.totalValue()
  })
  it('09 CA - Add 2 identical products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.QuantityProductCart(2)
  })
  it('10 CA - Add 2 different products', { tags: ['@smoke'] }, () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.cardProductCart(2)
  })
  it('13 CA - Validate withdraw', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateButtonWithdraw()
    cy.validateReceiveText(validation_data_cart.delivery.withdrawn)
    cy.captureDeliveryTime().then((deliveryTime) => {
      expect(deliveryTime).to.match(/Pronto em até \d+ dias úteis/)
    })
  })
  it('14 CA - Validate deletion of all items', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_two_different,
      validation_data_reg.regionalization.order_form.without
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.valiateRemoveAll(validation_data_cart.remove.all)
    cy.valiateModalRemoveAll(
      validation_data_cart.remove.title,
      validation_data_cart.remove.texto,
      validation_data_cart.remove.btn_texto
    )
    cy.cartEmpty(validation_data_cart.carty_empty.title)
  })
  it('15 CA - Validate link more products', () => {
    cy.setupCartWithProductAndAddress(
      validation_data_products.product_unit,
      validation_data_reg.regionalization.order_form.benfica
    )
    cy.visit(Cypress.config().baseUrl + validation_data_cart.cart.url)
    cy.validateChooseMoreProductsLink(Cypress.config().baseUrl)
  })
})
