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
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('01 HE - Validate slider', () => {
    cy.sliderTopBar()
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().baseUrl
    )
  })
  it('04 HE - Validate burger menu for all departments', () => {
    cy.burgerMenuMobile()
    cy.allDepartmentsMobile(validation_data_header.header.header_mobile.departments)
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartIcon()
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopo()
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
})
describe('Regionalizado Benfica Logado', () => {
  beforeEach(() => {
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
  })
  it('00 HE - Validate regionalization sallers', () => {
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('01 HE - Validate slider', () => {
    cy.sliderTopBar()
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().baseUrl
    )
  })
  it('04 HE - Validate burger menu for all departments', () => {
    cy.burgerMenuMobile()
    cy.allDepartmentsMobile(validation_data_header.header.header_mobile.departments)
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartIcon()
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopo()
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
})
describe('Regionalizado Mooca Logado', () => {
  beforeEach(() => {
    cy.loggedQecom(
      Cypress.config().baseUrl,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
  })
  it('00 HE - Validate regionalization sallers', () => {
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('01 HE - Validate slider', () => {
    cy.sliderTopBar()
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().baseUrl
    )
  })
  it('04 HE - Validate burger menu for all departments', () => {
    cy.burgerMenuMobile()
    cy.allDepartmentsMobile(validation_data_header.header.header_mobile.departments)
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartIcon()
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopo()
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
})
describe('Não Regionalizado Não Logado', () => {
  beforeEach(() => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
  })
  it('00 HE - Validate regionalization sallers', () => {
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('01 HE - Validate slider', () => {
    cy.sliderTopBar()
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().baseUrl
    )
  })
  it('04 HE - Validate burger menu for all departments', () => {
    cy.burgerMenuMobile()
    cy.allDepartmentsMobile(validation_data_header.header.header_mobile.departments)
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartIcon()
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopo()
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
})
describe('Regionalizado Mooca Não Logado', () => {
  beforeEach(() => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.mooca,
      validation_data_reg.regionalization.sellers.sellerName_mooca
    )
  })
  it('00 HE - Validate regionalization sallers', () => {
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('01 HE - Validate slider', () => {
    cy.sliderTopBar()
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().baseUrl
    )
  })
  it('04 HE - Validate burger menu for all departments', () => {
    cy.burgerMenuMobile()
    cy.allDepartmentsMobile(validation_data_header.header.header_mobile.departments)
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartIcon()
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopo()
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_mooca,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
})
describe('Regionalizado Benfica Não Logado', () => {
  beforeEach(() => {
    cy.noLoggedQecom(
      Cypress.config().baseUrl,
      validation_data_login.interface.without_logged,
      validation_data_reg.regionalization.sellers.benfica,
      validation_data_reg.regionalization.sellers.sellerName_benfica
    )
  })
  it('00 HE - Validate regionalization sallers', () => {
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('01 HE - Validate slider', () => {
    cy.sliderTopBar()
  })
  it('03 HE - Validate redirecti Logo', () => {
    cy.redirectiLogo(
      Cypress.config().baseUrl + validation_data_my_account.my_account.url.departaments.ferragens,
      Cypress.config().baseUrl
    )
  })
  it('04 HE - Validate burger menu for all departments', () => {
    cy.burgerMenuMobile()
    cy.allDepartmentsMobile(validation_data_header.header.header_mobile.departments)
  })
  it('06 HE - Validate Logo Mini Cart', () => {
    cy.miniCartIcon()
  })
  it('12 HE - Validate reader top', () => {
    cy.readerTopo()
    cy.regionTopBar(
      validation_data_reg.regionalization.sellers.offer,
      validation_data_reg.regionalization.sellers.sellerName_benfica,
      validation_data_reg.regionalization.sellers.modify
    )
  })
  it('13 HE - Validate Logo', () => {
    cy.logoReader()
  })
})
