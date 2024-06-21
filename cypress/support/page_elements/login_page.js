class LOGIN_PAGE {
  constructor() {
    this.BTN_ENTER_QTA = '#chooseprovider_signinbtn'
    this.BTN_EMAIL_QTA = '[data-testid="request-email"] > .vtex-button'
    this.MODAL_LOGIN_OPTIONS = '.lojaobramax-login-custom-0-x-loginOptionsContainer'
    this.BTN_LOGIN = '.lojaobramax-login-custom-0-x-label, .lojaobramax-login-custom-0-x-profile'
    this.BTN_ENTER_PERSON = '.lojaobramax-telemarketing-qta-0-x-button__login'
    this.BTN_MODAL_LOGIN = '.lojaobramax-login-custom-0-x-button .vtex-button'
    this.MODAL_LOGIN = '.lojaobramax-login-custom-0-x-content'
    this.BTN_EXIT_PERSON = '.lojaobramax-telemarketing-qta-0-x-logoutInfoContainer'
    this.BTN_MODAL_LOGIN_CODE = ':nth-child(1) > .vtex-login-2-x-button > .vtex-button > .vtex-button__label'
    this.BTN_ENTER = '.lojaobramax-login-custom-0-x-sendButton '
    this.BTN_LOGOUT = '.lojaobramax-login-custom-0-x-sendButton '
    this.INPUT_PASSWORD_QTA = 'input[name=password]'
    this.INPUT_EMAIL_QTA = '#email'
    this.INPUT_CODE_PERSON =
      '.lojaobramax-telemarketing-qta-0-x-emailInput > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input'
    this.INPUT_CODE =
      '.vtex-login-2-x-inputContainer > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input'
    this.INPUT_EMAIL = 'input[placeholder="E-mail, CPF ou CNPJ"]'
    this.INPUT_PASSWORD = '.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input'
    this.INPUT_PASSWORD_ATEND = '.vtex-styleguide-9-x-input'
    this.MODAL_INFO_PERSON = '.lojaobramax-telemarketing-qta-0-x-logoutHeader'
    this.MODAL_REGION = '.lojaobramax-region-0-x-cepPopOver__modalCloseButton > .vtex-button'
    this.MODAL_LOGOUT_PERSONOLOGIN = '.lojaobramax-telemarketing-qta-0-x-logoutButton'
    this.MODAL_CODE = '.vtex-login-2-x-content'
    this.MODAL_PERSON =
      '.lojaobramax-telemarketing-qta-0-x-loginButton.flex.items-center.justify-center.c-on-base--inverted'
    this.MODAL_QTA = '.pt8-ns'
    this.TEXT_LOGGEDIN_USER = '.lojaobramax-login-custom-0-x-container'
    this.TEXT_WITHOUT_LOGGEDI = ':nth-child(3) > .vtex-flex-layout-0-x-flexCol > :nth-child(1)'
    this.TEXT_USER_LOG_QTA = '.lojaobramax-telemarketing-qta-0-x-attendantContainer'
    this.TEXT_LOGGER_USER_PERSON = '.lojaobramax-telemarketing-qta-0-x-logout'
    this.USER_QTA = '.lojaobramax-telemarketing-qta-0-x-attendantEmail'
    this.POPUP_REGION = '.lojaobramax-telemarketing-qta-0-x-popup__overlay'
    this.MODAL_LOGIN_MOBILE = '.lojaobramax-login-custom-0-x-buttonLink > .vtex-button > .vtex-button__label'
    this.MODAL_INFO_MOBILE = '.vtex-my-account-1-x-userInfo'
    this.MODAL_MENU_ACOUNT_MOBILE = '.vtex-my-account-1-x-menu'
    this.MODAL_CONFIRMATIN_MOBILE = '.styles_modal__gNwvD > .ph6'
    this.BTN_CONFIRMATION_EXIT_MOBILE = '.bg-action-primary'
    this.INPUT_PASSWORD_MOBILE = 'input.vtex-styleguide-9-x-input[type="password"]'
    this.INPUT_EMAIL_MOBILE =
      'form > :nth-child(1) > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input'
    this.BTN_EXIT_LOGIN_MOBILE = 'div.vtex-my-account-1-x-menuLink.pointer'
    this.BTN_AVATAR_MOBILE =
      'div.vtex-flex-layout-0-x-flexColChild.vtex-flex-layout-0-x-flexColChild--mobile-header-buttons-wrapper.pb0 > div.vtex-login-2-x-container > div.relative > div.vtex-login-2-x-buttonLink > button.vtex-button'
  }
}

module.exports = LOGIN_PAGE
