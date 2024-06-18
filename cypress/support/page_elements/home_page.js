class HOME_PAGE {
  constructor() {
    this.NEWSLETTER = {
      CONTAINER_MOBILE: '.vtex-flex-layout-0-x-flexRow--newsletter',
      CONTAINER: '.vtex-flex-layout-0-x-flexRow--newsletter',
      IMG_ELEMENT: '.mt0 > :nth-child(1) > .vtex-store-components-3-x-imageElement',
      TEXT_DESCRIPTION:
        '.vtex-rich-text-0-x-container.vtex-rich-text-0-x-container--newsletter-description .vtex-rich-text-0-x-paragraph.vtex-rich-text-0-x-paragraph--newsletter-description',
      INPUT_NAME: '.vtex-input-prefix__group input[type="text"]#newsletter-input-name',
      INPUT_EMAIL: '.vtex-input-prefix__group input[type="email"]#newsletter-input-email',
      BTN_SUBMIT: '.vtex-store-newsletter-1-x-formSubmitContainer button[type="submit"]',
      TEXT_SUCCESS: '.vtex-store-newsletter-1-x-defaultSuccessMessage',
    }
    this.BTN_ADD_ITEM = '.vtex-add-to-cart-button-0-x-buttonText'
    this.BTN_ADD_WISHLIST = '.vtex-wish-list-1-x-wishlistIconContainer button'
    this.MODAL_ITEM_SHELF = '.vtex-product-summary-2-x-container'
    this.MODAL_ITEM_WISHLIST =
      '.vtex-wish-list-1-x-wishlistIcon vtex-wish-list-1-x-outline vtex-wish-list-1-x-iconSize'
    this.MODAL_SHELF = '.vtex-flex-layout-0-x-flexRow--shelves-default'
    this.TEXT_CATEGORY =
      '.mt0 > :nth-child(1) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy'
    this.HEADER = '.vtex-flex-layout-0-x-flexRow--main-header'
    this.IMG_LINK = '.vtex-flex-layout-0-x-flexRow--main-header'
    this.TEXT_SHELF = '.vtex-flex-layout-0-x-flexRow--shelves-default'
    this.TEXT_SHELF_MOBILE =
      '.[data-hydration-id="store.home/flex-layout.row#shelf-home-2"] > .vtex-flex-layout-0-x-flexRow > .vtex-store-components-3-x-container > .mt0 > :nth-child(1)'
    this.MODAL_SHELF_DEPART =
      '.flex-grow-1.w-100 > :nth-child(2) > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(2)'
    this.DIV_BANNER =
      '[data-hydration-id="store.home/flex-layout.row#banners-mosaic"] > .vtex-flex-layout-0-x-flexRow'
    this.BANNER_SH = '.vtex-list-context-0-x-item.vtex-list-context-0-x-item--banners-mosaic'
    this.TEXT_TITLE_SHELF =
      '[data-hydration-id="store.home/flex-layout.row#shelf-home-2"] > .vtex-flex-layout-0-x-flexRow > .vtex-store-components-3-x-container > .mt0 > :nth-child(1)'
    this.IMG_BANNER_HOME = '.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--full-banner-container'
    this.BTN_SLIDER_LEFT_SHELF = '.vtex-slider-layout-0-x-sliderLeftArrow'
    this.BTN_SLIDER_RIGHT_SHELF = '.vtex-slider-layout-0-x-sliderRightArrow'
    this.BTN_SLIDER_RIGHT_HOME =
      'button.vtex-slider-layout-0-x-sliderRightArrow.vtex-slider-layout-0-x-sliderRightArrow--full-banner'
    this.BTN_SLIDER_LEFT_HOME =
      'button.vtex-slider-layout-0-x-sliderLeftArrow.vtex-slider-layout-0-x-sliderLeftArrow--full-banner'
    this.BTN_PAGINATION_DOTS_HOME = '.vtex-slider-layout-0-x-paginationDotsContainer'
    this.TEXT_TOAST = '.vtex-toast'
    this.IMG_MODAL_SHELF_DEPRT =
      '.vtex-slider-layout-0-x-infoCardImageContainer > a > img[data-testid="half-image"]'
  }
}

module.exports = HOME_PAGE
