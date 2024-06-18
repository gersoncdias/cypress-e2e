const cookies_data = require('../../../fixtures/cookies.json')
const validation_data_pdp = require('../../../fixtures/pdp.json')
const validation_data_login = require('../../../fixtures/login.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')
const validation_data_products = require('../../../fixtures/products.json')

describe('Não Regionalizado Logado', () => {
  beforeEach(() => {
    cy.loggedQecom(
      Cypress.config().baseUrl + validation_data_products.products.url.product_unit,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )

    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
  })

  it('01 PDP - Validate image', () => {
    cy.validImage()
  })
  it('02 PDP - Validate product title', () => {
    cy.validTitle(validation_data_pdp.pdp.descript.title)
  })
  it('03 PDP - Validate breadcumb', () => {
    cy.validBreadcrumb(
      validation_data_pdp.breadcrumb.primeiro_link,
      validation_data_pdp.breadcrumb.segundo_link,
      validation_data_pdp.breadcrumb.terceiro_link
    )
  })
  it.skip('04 PDP - Validate button increase product quantity', () => {
    cy.increaserQuantity()
  })
  it.skip('04.1 PDP - Validate button decrease product quantity', () => {
    cy.decreaserQuantity()
  })
  it('05 PDP - Insert zip code without shipping in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.warningMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_warning)
  })
  it('06 PDP - Insert invalid zip code in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.modal_calculate_shipping.cep_invalid)
    cy.errorMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_error)
  })
  it('07 PDP - Insert valid zip code in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.modal_calculate_shipping.cep_valid)
    cy.sucessMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_sucess)
  })
  it('08 PDP - Add product to mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.clickAddToCart(validation_data_pdp.add_product.add_mini_cart, 1)
  })
  it('18 PDP - Valid More Information', () => {
    cy.validMoreInfo(validation_data_pdp.more_info.link)
    cy.modalMoreInfo(validation_data_pdp.more_info.title)
    cy.closeMoreInfo()
  })
})
describe('Regionalizado Benfica Logado', () => {
  beforeEach(() => {
    cy.loggedQecom(
      Cypress.config().baseUrl + validation_data_products.products.url.product_unit,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_benfica)
  })
  it('01 PDP - Validate image', () => {
    cy.validImage()
  })
  it('02 PDP - Validate product title ', () => {
    cy.validTitle(validation_data_pdp.pdp.descript.title)
  })
  it('03 PDP - Validate breadcumb', () => {
    cy.validBreadcrumb(
      validation_data_pdp.breadcrumb.primeiro_link,
      validation_data_pdp.breadcrumb.segundo_link,
      validation_data_pdp.breadcrumb.terceiro_link
    )
  })
  it('04 PDP - Validate button increase product quantity', () => {
    cy.increaserQuantity()
  })
  it('04.1 PDP - Validate button decrease product quantity', () => {
    cy.decreaserQuantity()
  })
  it('05 PDP - Insert zip code without shipping in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.warningMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_warning)
  })
  it('06 PDP - Insert invalid zip code in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.modal_calculate_shipping.cep_invalid)
    cy.errorMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_error)
  })
  it('07 PDP - Insert valid zip code in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.modal_calculate_shipping.cep_valid)
    cy.sucessMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_sucess)
  })
  it('08 PDP - Add product to mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.clickAddToCart(validation_data_pdp.add_product.add_mini_cart, 1)
  })
  it('18 PDP - Valid More Information', () => {
    cy.validMoreInfo(validation_data_pdp.more_info.link)
    cy.modalMoreInfo(validation_data_pdp.more_info.title)
    cy.closeMoreInfo()
  })
})
describe('Regionalizado Mooca Logado', () => {
  beforeEach(() => {
    cy.loggedQecom(
      Cypress.config().baseUrl + validation_data_products.products.url.product_unit,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
  })
  it('01 PDP - Validate image', () => {
    cy.validImage()
  })
  it('02 PDP - Validate product title ', () => {
    cy.validTitle(validation_data_pdp.pdp.descript.title)
  })
  it('03 PDP - Validate breadcumb', () => {
    cy.validBreadcrumb(
      validation_data_pdp.breadcrumb.primeiro_link,
      validation_data_pdp.breadcrumb.segundo_link,
      validation_data_pdp.breadcrumb.terceiro_link
    )
  })
  it('04 PDP - Validate button increase product quantity', () => {
    cy.increaserQuantity()
  })
  it('04.1 PDP - Validate button decrease product quantity', () => {
    cy.decreaserQuantity()
  })
  it('05 PDP - Insert zip code without shipping in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.warningMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_warning)
  })
  it('06 PDP - Insert invalid zip code in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.modal_calculate_shipping.cep_invalid)
    cy.errorMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_error)
  })
  it('07 PDP - Insert valid zip code in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.modal_calculate_shipping.cep_valid)
    cy.sucessMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_sucess)
  })
  it('08 PDP - Add product to mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.clickAddToCart(validation_data_pdp.add_product.add_mini_cart, 1)
  })
  it('18 PDP - Valid More Information', () => {
    cy.validMoreInfo(validation_data_pdp.more_info.link)
    cy.modalMoreInfo(validation_data_pdp.more_info.title)
    cy.closeMoreInfo()
  })
})
describe('Não Regionalizado Não Logado', () => {
  beforeEach(() => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl + validation_data_products.products.url.product_unit,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
  })
  it('01 PDP - Validate image', () => {
    cy.validImage()
  })
  it('02 PDP - Validate product title ', () => {
    cy.validTitle(validation_data_pdp.pdp.descript.title)
  })
  it('03 PDP - Validate breadcumb', () => {
    cy.validBreadcrumb(
      validation_data_pdp.breadcrumb.primeiro_link,
      validation_data_pdp.breadcrumb.segundo_link,
      validation_data_pdp.breadcrumb.terceiro_link
    )
  })
  it('04 PDP - Validate button increase product quantity', () => {
    cy.increaserQuantity()
  })
  it('04.1 PDP - Validate button decrease product quantity', () => {
    cy.decreaserQuantity()
  })
  it('05 PDP - Insert zip code without shipping in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.warningMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_warning)
  })
  it('06 PDP - Insert invalid zip code in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.modal_calculate_shipping.cep_invalid)
    cy.errorMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_error)
  })
  it('07 PDP - Insert valid zip code in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.modal_calculate_shipping.cep_valid)
    cy.sucessMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_sucess)
  })
  it('08 PDP - Add product to mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.clickAddToCart(validation_data_pdp.add_product.add_mini_cart, 1)
  })
  it('18 PDP - Valid More Information', () => {
    cy.validMoreInfo(validation_data_pdp.more_info.link)
    cy.modalMoreInfo(validation_data_pdp.more_info.title)
    cy.closeMoreInfo()
  })
})
describe('Regionalizado Mooca Não Logado', () => {
  beforeEach(() => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl + validation_data_products.products.url.product_unit,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_mooca)
  })
  it('01 PDP - Validate image', () => {
    cy.validImage()
  })
  it('02 PDP - Validate product title ', () => {
    cy.validTitle(validation_data_pdp.pdp.descript.title)
  })
  it('03 PDP - Validate breadcumb', () => {
    cy.validBreadcrumb(
      validation_data_pdp.breadcrumb.primeiro_link,
      validation_data_pdp.breadcrumb.segundo_link,
      validation_data_pdp.breadcrumb.terceiro_link
    )
  })
  it('04 PDP - Validate button increase product quantity', () => {
    cy.increaserQuantity()
  })
  it('04.1 PDP - Validate button decrease product quantity', () => {
    cy.decreaserQuantity()
  })
  it('05 PDP - Insert zip code without shipping in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.warningMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_warning)
  })
  it('06 PDP - Insert invalid zip code in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.modal_calculate_shipping.cep_invalid)
    cy.errorMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_error)
  })
  it('07 PDP - Insert valid zip code in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.modal_calculate_shipping.cep_valid)
    cy.sucessMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_sucess)
  })
  it('08 PDP - Add product to mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.clickAddToCart(validation_data_pdp.add_product.add_mini_cart, 1)
  })
  it('18 PDP - Valid More Information', () => {
    cy.validMoreInfo(validation_data_pdp.more_info.link)
    cy.modalMoreInfo(validation_data_pdp.more_info.title)
    cy.closeMoreInfo()
  })
})
describe('Regionalizado Benfica Não Logado', () => {
  beforeEach(() => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl + validation_data_products.products.url.product_unit,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
    cy.confirmRegionalization(validation_data_reg.regionalization.sellers.sellerName_benfica)
  })
  it('01 PDP - Validate image', () => {
    cy.validImage()
  })
  it('02 PDP - Validate product title ', () => {
    cy.validTitle(validation_data_pdp.pdp.descript.title)
  })
  it('03 PDP - Validate breadcumb', () => {
    cy.validBreadcrumb(
      validation_data_pdp.breadcrumb.primeiro_link,
      validation_data_pdp.breadcrumb.segundo_link,
      validation_data_pdp.breadcrumb.terceiro_link
    )
  })
  it('04 PDP - Validate button increase product quantity', () => {
    cy.increaserQuantity()
  })
  it('04.1 PDP - Validate button decrease product quantity', () => {
    cy.decreaserQuantity()
  })
  it('05 PDP - Insert zip code without shipping in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.sellers.cep_without_action)
    cy.warningMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_warning)
  })
  it('06 PDP - Insert invalid zip code in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.modal_calculate_shipping.cep_invalid)
    cy.errorMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_error)
  })
  it('07 PDP - Insert valid zip code in the shipping field', () => {
    cy.calculateShipping(validation_data_reg.regionalization.modal_calculate_shipping.title)
    cy.inputAddress(validation_data_reg.regionalization.modal_calculate_shipping.cep_valid)
    cy.sucessMessage(validation_data_reg.regionalization.modal_calculate_shipping.txt_sucess)
  })
  it('08 PDP - Add product to mini cart', () => {
    cy.removeAllItems(cookies_data.checkout.order_forme)
    cy.clickAddToCart(validation_data_pdp.add_product.add_mini_cart, 1)
  })
  it('18 PDP - Valid More Information', () => {
    cy.validMoreInfo(validation_data_pdp.more_info.link)
    cy.modalMoreInfo(validation_data_pdp.more_info.title)
    cy.closeMoreInfo()
  })
})