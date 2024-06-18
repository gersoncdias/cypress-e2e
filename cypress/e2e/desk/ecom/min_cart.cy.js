const cookies_data = require('../../../fixtures/cookies.json')
const validation_data_mini_cart = require('../../../fixtures/mini_cart.json')
const validation_data_login = require('../../../fixtures/login.json')
const validation_data_products = require('../../../fixtures/products.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')

describe('Não Regionalizado Logado', () => {
  it('01 MC - Validate empty mini cart', () => {
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.miniCartLogo()
    cy.miniCartEmpty(
      validation_data_mini_cart.cart.mini_cart.title,
      validation_data_mini_cart.cart.mini_cart.empty,
      validation_data_mini_cart.cart.mini_cart.text_description,
      validation_data_mini_cart.cart.mini_cart.text_btn,
    )
  })
  it('02 MC - Validate remove product', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.removeProduct()
    cy.miniCartEmpty(
      validation_data_mini_cart.cart.mini_cart.title,
      validation_data_mini_cart.cart.mini_cart.empty,
      validation_data_mini_cart.cart.mini_cart.text_description,
      validation_data_mini_cart.cart.mini_cart.text_btn,
    )
  })
  it('03 MC - Add one product mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('04 MC - Validate button increase product quantity', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.increaserQuantityMiniCart()
  })
  it('04.1 MC - Validate button decrease product quantity', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.decreaserQuantityMiniCart()
  })
  it('07 MC - Validate close the mini cart', () => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.closeMiniCart()
  })
  it('08 MC - Validate the "Complete Purchase" button', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_mini_cart.cart.mini_cart.total,
      validation_data_mini_cart.cart.mini_cart.conclude,
    )
  })
  it('09 MC - Add 2 identical products', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_two
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.QuantityProductMiniCart(2)
  })
  it('10 MC - Add 2 different products', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_two_different
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 2)
  })
})
describe('Regionalizado Benfica Logado', () => {
  it('01 MC - Validate empty mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCartEmpty(
      validation_data_mini_cart.cart.mini_cart.title,
      validation_data_mini_cart.cart.mini_cart.empty,
      validation_data_mini_cart.cart.mini_cart.text_description,
      validation_data_mini_cart.cart.mini_cart.text_btn,
    )
  })
  it('02 MC - Validate remove product', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.removeProduct()
    cy.miniCartEmpty(
      validation_data_mini_cart.cart.mini_cart.title,
      validation_data_mini_cart.cart.mini_cart.empty,
      validation_data_mini_cart.cart.mini_cart.text_description,
      validation_data_mini_cart.cart.mini_cart.text_btn,
    )
  })
  it('03 MC - Add one product mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('04 MC - Validate button increase product quantity', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.increaserQuantityMiniCart()
  })
  it('04.1 MC - Validate button decrease product quantity', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.decreaserQuantityMiniCart()
  })
  it('07 MC - Validate close the mini cart', () => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.closeMiniCart()
  })
  it('08 MC - Validate the "Complete Purchase" button', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_mini_cart.cart.mini_cart.total,
      validation_data_mini_cart.cart.mini_cart.conclude,
    )
  })
  it('09 MC - Add 2 identical products', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_two
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.QuantityProductMiniCart(2)
  })
  it('10 MC - Add 2 different products', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_two_different
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 2)
  })
})
describe('Regionalizado Mooca Logado', () => {
  it('01 MC - Validate empty mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCartEmpty(
      validation_data_mini_cart.cart.mini_cart.title,
      validation_data_mini_cart.cart.mini_cart.empty,
      validation_data_mini_cart.cart.mini_cart.text_description,
      validation_data_mini_cart.cart.mini_cart.text_btn,
    )
  })
  it('02 MC - Validate remove product', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.removeProduct()
    cy.miniCartEmpty(
      validation_data_mini_cart.cart.mini_cart.title,
      validation_data_mini_cart.cart.mini_cart.empty,
      validation_data_mini_cart.cart.mini_cart.text_description,
      validation_data_mini_cart.cart.mini_cart.text_btn,
    )
  })
  it('03 MC - Add one product mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('04 MC - Validate button increase product quantity', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.increaserQuantityMiniCart()
  })
  it('04.1 MC - Validate button decrease product quantity', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.decreaserQuantityMiniCart()
  })
  it('07 MC - Validate close the mini cart', () => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.closeMiniCart()
  })
  it('08 MC - Validate the "Complete Purchase" button', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_mini_cart.cart.mini_cart.total,
      validation_data_mini_cart.cart.mini_cart.conclude,
    )
  })
  it('09 MC - Add 2 identical products', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_two
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.QuantityProductMiniCart(2)
  })
  it('10 MC - Add 2 different products', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_two_different
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 2)
  })
})
describe('Não Regionalizado Não Logado', () => {
  it('01 MC - Validate empty mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCartEmpty(
      validation_data_mini_cart.cart.mini_cart.title,
      validation_data_mini_cart.cart.mini_cart.empty,
      validation_data_mini_cart.cart.mini_cart.text_description,
      validation_data_mini_cart.cart.mini_cart.text_btn,
    )
  })
  it('02 MC - Validate remove product', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.removeProduct()
    cy.miniCartEmpty(
      validation_data_mini_cart.cart.mini_cart.title,
      validation_data_mini_cart.cart.mini_cart.empty,
      validation_data_mini_cart.cart.mini_cart.text_description,
      validation_data_mini_cart.cart.mini_cart.text_btn,
    )
  })
  it('03 MC - Add one product mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('04 MC - Validate button increase product quantity', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.increaserQuantityMiniCart()
  })
  it('04.1 MC - Validate button decrease product quantity', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.decreaserQuantityMiniCart()
  })
  it('07 MC - Validate close the mini cart', () => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.closeMiniCart()
  })
  it('08 MC - Validate the "Complete Purchase" button', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_mini_cart.cart.mini_cart.total,
      validation_data_mini_cart.cart.mini_cart.conclude,
    )
  })
  it('09 MC - Add 2 identical products', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_two
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.QuantityProductMiniCart(2)
  })
  it('10 MC - Add 2 different products', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_two_different
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 2)
  })
})
describe('Regionalizado Mooca Não Logado', () => {
  it('01 MC - Validate empty mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCartEmpty(
      validation_data_mini_cart.cart.mini_cart.title,
      validation_data_mini_cart.cart.mini_cart.empty,
      validation_data_mini_cart.cart.mini_cart.text_description,
      validation_data_mini_cart.cart.mini_cart.text_btn,
    )
  })
  it('02 MC - Validate remove product', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.removeProduct()
    cy.miniCartEmpty(
      validation_data_mini_cart.cart.mini_cart.title,
      validation_data_mini_cart.cart.mini_cart.empty,
      validation_data_mini_cart.cart.mini_cart.text_description,
      validation_data_mini_cart.cart.mini_cart.text_btn,
    )
  })
  it('03 MC - Add one product mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('04 MC - Validate button increase product quantity', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.increaserQuantityMiniCart()
  })
  it('04.1 MC - Validate button decrease product quantity', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.decreaserQuantityMiniCart()
  })
  it('07 MC - Validate close the mini cart', () => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.closeMiniCart()
  })
  it('08 MC - Validate the "Complete Purchase" button', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_mini_cart.cart.mini_cart.total,
      validation_data_mini_cart.cart.mini_cart.conclude,
    )
  })
  it('09 MC - Add 2 identical products', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_two
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.QuantityProductMiniCart(2)
  })
  it('10 MC - Add 2 different products', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_two_different
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 2)
  })
})
describe('Regionalizado Benfica Não Logado', () => {
  it('01 MC - Validate empty mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCartEmpty(
      validation_data_mini_cart.cart.mini_cart.title,
      validation_data_mini_cart.cart.mini_cart.empty,
      validation_data_mini_cart.cart.mini_cart.text_description,
      validation_data_mini_cart.cart.mini_cart.text_btn,
    )
  })
  it('02 MC - Validate remove product', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.removeProduct()
    cy.miniCartEmpty(
      validation_data_mini_cart.cart.mini_cart.title,
      validation_data_mini_cart.cart.mini_cart.empty,
      validation_data_mini_cart.cart.mini_cart.text_description,
      validation_data_mini_cart.cart.mini_cart.text_btn,
    )
  })
  it('03 MC - Add one product mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('04 MC - Validate button increase product quantity', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.increaserQuantityMiniCart()
  })
  it('04.1 MC - Validate button decrease product quantity', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.decreaserQuantityMiniCart()
  })
  it('07 MC - Validate close the mini cart', () => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.closeMiniCart()
  })
  it('08 MC - Validate the "Complete Purchase" button', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_unit
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_mini_cart.cart.mini_cart.total,
      validation_data_mini_cart.cart.mini_cart.conclude,
    )
  })
  it('09 MC - Add 2 identical products', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_two
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.QuantityProductMiniCart(2)
  })
  it('10 MC - Add 2 different products', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.generateOrderForm().then((orderForm) => {
      const orderFormId = orderForm.orderFormId
      const product = validation_data_products.product_two_different
      cy.addItemToOrderForm(orderFormId, product).then((updatedOrderForm) => {
        cy.setOrderFormCookie(orderForm)
        expect(updatedOrderForm.items.length).to.be.greaterThan(0)
      })
    })
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
    )
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 2)
  })
})
