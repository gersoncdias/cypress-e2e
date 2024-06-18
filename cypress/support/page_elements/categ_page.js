class CATEG_PAGE {
  constructor() {
    this.BTN_CHECKOUT = '#cart-to-orderform'
    this.BTN_MINI_CART = '#proceed-to-checkout > .vtex-button__label'
    this.BTN_ADD_CHECKOUT =
      ':nth-child(4) > .vtex-flex-layout-0-x-flexCol > :nth-child(3) > .vtex-miniCart-2-x-minicartWrapperContainer > .vtex-miniCart-2-x-minicartContainer > .pa4 > .vtex-button'
    this.BTN_CATEGORIES =
      '.vtex-slider-layout-0-x-slide--firstVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-info-card-list-0-x-department-item > [data-testid="container"]'
    this.BTN_ADD_CART = '.vtex-flex-layout-0-x-flexColChild > .vtex-button'
    this.BTN_PRODUCT_GALERY = '.vtex-product-summary-2-x-container'
    this.BTN_GALERY_ITENS = '.vtex-search-result-3-x-galleryItem'
    this.TXT_CATEGORIES = '.vtex-search-result-3-x-galleryTitle--layout'
    this.IMG_PRODUCT_CART = '.vtex-product-list-0-x-productImageAnchor'
    this.IMG_CART = '.vtex-flex-layout-0-x-flexRow--miniCart-product-container img'
  }
}

module.exports = CATEG_PAGE
