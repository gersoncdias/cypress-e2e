const env = require('../../../cypress.env.json')
const validation_data_plp = require('../../../fixtures/plp.json')
const validation_data_login = require('../../../fixtures/login.json')
const validation_data_toast = require('../../../fixtures/toast.json')
const validation_data_products = require('../../../fixtures/products.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')
const validation_data_mini_cart = require('../../../fixtures/mini_cart.json')
const validation_data_stores = require('../../../fixtures/storeSettings.json')

describe('Não Regionalizado Logado', () => {
  beforeEach(() => {
    cy.loginByApi(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_stores.api.account_name
    )
    cy.visit(Cypress.config().baseUrl + validation_data_products.products.url.plp)
  })

  it('01 PDP - Validate breadcumb', () => {
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
    cy.validBreadcrumb_plp(validation_data_plp.breadcrumb.primeiro_link)
  })
  it('03 PDP - Validate Filter', () => {
    cy.validFilter(validation_data_plp.filter.title)
    cy.validCategoty()
    cy.validFilterCategoty(validation_data_plp.filter.category)
  })
  it('04 PDP - Validate Filter', () => {
    cy.validFilter(validation_data_plp.filter.title)
    cy.validCategoty()
    cy.validRemoveFilterCategoty()
  })
  it('05 PLP - Validate ordering', () => {
    cy.validOedenig(validation_data_plp.ordering.title, validation_data_plp.ordering.order)
  })
  it('06 PLP - Validate Show More', () => {
    cy.scrollTo('center', { duration: 6000 })
    cy.validShowMore(validation_data_plp.show_more)
  })
  it('07 PLP - Validate product card', { tags: ['@smoke'] }, () => {
    cy.validCard()
  })
  it('08 PLP - Validate Add products to cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.validAddProductCard()
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('09 PLP - Validate shelf Wishlist Logged in', () => {
    cy.clearWishlist()
    cy.visit(Cypress.config().baseUrl + validation_data_products.products.url.plp)
    cy.scrollTo(0, 600)
    cy.validCard()
    cy.clickWishlist()
    cy.wishlistempty()
  })
  it('10 PLP - Validate trending products', () => {
    cy.scrollTo(0, 600)
    cy.trendingProducts(validation_data_plp.carrosel.product_high)
  })
})
describe('Regionalizado Benfica Logado', () => {
  beforeEach(() => {
    cy.loginByApi(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_stores.api.account_name
    )
    cy.visit(Cypress.config().baseUrl + validation_data_products.products.url.plp)
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
  })
  it('01 PDP - Validate breadcumb', () => {
    cy.validBreadcrumb_plp(validation_data_plp.breadcrumb.primeiro_link)
  })
  it('03 PDP - Validate Filter', () => {
    cy.validFilter(validation_data_plp.filter.title)
    cy.validCategoty()
    cy.validFilterCategoty(validation_data_plp.filter.category)
  })
  it('04 PDP - Validate Filter', () => {
    cy.validFilter(validation_data_plp.filter.title)
    cy.validCategoty()
    cy.validRemoveFilterCategoty()
  })
  it('05 PLP - Validate ordering', () => {
    cy.validOedenig(validation_data_plp.ordering.title, validation_data_plp.ordering.order)
  })
  it('06 PLP - Validate Show More', () => {
    cy.validShowMore(validation_data_plp.show_more)
  })
  it('07 PLP - Validate product card', { tags: ['@smoke', '@critical'] }, () => {
    cy.validCard()
  })
  it('08 PLP - Add products to cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.validAddProductCard()
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('09 PLP - shelf Wishlist Logged in', () => {
    cy.clearWishlist()
    cy.visit(Cypress.config().baseUrl + validation_data_products.products.url.plp)
    cy.scrollTo(0, 600)
    cy.validCard()
    cy.clickWishlist()
    cy.wishlistempty()
  })
  it('10 ho - Validate trending products', () => {
    cy.scrollTo(0, 600)
    cy.trendingProducts(validation_data_plp.carrosel.product_high)
  })
})
describe('Regionalizado Mooca Logado', () => {
  beforeEach(() => {
    cy.loginByApi(
      env.user_qecom.email,
      env.user_qecom.password,
      validation_data_stores.api.account_name,
      validation_data_stores.api.cookie_name,
      validation_data_stores.api.account_name
    )
    cy.visit(Cypress.config().baseUrl + validation_data_products.products.url.plp)
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
  })
  it('01 PDP - Validate breadcumb', () => {
    cy.validBreadcrumb_plp(validation_data_plp.breadcrumb.primeiro_link)
  })
  it('03 PDP - Validate Filter', () => {
    cy.validFilter(validation_data_plp.filter.title)
    cy.validCategoty()
    cy.validFilterCategoty(validation_data_plp.filter.category)
  })
  it('04 PDP - Validate Filter', () => {
    cy.validFilter(validation_data_plp.filter.title)
    cy.validCategoty()
    cy.validRemoveFilterCategoty()
  })
  it('05 PLP - Validate ordering', () => {
    cy.validOedenig(validation_data_plp.ordering.title, validation_data_plp.ordering.order)
  })
  it('06 PLP - Validate Show More', () => {
    cy.scrollTo('center', { duration: 6000 })
    cy.validShowMore(validation_data_plp.show_more)
  })
  it('07 PLP - Validate product card', { tags: ['@smoke'] }, () => {
    cy.validCard()
  })
  it('08 PLP - Add products to cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.validAddProductCard()
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('09 PLP - shelf Wishlist Logged in', () => {
    cy.clearWishlist()
    cy.visit(Cypress.config().baseUrl + validation_data_products.products.url.plp)
    cy.scrollTo(0, 600)
    cy.validCard()
    cy.clickWishlist()
    cy.wishlistempty()
  })
  it('10 PLP - Validate trending products', () => {
    cy.scrollTo(0, 600)
    cy.trendingProducts(validation_data_plp.carrosel.product_high)
  })
})
describe('Não Regionalizado Não Logado', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl + validation_data_products.products.url.plp)
  })
  it('01 PDP - Validate breadcumb', () => {
    cy.modalWithoutUserLoggedi(validation_data_login.interface.without_logged)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
    cy.validBreadcrumb_plp(validation_data_plp.breadcrumb.primeiro_link)
  })
  it('03 PDP - Validate Filter', () => {
    cy.validFilter(validation_data_plp.filter.title)
    cy.validCategoty()
    cy.validFilterCategoty(validation_data_plp.filter.category)
  })
  it('04 PDP - Validate Filter', () => {
    cy.validFilter(validation_data_plp.filter.title)
    cy.validCategoty()
    cy.validRemoveFilterCategoty()
  })
  it('05 PLP - Validate ordering', () => {
    cy.validOedenig(validation_data_plp.ordering.title, validation_data_plp.ordering.order)
  })
  it('06 PLP - Validate Show More', () => {
    cy.scrollTo('center', { duration: 6000 })
    cy.validShowMore(validation_data_plp.show_more)
  })
  it('07 PLP - Validate product card', { tags: ['@smoke'] }, () => {
    cy.validCard()
  })
  it('08 PLP - Add products to cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.validAddProductCard()
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('09 PLP - shelf Wishlist Logged in', () => {
    cy.scrollTo(0, 600)
    cy.validCard()
    cy.clickWishlist(validation_data_toast.toast.wishlist.without_logged)
  })
  it('10 PLP - Validate trending products', () => {
    cy.scrollTo(0, 600)
    cy.trendingProducts(validation_data_plp.carrosel.product_high)
  })
})
describe('Regionalizado Mooca Não Logado', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl + validation_data_products.products.url.plp)
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
  })
  it('01 PDP - Validate breadcumb', () => {
    cy.validBreadcrumb_plp(validation_data_plp.breadcrumb.primeiro_link)
  })
  it('03 PDP - Validate Filter', () => {
    cy.validFilter(validation_data_plp.filter.title)
    cy.validCategoty()
    cy.validFilterCategoty(validation_data_plp.filter.category)
  })
  it('04 PDP - Validate Filter', () => {
    cy.validFilter(validation_data_plp.filter.title)
    cy.validCategoty()
    cy.validRemoveFilterCategoty()
  })
  it('05 PLP - Validate ordering', () => {
    cy.validOedenig(validation_data_plp.ordering.title, validation_data_plp.ordering.order)
  })
  it('06 PLP - Validate Show More', () => {
    cy.scrollTo('center', { duration: 6000 })
    cy.validShowMore(validation_data_plp.show_more)
  })
  it('07 PLP - Validate product card', { tags: ['@smoke'] }, () => {
    cy.validCard()
  })
  it('08 PLP - Add products to cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.validAddProductCard()
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('09 PLP - shelf Wishlist Logged in', () => {
    cy.scrollTo(0, 600)
    cy.validCard()
    cy.clickWishlist(validation_data_toast.toast.wishlist.without_logged)
  })
  it('10 PLP - Validate trending products', () => {
    cy.scrollTo(0, 600)
    cy.trendingProducts(validation_data_plp.carrosel.product_high)
  })
})
describe('Regionalizado Benfica Não Logado', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl + validation_data_products.products.url.plp)
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
  })
  it('01 PDP - Validate breadcumb', () => {
    cy.validBreadcrumb_plp(validation_data_plp.breadcrumb.primeiro_link)
  })
  it('03 PDP - Validate Filter', () => {
    cy.validFilter(validation_data_plp.filter.title)
    cy.validCategoty()
    cy.validFilterCategoty(validation_data_plp.filter.category)
  })
  it('04 PDP - Validate Filter', () => {
    cy.validFilter(validation_data_plp.filter.title)
    cy.validCategoty()
    cy.validRemoveFilterCategoty()
  })
  it('05 PLP - Validate ordering', () => {
    cy.validOedenig(validation_data_plp.ordering.title, validation_data_plp.ordering.order)
  })
  it('06 PLP - Validate Show More', () => {
    cy.scrollTo('center', { duration: 6000 })
    cy.validShowMore(validation_data_plp.show_more)
  })
  it('07 PLP - Validate product card', { tags: ['@smoke'] }, () => {
    cy.validCard()
  })
  it('08 PLP - Add products to cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.validAddProductCard()
    cy.miniCartLogo()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('09 PLP - shelf Wishlist Logged in', () => {
    cy.scrollTo(0, 600)
    cy.validCard()
    cy.clickWishlist(validation_data_toast.toast.wishlist.without_logged)
  })
  it('10 PLP - Validate trending products', () => {
    cy.scrollTo(0, 600)
    cy.trendingProducts(validation_data_plp.carrosel.product_high)
  })
})
