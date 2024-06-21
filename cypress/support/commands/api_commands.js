/* eslint-disable cypress/no-unnecessary-waiting */
Cypress.Commands.add('startLogin', ({ user_name, account_name, scope }) => {
  return cy
    .request({
      method: 'POST',
      url: `${Cypress.config('baseUrl')}api/vtexid/pub/authentication/startlogin`,
      headers: {},
      form: true,
      body: {
        account_name: account_name,
        scope: scope,
        returnUrl: Cypress.config('baseUrl'),
        callbackUrl: `${Cypress.config('baseUrl')}api/oauth/finish?popup=false`,
        user: user_name,
        fingerprint: '',
      },
    })
    .then((response) => {
      const vssCookie = response.headers['set-cookie']
        .find((cookie) => cookie.startsWith('_vss='))
        .split(';')[0]

      return vssCookie
    })
})
Cypress.Commands.add('validateCredentials', ({ user_name, password, vssCookie }) => {
  return cy
    .request({
      method: 'POST',
      url: `${Cypress.config('baseUrl')}api/vtexid/pub/authentication/classic/validate`,
      headers: {
        Cookie: `cookieName=${vssCookie}`,
      },
      form: true,
      body: {
        login: user_name,
        password: password,
      },
    })
    .then((validateResponse) => {
      const authCookie = validateResponse.body.authCookie
      const authToken = authCookie.Value

      return authToken
    })
})
Cypress.Commands.add('generateAndValidateToken', (user_name, password, account_name, scope) => {
  return cy.startLogin({ user_name, account_name, scope }).then((vssCookie) => {
    return cy.validateCredentials({ user_name, password, vssCookie })
  })
})
Cypress.Commands.add('removeAllItems', (data_cookie) => {
  cy.wait(7000)
  cy.getCookie(data_cookie).then((cookie) => {
    if (cookie && cookie.value) {
      const cookieValue = cookie.value.replace('__ofid=', '')
      const apiUrl = `${Cypress.config('baseUrl')}/api/checkout/pub/orderForm/${cookieValue}/items/removeAll`
      cy.request({
        method: 'POST',
        url: apiUrl,
        body: {},
      }).then((response) => {
        expect(response.status).to.equal(200)
      })
    }
  })
})
Cypress.Commands.add('addItemToOrderForm', (orderFormId, orderItems) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.config('baseUrl')}/api/checkout/pub/orderForm/${orderFormId}/items`,
    body: { orderItems },
    headers: {},
  }).then((response) => {
    expect(response.status).to.eq(200)
    return cy.wrap(response.body)
  })
})
Cypress.Commands.add('setOrderFormCookie', (orderForm) => {
  const orderFormId = orderForm.orderFormId
  const cookieValue = `__ofid=${orderFormId}`
  cy.setCookie('orderForm', cookieValue)
})
Cypress.Commands.add('generateOrderForm', (requestBody = {}) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.config('baseUrl')}/api/checkout/pub/orderForm?forceNewCart=true&sc=1`,
    body: requestBody,
    headers: {},
  }).then((response) => {
    expect(response.status).to.eq(200)
    Cypress.env('orderForm', response.body)
    return cy.wrap(response.body)
  })
})
Cypress.Commands.add('addShippingAddress', (orderFormId, address) => {
  const apiUrl = `${Cypress.config(
    'baseUrl'
  )}/api/checkout/pub/orderForm/${orderFormId}/attachments/shippingData`
  const payload = {
    selectedAddresses: [address],
    clearAddressIfPostalCodeNotFound: true,
  }

  cy.request({
    method: 'POST',
    url: apiUrl,
    body: payload,
  }).then((response) => {
    expect(response.status).to.eq(200)
    return cy.wrap(response.body)
  })
})
Cypress.Commands.add('listProducts', () => {
  cy.request({
    method: 'GET',
    url: `${Cypress.config('baseUrl')}api/catalog_system/pub/products/search`,
  }).then((response) => {
    expect(response.status).to.eq(206)
    expect(response.body[0].linkText).to.not.be.empty
  })
})
