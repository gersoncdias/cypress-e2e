const env = require('../../../cypress.env.json')
const cookies_data = require('../../../fixtures/cookies.json')
const validation_data_home = require('../../../fixtures/home.json')
const validation_data_cart = require('../../../fixtures/cart.json')
const validation_data_toast = require('../../../fixtures/toast.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')

describe('Regionalizado Benfica Personificado', () => {
  beforeEach(() => {
    cy.setCookie(cookies_data.personification.cookie_person_name, env.user_qecom.email)
    cy.personifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_benfica)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_benfica_qta)
  })
  it('00 HO - Validate the access of the site', () => {
    cy.acessStore()
  })
  it('05 HO - Shelf Add Product to Mini Cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.scrollTo('center')
    cy.componetShelf()
    cy.hideFeedbackWidget()
    cy.clickMiddleProduct()
    cy.miniCartQta(validation_data_cart.cart.mini_cart.title, validation_data_cart.cart.mini_cart.weight)
  })
  it('06 HO - Shelf Visible Images', () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('07 HO - shelf Navigation', () => {
    cy.departmentShelfNavigate()
  })
  it('08 HO - shelf Wishlist Logged in', () => {
    cy.clearWishlist()
    cy.visit(Cypress.config().baseUrl)
    cy.scrollTo('center')
    cy.componetShelf()
    cy.clickMiddleWishlist(validation_data_toast.toast.wishlist.logged)
  })
  it('09 HO - Validate Department Shelf', () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('10 HO - Validate Banners', () => {
    cy.validaBannersMobile()
  })
  it('11 HO - Validate Double Banners', () => {
    cy.scrollTo('center')
    cy.validaDuploBanners()
  })
  it('12 HO - Validate Newsletter', () => {
    cy.scrollTo('center')
    cy.validaNewsletter(
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_input_name,
      validation_data_home.home_page.newsletter.text_input_email,
      validation_data_home.home_page.newsletter.register,
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_thanks,
      validation_data_home.home_page.newsletter.email,
      validation_data_home.home_page.newsletter.name,
    )
  })
  it('13 HO - Add Product to Cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.scrollTo('center')
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.hideFeedbackWidget()
    cy.miniCartQta(validation_data_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_cart.cart.mini_cart.total,
      validation_data_cart.cart.mini_cart.conclude,
    )
    cy.cardProductCart(1)
  })
  it('16 HO - Validate Footer', () => {
    cy.scrollTo('bottom')
    cy.footer()
  })
})
describe('Regionalizado Mooca Personificado', () => {
  beforeEach(() => {
    cy.setCookie(cookies_data.personification.cookie_person_name, env.user_qecom.email)
    cy.personifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_mooca)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_mooca_qta)
  })
  it('00 HO - Validate the access of the site', () => {
    cy.acessStore()
  })
  it('05 HO - Shelf Add Product to Mini Cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.scrollTo('center')
    cy.componetShelf()
    cy.hideFeedbackWidget()
    cy.clickMiddleProduct()
    cy.miniCartQta(validation_data_cart.cart.mini_cart.title, validation_data_cart.cart.mini_cart.weight)
  })
  it('06 HO - Shelf Visible Images', () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('07 HO - shelf Navigation', () => {
    cy.departmentShelfNavigate()
  })
  it('08 HO - shelf Wishlist Logged in', () => {
    cy.clearWishlist()
    cy.visit(Cypress.config().baseUrl)
    cy.scrollTo('center')
    cy.componetShelf()
    cy.clickMiddleWishlist(validation_data_toast.toast.wishlist.logged)
  })
  it('09 HO - Validate Department Shelf', () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('10 HO - Validate Banners', () => {
    cy.validaBannersMobile()
  })
  it('11 HO - Validate Double Banners', () => {
    cy.scrollTo('center')
    cy.validaDuploBanners()
  })
  it('12 HO - Validate Newsletter', () => {
    cy.scrollTo('center')
    cy.validaNewsletter(
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_input_name,
      validation_data_home.home_page.newsletter.text_input_email,
      validation_data_home.home_page.newsletter.register,
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_thanks,
      validation_data_home.home_page.newsletter.email,
      validation_data_home.home_page.newsletter.name,
    )
  })
  it('13 HO - Add Product to Cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.scrollTo('center')
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.hideFeedbackWidget()
    cy.miniCartQta(validation_data_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_cart.cart.mini_cart.total,
      validation_data_cart.cart.mini_cart.conclude,
    )
    cy.cardProductCart(1)
  })
  it('16 HO - Validate Footer', () => {
    cy.scrollTo('bottom')
    cy.footer()
  })
})
describe('Regionalizado Mooca Não Personificado', () => {
  beforeEach(() => {
    cy.nopersonifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_mooca)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_mooca_qta)
  })
  it('00 HO - Validate the access of the site', () => {
    cy.acessStore()
  })
  it('05 HO - Shelf Add Product to Mini Cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.scrollTo('center')
    cy.componetShelf()
    cy.hideFeedbackWidget()
    cy.clickMiddleProduct()
    cy.miniCartQta(validation_data_cart.cart.mini_cart.title, validation_data_cart.cart.mini_cart.weight)
  })
  it('06 HO - Shelf Visible Images', () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('07 HO - shelf Navigation', () => {
    cy.departmentShelfNavigate()
  })
  it('09 HO - Validate Department Shelf', () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('10 HO - Validate Banners', () => {
    cy.validaBannersMobile()
  })
  it('11 HO - Validate Double Banners', () => {
    cy.scrollTo('center')
    cy.validaDuploBanners()
  })
  it('12 HO - Validate Newsletter', () => {
    cy.scrollTo('center')
    cy.validaNewsletter(
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_input_name,
      validation_data_home.home_page.newsletter.text_input_email,
      validation_data_home.home_page.newsletter.register,
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_thanks,
      validation_data_home.home_page.newsletter.email,
      validation_data_home.home_page.newsletter.name,
    )
  })
  it('13 HO - Add Product to Cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.scrollTo('center')
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.hideFeedbackWidget()
    cy.miniCartQta(validation_data_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_cart.cart.mini_cart.total,
      validation_data_cart.cart.mini_cart.conclude,
    )
    cy.cardProductCart(1)
  })
  it('16 HO - Validate Footer', () => {
    cy.scrollTo('bottom')
    cy.footer()
  })
})
describe('Regionalizado Benfica Não Personificado', () => {
  beforeEach(() => {
    cy.nopersonifiedQta(
      Cypress.config().url_loja,
      env.user_qta.user_tlv.user_name,
      env.user_qta.user_tlv.password,
    )
    cy.modalSelectSeller()
    cy.modalDropdowSeller(validation_data_reg.regionalization.sellers.sellerName_benfica)
    cy.confirmRegionalizationQta(validation_data_reg.regionalization.sellers.sellerName_benfica_qta)
  })
  it('00 HO - Validate the access of the site', () => {
    cy.acessStore()
  })
  it('05 HO - Shelf Add Product to Mini Cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.scrollTo('center')
    cy.componetShelf()
    cy.hideFeedbackWidget()
    cy.clickMiddleProduct()
    cy.miniCartQta(validation_data_cart.cart.mini_cart.title, validation_data_cart.cart.mini_cart.weight)
  })
  it('06 HO - Shelf Visible Images', () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('07 HO - shelf Navigation', () => {
    cy.departmentShelfNavigate()
  })
  it('09 HO - Validate Department Shelf', () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('10 HO - Validate Banners', () => {
    cy.validaBannersMobile()
  })
  it('11 HO - Validate Double Banners', () => {
    cy.scrollTo('center')
    cy.validaDuploBanners()
  })
  it('12 HO - Validate Newsletter', () => {
    cy.scrollTo('center')
    cy.validaNewsletter(
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_input_name,
      validation_data_home.home_page.newsletter.text_input_email,
      validation_data_home.home_page.newsletter.register,
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_thanks,
      validation_data_home.home_page.newsletter.email,
      validation_data_home.home_page.newsletter.name,
    )
  })
  it('13 HO - Add Product to Cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.scrollTo('center')
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.hideFeedbackWidget()
    cy.miniCartQta(validation_data_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_cart.cart.mini_cart.total,
      validation_data_cart.cart.mini_cart.conclude,
    )
    cy.cardProductCart(1)
  })
  it('16 HO - Validate Footer', () => {
    cy.scrollTo('bottom')
    cy.footer()
  })
})
