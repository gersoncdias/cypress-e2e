const env = require('../../../cypress.env.json')
const cookies_data = require('../../../fixtures/cookies.json')
const validation_data_home = require('../../../fixtures/home.json')
const validation_data_toast = require('../../../fixtures/toast.json')
const validation_data_mini_cart = require('../../../fixtures/mini_cart.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')
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
    cy.visit(Cypress.config().baseUrl)
  })
  it('00 HO - Validate the Acces of the Site', { tags: ['@smoke', '@critical'] }, () => {
    cy.validatePageAccessed(Cypress.config().baseUrl)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
    cy.logoReader()
  })
  it('02 HO - validate if you Enter an Invalid Zip Code', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.modalRegion(
      validation_data_reg.regionalization.modal_regionalization.title,
      validation_data_reg.regionalization.modal_regionalization.subTitle,
      validation_data_reg.regionalization.modal_regionalization.success_message,
      validation_data_reg.regionalization.modal_regionalization.cep_input_store,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location,
      validation_data_reg.regionalization.sellers.cep_without_action
    )
    cy.regionalization(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.toastRegionalization(validation_data_reg.regionalization.toast_regionalization.without_delivery)
  })
  it('03 HO - Insert Zip Code Without Action', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.modalRegion(
      validation_data_reg.regionalization.modal_regionalization.title,
      validation_data_reg.regionalization.modal_regionalization.subTitle,
      validation_data_reg.regionalization.modal_regionalization.success_message,
      validation_data_reg.regionalization.modal_regionalization.cep_input_store,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location
    )
    cy.regionalization(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.toastRegionalization(validation_data_reg.regionalization.toast_regionalization.without_delivery)
  })
  it('05 HO - Shelf Add Product to Mini Cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.scrollTo(0, 600)
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('06 HO - Shelf Visible Images', { tags: ['@smoke', '@critical'] }, () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('07 HO - shelf Navigation', () => {
    cy.departmentShelfNavigate()
  })
  it('08 HO - shelf Wishlist Logged in', () => {
    cy.clearWishlist()
    cy.visit(Cypress.config().baseUrl)
    cy.scrollTo(0, 600)
    cy.componetShelf()
    cy.clickMiddleWishlist()
    cy.wishlistempty()
  })
  it('09 HO - Validate Department Shelf', () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('10 HO - Validate Banners', { tags: ['@smoke', '@critical'] }, () => {
    cy.validaBanners()
  })
  it('11 HO - Validate Double Banners', () => {
    cy.scrollTo(0, 600)
    cy.validaDuploBanners()
  })
  it('12 HO - Validate Newsletter', () => {
    cy.scrollTo(0, 600)
    cy.validaNewsletter(
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_input_name,
      validation_data_home.home_page.newsletter.text_input_email,
      validation_data_home.home_page.newsletter.register,
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_thanks,
      validation_data_home.home_page.newsletter.email,
      validation_data_home.home_page.newsletter.name
    )
  })
  it('13 HO - Add Product to Cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.scrollTo(0, 600)
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_mini_cart.cart.mini_cart.total,
      validation_data_mini_cart.cart.mini_cart.conclude
    )
    cy.cardProductCart(1)
  })
  it('16 HO - Validate Footer', () => {
    cy.scrollTo('bottom')
    cy.footer()
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
    cy.visit(Cypress.config().baseUrl)
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
  })
  it('00 HO - Validate the Acces of the Site', { tags: ['@smoke', 'critical'] }, () => {
    cy.validatePageAccessed(Cypress.config().baseUrl)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_benfica)
    cy.logoReader()
  })
  it('02 HO - validate if you Enter an Invalid Zip Code', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.modalRegion(
      validation_data_reg.regionalization.modal_regionalization.title,
      validation_data_reg.regionalization.modal_regionalization.subTitle,
      validation_data_reg.regionalization.modal_regionalization.success_message,
      validation_data_reg.regionalization.modal_regionalization.cep_input_store,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location,
      validation_data_reg.regionalization.sellers.cep_rj
    )
    cy.regionalization(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.toastRegionalization(validation_data_reg.regionalization.toast_regionalization.without_delivery)
  })
  it('03 HO - Insert Zip Code Without Action', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.modalRegion(
      validation_data_reg.regionalization.modal_regionalization.title,
      validation_data_reg.regionalization.modal_regionalization.subTitle,
      validation_data_reg.regionalization.modal_regionalization.success_message,
      validation_data_reg.regionalization.modal_regionalization.cep_input_store,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location
    )
    cy.regionalization(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.toastRegionalization(validation_data_reg.regionalization.toast_regionalization.without_delivery)
  })
  it('05 HO - Shelf Add Product to Mini Cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.scrollTo(0, 600)
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('06 HO - Shelf Visible Images', { tags: ['@smoke', '@critical'] }, () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('07 HO - shelf Navigation', () => {
    cy.departmentShelfNavigate()
  })
  it('08 HO - shelf Wishlist Logged in', () => {
    cy.clearWishlist()
    cy.visit(Cypress.config().baseUrl)
    cy.scrollTo(0, 600)
    cy.componetShelf()
    cy.clickMiddleWishlist()
    cy.wishlistempty()
  })
  it('09 HO - Validate Department Shelf', () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('10 HO - Validate Banners', { tags: ['@smoke', '@critical'] }, () => {
    cy.validaBanners()
  })
  it('11 HO - Validate Double Banners', () => {
    cy.scrollTo(0, 600)
    cy.validaDuploBanners()
  })
  it('12 HO - Validate Newsletter', () => {
    cy.scrollTo(0, 600)
    cy.validaNewsletter(
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_input_name,
      validation_data_home.home_page.newsletter.text_input_email,
      validation_data_home.home_page.newsletter.register,
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_thanks,
      validation_data_home.home_page.newsletter.email,
      validation_data_home.home_page.newsletter.name
    )
  })
  it('13 HO - Add Product to Cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.scrollTo(0, 600)
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_mini_cart.cart.mini_cart.total,
      validation_data_mini_cart.cart.mini_cart.conclude
    )
    cy.cardProductCart(1)
  })
  it('14 HO - Validate regionalization', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.regionalizationCep(validation_data_reg.regionalization.sellers.cep_rj)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_benfica)
  })
  it('14.1 HO - Validate regionalization', () => {
    const cep_formatado = validation_data_reg.regionalization.sellers.cep_benfica.replace(
      /(\d{5})(\d{3})/,
      '$1-$2'
    )
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.dropDownRegionalizatin(cep_formatado)
    cy.modalLocation(validation_data_reg.regionalization.sellers.sellerName_benfica)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_benfica)
  })
  it('16 HO - Validate Footer', () => {
    cy.scrollTo('bottom')
    cy.footer()
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
    cy.visit(Cypress.config().baseUrl)
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
  })
  it('00 HO - Validate the Acces of the Site', { tags: ['@smoke', '@critical'] }, () => {
    cy.validatePageAccessed(Cypress.config().baseUrl)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
    cy.logoReader()
  })
  it('02 HO - validate if you Enter an Invalid Zip Code', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.modalRegion(
      validation_data_reg.regionalization.modal_regionalization.title,
      validation_data_reg.regionalization.modal_regionalization.subTitle,
      validation_data_reg.regionalization.modal_regionalization.success_message,
      validation_data_reg.regionalization.modal_regionalization.cep_input_store,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location,
      validation_data_reg.regionalization.sellers.cep_rj
    )
    cy.regionalization(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.toastRegionalization(validation_data_reg.regionalization.toast_regionalization.without_delivery)
  })
  it('03 HO - Insert Zip Code Without Action', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.modalRegion(
      validation_data_reg.regionalization.modal_regionalization.title,
      validation_data_reg.regionalization.modal_regionalization.subTitle,
      validation_data_reg.regionalization.modal_regionalization.success_message,
      validation_data_reg.regionalization.modal_regionalization.cep_input_store,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location
    )
    cy.regionalization(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.toastRegionalization(validation_data_reg.regionalization.toast_regionalization.without_delivery)
  })
  it('05 HO - Shelf Add Product to Mini Cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.scrollTo(0, 600)
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('06 HO - Shelf Visible Images', { tags: ['@smoke', '@critical'] }, () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('07 HO - shelf Navigation', () => {
    cy.departmentShelfNavigate()
  })
  it('08 HO - shelf Wishlist Logged in', () => {
    cy.clearWishlist()
    cy.visit(Cypress.config().baseUrl)
    cy.scrollTo(0, 600)
    cy.componetShelf()
    cy.clickMiddleWishlist()
    cy.wishlistempty()
  })
  it('09 HO - Validate Department Shelf', () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('10 HO - Validate Banners', { tags: ['@smoke', '@critical'] }, () => {
    cy.validaBanners()
  })
  it('11 HO - Validate Double Banners', () => {
    cy.scrollTo(0, 600)
    cy.validaDuploBanners()
  })
  it('12 HO - Validate Newsletter', () => {
    cy.scrollTo(0, 600)
    cy.validaNewsletter(
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_input_name,
      validation_data_home.home_page.newsletter.text_input_email,
      validation_data_home.home_page.newsletter.register,
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_thanks,
      validation_data_home.home_page.newsletter.email,
      validation_data_home.home_page.newsletter.name
    )
  })
  it('13 HO - Add Product to Cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.scrollTo(0, 600)
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_mini_cart.cart.mini_cart.total,
      validation_data_mini_cart.cart.mini_cart.conclude
    )
    cy.cardProductCart(1)
  })
  it('14 HO - Validate regionalization', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.regionalizationCep(validation_data_reg.regionalization.sellers.cep_rj)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
  })
  it('14.1 HO - Validate regionalization', () => {
    const cep_formatado = validation_data_reg.regionalization.sellers.cep_benfica.replace(
      /(\d{5})(\d{3})/,
      '$1-$2'
    )
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.dropDownRegionalizatin(cep_formatado)
    cy.modalLocation(validation_data_reg.regionalization.sellers.sellerName_mooca)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
  })
  it('16 HO - Validate Footer', () => {
    cy.scrollTo('bottom')
    cy.footer()
  })
})
describe('Não Regionalizado Não Logado', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  })
  it('00 HO - Validate the Acces of the Site', { tags: ['@smoke', '@critical'] }, () => {
    cy.validatePageAccessed(Cypress.config().baseUrl)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
    cy.logoReader()
  })
  it('02 HO - validate if you Enter an Invalid Zip Code', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.modalRegion(
      validation_data_reg.regionalization.modal_regionalization.title,
      validation_data_reg.regionalization.modal_regionalization.subTitle,
      validation_data_reg.regionalization.modal_regionalization.success_message,
      validation_data_reg.regionalization.modal_regionalization.cep_input_store,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location,
      validation_data_reg.regionalization.sellers.cep_rj
    )
    cy.regionalization(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.toastRegionalization(validation_data_reg.regionalization.toast_regionalization.without_delivery)
  })
  it('03 HO - Insert Zip Code Without Action', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.modalRegion(
      validation_data_reg.regionalization.modal_regionalization.title,
      validation_data_reg.regionalization.modal_regionalization.subTitle,
      validation_data_reg.regionalization.modal_regionalization.success_message,
      validation_data_reg.regionalization.modal_regionalization.cep_input_store,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location
    )
    cy.regionalization(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.toastRegionalization(validation_data_reg.regionalization.toast_regionalization.without_delivery)
  })
  it('05 HO - Shelf Add Product to Mini Cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.scrollTo(0, 600)
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('06 HO - Shelf Visible Images', { tags: ['@smoke', '@critical'] }, () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('07 HO - shelf Navigation', () => {
    cy.departmentShelfNavigate()
  })
  it('08 HO - shelf Wishlist Logged in', () => {
    cy.scrollTo(0, 600)
    cy.componetShelf()
    cy.clickMiddleWishlist(validation_data_toast.toast.wishlist.without_logged)
  })
  it('09 HO - Validate Department Shelf', () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('10 HO - Validate Banners', { tags: ['@smoke', '@critical'] }, () => {
    cy.validaBanners()
  })
  it('11 HO - Validate Double Banners', () => {
    cy.scrollTo(0, 600)
    cy.validaDuploBanners()
  })
  it('12 HO - Validate Newsletter', () => {
    cy.scrollTo(0, 600)
    cy.validaNewsletter(
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_input_name,
      validation_data_home.home_page.newsletter.text_input_email,
      validation_data_home.home_page.newsletter.register,
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_thanks,
      validation_data_home.home_page.newsletter.email,
      validation_data_home.home_page.newsletter.name
    )
  })
  it('13 HO - Add Product to Cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.scrollTo(0, 600)
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_mini_cart.cart.mini_cart.total,
      validation_data_mini_cart.cart.mini_cart.conclude
    )
    cy.cardProductCart(1)
  })
  it('16 HO - Validate Footer', () => {
    cy.scrollTo('bottom')
    cy.footer()
  })
})
describe('Regionalizado Mooca Não Logado', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
  })
  it('00 HO - Validate the Acces of the Site', { tags: ['@smoke', '@critical'] }, () => {
    cy.validatePageAccessed(Cypress.config().baseUrl)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
    cy.logoReader()
  })
  it('02 HO - validate if you Enter an Invalid Zip Code', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.modalRegion(
      validation_data_reg.regionalization.modal_regionalization.title,
      validation_data_reg.regionalization.modal_regionalization.subTitle,
      validation_data_reg.regionalization.modal_regionalization.success_message,
      validation_data_reg.regionalization.modal_regionalization.cep_input_store,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location,
      validation_data_reg.regionalization.sellers.cep_rj
    )
    cy.regionalization(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.toastRegionalization(validation_data_reg.regionalization.toast_regionalization.without_delivery)
  })
  it('03 HO - Insert Zip Code Without Action', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.modalRegion(
      validation_data_reg.regionalization.modal_regionalization.title,
      validation_data_reg.regionalization.modal_regionalization.subTitle,
      validation_data_reg.regionalization.modal_regionalization.success_message,
      validation_data_reg.regionalization.modal_regionalization.cep_input_store,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location
    )
    cy.regionalization(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.toastRegionalization(validation_data_reg.regionalization.toast_regionalization.without_delivery)
  })
  it('05 HO - Shelf Add Product to Mini Cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.scrollTo(0, 600)
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('06 HO - Shelf Visible Images', { tags: ['@smoke', '@critical'] }, () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('07 HO - shelf Navigation', () => {
    cy.departmentShelfNavigate()
  })
  it('08 HO - shelf Wishlist Logged in', () => {
    cy.scrollTo(0, 600)
    cy.componetShelf()
    cy.clickMiddleWishlist(validation_data_toast.toast.wishlist.without_logged)
  })
  it('09 HO - Validate Department Shelf', () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('10 HO - Validate Banners', { tags: ['@smoke', '@critical'] }, () => {
    cy.validaBanners()
  })
  it('11 HO - Validate Double Banners', () => {
    cy.scrollTo(0, 600)
    cy.validaDuploBanners()
  })
  it('12 HO - Validate Newsletter', () => {
    cy.scrollTo(0, 600)
    cy.validaNewsletter(
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_input_name,
      validation_data_home.home_page.newsletter.text_input_email,
      validation_data_home.home_page.newsletter.register,
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_thanks,
      validation_data_home.home_page.newsletter.email,
      validation_data_home.home_page.newsletter.name
    )
  })
  it('13 HO - Add Product to Cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.scrollTo(0, 600)
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_mini_cart.cart.mini_cart.total,
      validation_data_mini_cart.cart.mini_cart.conclude
    )
    cy.cardProductCart(1)
  })
  it('14 HO - Validate regionalization', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.regionalizationCep(validation_data_reg.regionalization.sellers.cep_rj)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
  })
  it('14.1 HO - Validate regionalization', () => {
    const cep_formatado = validation_data_reg.regionalization.sellers.cep_benfica.replace(
      /(\d{5})(\d{3})/,
      '$1-$2'
    )
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.dropDownRegionalizatin(cep_formatado)
    cy.modalLocation(validation_data_reg.regionalization.sellers.sellerName_mooca)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
  })
  it('16 HO - Validate Footer', () => {
    cy.scrollTo('bottom')
    cy.footer()
  })
})
describe('Regionalizado Benfica Não Logado', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
    cy.setRegionalization(
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
  })
  it('00 HO - Validate the Acces of the Site', { tags: ['@smoke', '@critical'] }, () => {
    cy.validatePageAccessed(Cypress.config().baseUrl)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_benfica)
    cy.logoReader()
  })
  it('02 HO - validate if you Enter an Invalid Zip Code', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.modalRegion(
      validation_data_reg.regionalization.modal_regionalization.title,
      validation_data_reg.regionalization.modal_regionalization.subTitle,
      validation_data_reg.regionalization.modal_regionalization.success_message,
      validation_data_reg.regionalization.modal_regionalization.cep_input_store,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location,
      validation_data_reg.regionalization.sellers.cep_rj
    )
    cy.regionalization(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.toastRegionalization(validation_data_reg.regionalization.toast_regionalization.without_delivery)
  })
  it('03 HO - Insert Zip Code Without Action', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.modalRegion(
      validation_data_reg.regionalization.modal_regionalization.title,
      validation_data_reg.regionalization.modal_regionalization.subTitle,
      validation_data_reg.regionalization.modal_regionalization.success_message,
      validation_data_reg.regionalization.modal_regionalization.cep_input_store,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location,
      validation_data_reg.regionalization.modal_regionalization.geo_my_location
    )
    cy.regionalization(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.toastRegionalization(validation_data_reg.regionalization.toast_regionalization.without_delivery)
  })
  it('05 HO - Shelf Add Product to Mini Cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.scrollTo(0, 600)
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
  })
  it('06 HO - Shelf Visible Images', { tags: ['@smoke', '@critical'] }, () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('07 HO - shelf Navigation', () => {
    cy.departmentShelfNavigate()
  })
  it('08 HO - shelf Wishlist Logged in', () => {
    cy.scrollTo(0, 600)
    cy.componetShelf()
    cy.clickMiddleWishlist(validation_data_toast.toast.wishlist.without_logged)
  })
  it('09 HO - Validate Department Shelf', () => {
    cy.departmentShelf(validation_data_home.home_page.department_shelf.title)
  })
  it('10 HO - Validate Banners', { tags: ['@smoke', '@critical'] }, () => {
    cy.validaBanners()
  })
  it('11 HO - Validate Double Banners', () => {
    cy.scrollTo(0, 600)
    cy.validaDuploBanners()
  })
  it('12 HO - Validate Newsletter', () => {
    cy.scrollTo(0, 600)
    cy.validaNewsletter(
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_input_name,
      validation_data_home.home_page.newsletter.text_input_email,
      validation_data_home.home_page.newsletter.register,
      validation_data_home.home_page.newsletter.text_description,
      validation_data_home.home_page.newsletter.text_thanks,
      validation_data_home.home_page.newsletter.email,
      validation_data_home.home_page.newsletter.name
    )
  })
  it('13 HO - Add Product to Cart', { tags: ['@smoke', '@critical'] }, () => {
    cy.scrollTo(0, 600)
    cy.componetShelf()
    cy.clickMiddleProduct()
    cy.miniCart(validation_data_mini_cart.cart.mini_cart.title, 1)
    cy.miniCartAddCart(
      validation_data_mini_cart.cart.mini_cart.total,
      validation_data_mini_cart.cart.mini_cart.conclude
    )
    cy.cardProductCart(1)
  })
  it('14 HO - Validate regionalization', () => {
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.regionalizationCep(validation_data_reg.regionalization.sellers.cep_rj)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_benfica)
  })
  it('14.1 HO - Validate regionalization', () => {
    const cep_formatado = validation_data_reg.regionalization.sellers.cep_benfica.replace(
      /(\d{5})(\d{3})/,
      '$1-$2'
    )
    cy.changeRegion(validation_data_reg.regionalization.modify)
    cy.dropDownRegionalizatin(cep_formatado)
    cy.modalLocation(validation_data_reg.regionalization.sellers.sellerName_benfica)
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_benfica)
  })
  it('16 HO - Validate Footer', () => {
    cy.scrollTo('bottom')
    cy.footer()
  })
})
