class CART_PAGE {
  constructor() {
    this.CARD_CART = '#cartLoadedDiv > .cart'
    this.MODAL_DELIVERY = '#shipping-preview-container'
    this.BTN_DECREASE = '#item-quantity-change-decrement-6 > .icon'
    this.BTN_INCREASE = '#item-quantity-change-increment-6 > .icon'
    this.QUANTITY_SELECTOR = '#item-quantity-6'
    this.BTN_REMOVE = '#item-remove-6'
    this.TXT_CART_EMPTY = '.empty-cart-title'
    this.TXT_RECEIVE = '.srp-items strong'
    this.TXT_CEP = '#deliver-at-text .srp-address-title'
    this.TXT_DELIVERY_TIME = '.srp-shipping-current-single__sla'
    this.TXT_TITLE_WIDGET = '.rr-widget__title'
    this.CARD_WIDGET = '.rr-items'
    this.CARD_IMG_WIDGET = '.rr-item > .rr-item__link'
    this.TXT_SUBTOTAL = 'tr.Shipping .monetary'
    this.TXT_TOTAL = 'tfoot .monetary'
    this.MODAL_ITEM = '.product-item'
    this.BTN_CLOSE_MORE = '#cart-choose-more-products'
    this.BTN_WITHDRAW = '.srp-toggle__pickup'
    this.BTN_REMOVE_ALL = '#find-pickup-link'
    this.TXT_REMOVE_ITEM = '.modal-header'
    this.MODAL_TXT_REMOVE_ITEM = '#removeConfirmationModal > .modal-body'
    this.MODAL_BTN_REMOVE_ITEM = '.modal-footer > .btn'
    this.BTN_CLOSE_ORDER = '#cart-to-orderform'
    this.BTN_BACK_CAT = '#orderform-to-cart'
    this.INPUT_PRE_EMAIL = '#client-pre-email'
    this.BTN_PRE_EMAIL = '#btn-client-pre-email'
    this.ICON_LOK = '.default-modal-security .icon-lock'
    this.TXT_IDENTIFIED_HELLO = '.identified-user-hello'
    this.TXT_IDENTIFIED = '.identified-user-message'
    this.BTN_IDENTIFIED = '#btn-identified-user-button'
  }
}

module.exports = CART_PAGE
