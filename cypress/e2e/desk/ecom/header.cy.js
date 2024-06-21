const env = require('../../../cypress.env.json')
const validation_data_login = require('../../../fixtures/login.json')
const validation_data_header = require('../../../fixtures/header.json')
const validation_data_reg = require('../../../fixtures/regionalization.json')
const validation_data_my_account = require('../../../fixtures/my_account.json')
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
  it('00 HE - Validate regionalization sallers', () => {
    cy.modalUserLoggedi(validation_data_login.interface.greeting + env.user_qecom.user_name)
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('00.1 HE - Validate slider', () => {
    cy.sliderTopBar()
  })
  it('02 HE - Validate Budget', () => {
    cy.budget(validation_data_header.header.budget.txt_budget, validation_data_header.header.budget.txt_click)
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().baseUrl
    )
  })
  it('04 HE - Validate burger menu for all departments', () => {
    cy.allDepartments()
  })
  it('05 HE - Validate My orders', () => {
    cy.myOrders(validation_data_header.header.text_my_orders)
    cy.modalOrder(validation_data_my_account.my_account.menu.without_order)
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartLogo()
  })
  it('08 HE - Validate Professional Academy', () => {
    cy.myAcademy(Cypress.config().url_academy, Cypress.config().baseUrl)
  })
  it('09 HE - Validate blog', () => {
    cy.linkBlog(Cypress.config().url_blog, Cypress.config().baseUrl)
  })
  it('10 HE - Validate Max for Less', () => {
    cy.maxForLess(
      Cypress.config().baseUrl + validation_data_header.header.max_for_less.url,
      validation_data_header.header.max_for_less.txt_search_result
    )
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopo()
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
    cy.budget(validation_data_header.header.budget.txt_budget, validation_data_header.header.budget.txt_click)
  })
  it('12.1 HE - Validate reader fixed', () => {
    cy.readerFixed()
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
  it('13.1 HE - Validate Mini Logo', () => {
    cy.miniLogoReader()
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
  it('00.1 HE - Validate slider', () => {
    cy.modalUserLoggedi(validation_data_login.interface.greeting + env.user_qecom.user_name)
    cy.sliderTopBar()
  })
  it('02 HE - Validate Budget', () => {
    cy.budget(validation_data_header.header.budget.txt_budget, validation_data_header.header.budget.txt_click)
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().baseUrl
    )
  })
  it('04 HE - Validate burger menu for all departments', () => {
    cy.allDepartments()
  })
  it('05 HE - Validate My orders', () => {
    cy.myOrders(validation_data_header.header.text_my_orders, validation_data_header.header.link_my_orders)
    cy.modalOrder(validation_data_my_account.my_account.menu.without_order)
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartLogo()
  })
  it('08 HE - Validate Professional Academy', () => {
    cy.myAcademy(Cypress.config().url_academy, Cypress.config().baseUrl)
  })
  it('09 HE - Validate blog', () => {
    cy.linkBlog(Cypress.config().url_blog, Cypress.config().baseUrl)
  })
  it('10 HE - Validate Max for Less', () => {
    cy.maxForLess(
      Cypress.config().baseUrl + validation_data_header.header.max_for_less.url,
      validation_data_header.header.max_for_less.txt_search_result
    )
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopo()
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
      validation_data_reg.regionalization.sellers.modify
    )
    cy.budget(validation_data_header.header.budget.txt_budget, validation_data_header.header.budget.txt_click)
  })
  it('12.1 HE - Validate reader fixed', () => {
    cy.readerFixed()
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
  it('13.1 HE - Validate Mini Logo', () => {
    cy.miniLogoReader()
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
  it('00.1 HE - Validate slider', () => {
    cy.modalUserLoggedi(validation_data_login.interface.greeting + env.user_qecom.user_name)
    cy.sliderTopBar()
  })
  it('02 HE - Validate Budget', () => {
    cy.budget(validation_data_header.header.budget.txt_budget, validation_data_header.header.budget.txt_click)
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().baseUrl
    )
  })
  it('04 HE - Validate burger menu for all departments', () => {
    cy.allDepartments()
  })
  it('05 HE - Validate My orders', () => {
    cy.myOrders(validation_data_header.header.text_my_orders, validation_data_header.header.link_my_orders)
    cy.modalOrder(validation_data_my_account.my_account.menu.without_order)
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartLogo()
  })
  it('08 HE - Validate Professional Academy', () => {
    cy.myAcademy(Cypress.config().url_academy, Cypress.config().baseUrl)
  })
  it('09 HE - Validate blog', () => {
    cy.linkBlog(Cypress.config().url_blog, Cypress.config().baseUrl)
  })
  it('10 HE - Validate Max for Less', () => {
    cy.maxForLess(
      Cypress.config().baseUrl + validation_data_header.header.max_for_less.url,
      validation_data_header.header.max_for_less.txt_search_result
    )
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopo()
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
    cy.budget(validation_data_header.header.budget.txt_budget, validation_data_header.header.budget.txt_click)
  })
  it('12.1 HE - Validate reader fixed', () => {
    cy.readerFixed()
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
  it('13.1 HE - Validate Mini Logo', () => {
    cy.miniLogoReader()
  })
})
describe('Não Regionalizado Não Logado', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  })
  it('00 HE - Validate regionalization sallers', () => {
    cy.modalWithoutUserLoggedi(validation_data_login.interface.without_logged)
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('00.1 HE - Validate slider', () => {
    cy.sliderTopBar()
  })
  it('02 HE - Validate Budget', () => {
    cy.budget(validation_data_header.header.budget.txt_budget, validation_data_header.header.budget.txt_click)
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().baseUrl
    )
  })
  it('04 HE - Validate burger menu for all departments', () => {
    cy.allDepartments()
  })
  it('05 HE - Validate My orders', () => {
    cy.myOrdersWithoutLogin(validation_data_header.header.text_my_orders)
    cy.modalLoginWithoutLogin(validation_data_login.interface.select_option_login)
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartLogo()
  })
  it('08 HE - Validate Professional Academy', () => {
    cy.myAcademy(Cypress.config().url_academy, Cypress.config().baseUrl)
  })
  it('09 HE - Validate blog', () => {
    cy.linkBlog(Cypress.config().url_blog, Cypress.config().baseUrl)
  })
  it('10 HE - Validate Max for Less', () => {
    cy.maxForLess(
      Cypress.config().baseUrl + validation_data_header.header.max_for_less.url,
      validation_data_header.header.max_for_less.txt_search_result
    )
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopo()
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
    cy.budget(validation_data_header.header.budget.txt_budget, validation_data_header.header.budget.txt_click)
  })
  it('12.1 HE - Validate reader fixed', () => {
    cy.readerFixed()
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
  it('13.1 HE - Validate Mini Logo', () => {
    cy.miniLogoReader()
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
  it('00 HE - Validate regionalization sallers', () => {
    cy.modalWithoutUserLoggedi(validation_data_login.interface.without_logged)
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('00.1 HE - Validate slider', () => {
    cy.sliderTopBar()
  })
  it('02 HE - Validate Budget', () => {
    cy.budget(validation_data_header.header.budget.txt_budget, validation_data_header.header.budget.txt_click)
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().baseUrl
    )
  })
  it('04 HE - Validate burger menu for all departments', () => {
    cy.allDepartments()
  })
  it('05 HE - Validate My orders', () => {
    cy.myOrdersWithoutLogin(
      validation_data_header.header.text_my_orders,
      validation_data_header.header.link_my_orders
    )
    cy.modalLoginWithoutLogin(validation_data_login.interface.select_option_login)
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartLogo()
  })
  it('08 HE - Validate Professional Academy', () => {
    cy.myAcademy(Cypress.config().url_academy, Cypress.config().baseUrl)
  })
  it('09 HE - Validate blog', () => {
    cy.linkBlog(Cypress.config().url_blog, Cypress.config().baseUrl)
  })
  it('10 HE - Validate Max for Less', () => {
    cy.maxForLess(
      Cypress.config().baseUrl + validation_data_header.header.max_for_less.url,
      validation_data_header.header.max_for_less.txt_search_result
    )
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopo()
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
    cy.budget(validation_data_header.header.budget.txt_budget, validation_data_header.header.budget.txt_click)
  })
  it('12.1 HE - Validate reader fixed', () => {
    cy.readerFixed()
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
  it('13.1 HE - Validate Mini Logo', () => {
    cy.miniLogoReader()
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
  it('00 HE - Validate regionalization sallers', () => {
    cy.modalWithoutUserLoggedi(validation_data_login.interface.without_logged)
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('00.1 HE - Validate slider', () => {
    cy.sliderTopBar()
  })
  it('02 HE - Validate Budget', () => {
    cy.budget(validation_data_header.header.budget.txt_budget, validation_data_header.header.budget.txt_click)
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().baseUrl
    )
  })
  it('04 HE - Validate burger menu for all departments', () => {
    cy.allDepartments()
  })
  it('05 HE - Validate My orders', () => {
    cy.myOrdersWithoutLogin(
      validation_data_header.header.text_my_orders,
      validation_data_header.header.link_my_orders
    )
    cy.modalLoginWithoutLogin(validation_data_login.interface.select_option_login)
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartLogo()
  })
  it('08 HE - Validate Professional Academy', () => {
    cy.myAcademy(Cypress.config().url_academy, Cypress.config().baseUrl)
  })
  it('09 HE - Validate blog', () => {
    cy.linkBlog(Cypress.config().url_blog, Cypress.config().baseUrl)
  })
  it('10 HE - Validate Max for Less', () => {
    cy.maxForLess(
      Cypress.config().baseUrl + validation_data_header.header.max_for_less.url,
      validation_data_header.header.max_for_less.txt_search_result
    )
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopo()
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
      validation_data_reg.regionalization.sellers.modify
    )
    cy.budget(validation_data_header.header.budget.txt_budget, validation_data_header.header.budget.txt_click)
  })
  it('12.1 HE - Validate reader fixed', () => {
    cy.readerFixed()
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
  it('13.1 HE - Validate Mini Logo', () => {
    cy.miniLogoReader()
  })
})
