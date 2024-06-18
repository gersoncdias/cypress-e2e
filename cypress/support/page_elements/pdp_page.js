class PDP_PAGE {
  constructor() {
    this.BREADCRUMBS = '[data-testid="breadcrumb"]'
    this.PRODUCT_IMAGE = '.swiper-slide-active > .vtex-store-components-3-x-productImage > .relative'
    this.MODAL_IMAGE =
      '.vtex-flex-layout-0-x-flexRow--pdp-product-info > .vtex-store-components-3-x-container'
    this.TEXT_TITLE = '.vtex-store-components-3-x-productNameContainer'
    this.BTN_INCREASE = 'button.vtex-numeric-stepper__plus-button'
    this.BTN_DECREASE = '.vtex-numeric-stepper__minus-button'
    this.BTN_ADD_ITEM = '.vtex-flex-layout-0-x-flexColChild--add-to-cart-button button'
    this.QUANTITY_SELECTOR = '.vtex-numeric-stepper__input'
    this.BTN_MORE_INFO = '.vtex-rich-text-0-x-paragraph--more-information-button-text'
    this.MODAL_MORE_INFO = '.vtex-rich-text-0-x-headingLevel3--more-information-text'
    this.BTN_CLOSE = '.vtex-modal-layout-0-x-closeButton'
  }
}

module.exports = PDP_PAGE
