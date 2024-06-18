class MY_ACCOUNT_PAGE {
  constructor() {
    this.MENU = '.vtex-my-account-1-x-menu'
    this.LINK_PERSON_DATA = 'a.vtex-account_menu-link[href="#/profile"]'
    this.LINK_ADRESS = ':nth-child(2) > .vtex-account_menu-link'
    this.LINK_MY_ORDER = ':nth-child(9) > .vtex-account_menu-link'
    this.LINK_MY_CARDS = ':nth-child(4) > .vtex-account_menu-link'
    this.LINK_MY_CREDIT = ':nth-child(6) > .vtex-account_menu-link'
    this.LINK_AUTH = ':nth-child(8) > .vtex-account_menu-link'
    this.LINK_MY_WORK = ':nth-child(5) > .vtex-account_menu-link'
    this.MODAL_MY_WORK = '.lojaobramax-crediobra-0-x-crediObraWrapper'
    this.MODAL_VALUE_WORK = '.lojaobramax-crediobra-0-x-currencyContainer'
    this.TITLE_PERSON_DATA = '.db-m > .vtex-pageHeader__container > .c-on-base'
    this.MODAL_PERSON_DATA = '.vtex-my-account-1-x-profileBoxContainer'
    this.MODAL_ORDER = '.vtex-account__page'
    this.MODAL_ADRESS_TITLE = '.db-m > .vtex-pageHeader__container > .c-on-base > .vtex-pageHeader__title'
    this.MODAL_ADRESS = ':nth-child(4) > .b--muted-4'
    this.MODAL_ADD_ADRESS =
      '.db-m > .vtex-pageHeader__container > .c-on-base > .vtex-pageHeader__children > .newAddressButton > .vtex-button'
    this.LABEL_NAME = '.vtex-my-account-1-x-firstNameSubContainer label'
    this.LABEL_LAST_NAME = '.vtex-my-account-1-x-lastNameSubContainer label'
    this.TEXT_NAME = '.vtex-my-account-1-x-firstNameSubContainer .vtex-my-account-1-x-dataEntryChildren'
    this.TEXT_LAST_NAME = '.vtex-my-account-1-x-lastNameSubContainer .vtex-my-account-1-x-dataEntryChildren'
    this.TEXT_EMAIL = '.vtex-my-account-1-x-emailContainer .vtex-my-account-1-x-dataEntryChildren'
    this.LABEL_EMAIL = '.vtex-my-account-1-x-emailContainer label'
    this.LABEL_CPF = '.vtex-my-account-1-x-genderContainer label'
    this.LABEL_GENDER = '.vtex-my-account-1-x-genderContainer label'
    this.NUMBER_CPF = '.vtex-my-account-1-x-genderContainer > .flex-auto > .light'
    this.TEXT_GENDER = 'div.vtex-my-account-1-x-genderSubContainer div.vtex-my-account-1-x-dataEntryChildren'
    this.TEXT_BIRTH_DATE =
      '.vtex-my-account-1-x-dateOfBirthSubContainer .vtex-my-account-1-x-dataEntryChildren'
    this.LABEL_BIRTH_DATE = '.vtex-my-account-1-x-dateOfBirthSubContainer label'
    this.LABEL_PHONE_NUMBER = '.vtex-my-account-1-x-phoneNumberSubContainer label'
    this.PHONE_NUMBER = '.vtex-my-account-1-x-phoneNumberSubContainer .vtex-my-account-1-x-dataEntryChildren'
    this.BTN_EDIT = '.justify-end > .vtex-button > .vtex-button__label'
    this.BTN_EXIT = '.vtex-my-account-1-x-menuLink'
    this.MODAL_EXIT = '.styles_modal__gNwvD > .ph6'
    this.BTN_MODAL_EXIT = '.bg-action-primary > .vtex-button__label'
  }
}

module.exports = MY_ACCOUNT_PAGE
