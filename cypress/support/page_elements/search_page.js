class SEARCH_PAGE {
  constructor() {
    this.LIST_SEARCH = 'div[class$="main-header"] section > section[class$="tileList"] li'
    this.MODAL_LIST =
      '.vtex-store-components-3-x-searchBarInnerContainer--qecom .vtex-search-2-x-itemListTitle'
    this.LIST_SEARCH_QTA = '.vtex-search-2-x-tileListItem'
    this.INPUT_SEARCH = '#downshift-0-input'
    this.INPUT_SEARCH_QTA = '#downshift-2-input'
    this.DIV_AUTO_COMPLETE =
      ':nth-child(2) > .mw7 > .relative-m > .vtex-store-components-3-x-autoCompleteOuterContainer'
    this.MODAL_AUTO_COMPLETE = '.vtex-search-2-x-itemListTitle'
  }
}
module.exports = SEARCH_PAGE
