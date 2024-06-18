class FOOTER_PAGE {
  constructor() {
    this.layout = {
      divFooter: '.vtex-flex-layout-0-x-flexRow--footer-menu-mobile > .vtex-store-components-3-x-container',
    }
    this.SECTION_COPYRIGHT = {
      DIV_FOOTER: '.vtex-store-footer-2-x-footerLayout',
      DIV_COPYRIGHT:
        '.vtex-flex-layout-0-x-flexRow--copyright-desktop > .vtex-store-components-3-x-container',
      MENU_INSTITUTIONAL:
        '.vtex-flex-layout-0-x-flexCol--footer-col-1 > :nth-child(1) > .vtex-menu-2-x-menuContainerNav > .vtex-menu-2-x-menuContainer',
      MENU_POLICY:
        '.vtex-flex-layout-0-x-flexCol--footer-col-1 > :nth-child(2) > .vtex-menu-2-x-menuContainerNav > .vtex-menu-2-x-menuContainer',
      MENU_TITLE:
        '.vtex-flex-layout-0-x-flexCol > :nth-child(1) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .vtex-rich-text-0-x-heading',
      MENU_MOOCA:
        ':nth-child(2) >.vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper',
      MENU_PRAIA:
        ':nth-child(2) >.vtex-flex-layout-0-x-flexCol > :nth-child(3) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper',
      MENU_BENFICA:
        ':nth-child(2) >.vtex-flex-layout-0-x-flexCol > :nth-child(4) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper',
      MENU_PIRACICABA:
        ':nth-child(2) >.vtex-flex-layout-0-x-flexCol > :nth-child(5) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper',
      MENU_TELE_VENDA:
        '.vtex-flex-layout-0-x-flexColChild--footer-col-3 > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper',
      MENU_CENTRAL_CLIENTE:
        '.vtex-flex-layout-0-x-flexColChild--footer-col-3 > .vtex-flex-layout-0-x-flexCol > :nth-child(3) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper',
      MENU_FAQ:
        '.vtex-flex-layout-0-x-flexCol--footer-col-4 > :nth-child(1) > .vtex-menu-2-x-menuContainerNav',
      MENU_CONTEUDO:
        '.vtex-flex-layout-0-x-flexCol--footer-col-4 > :nth-child(2) > .vtex-menu-2-x-menuContainerNav',
      IMG_SVG_FACEBOOK:
        ':nth-child(3) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-list-context-0-x-list > :nth-child(1)',
      IMG_SVG_YOUTUBE:
        ':nth-child(3) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-list-context-0-x-list > :nth-child(2)',
      IMG_SVG_INSTAGRAM:
        ':nth-child(3) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-list-context-0-x-list > :nth-child(3)',
      IMG_SVG_LINKEDIN:
        ':nth-child(3) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-list-context-0-x-list > :nth-child(4)',
      IMG_SVG_TWITTER:
        ':nth-child(3) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-list-context-0-x-list > :nth-child(5)',
      IMG_SVG_TIK_TOK:
        ':nth-child(3) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-list-context-0-x-list > :nth-child(6)',
      IMG_SVG_GOOGLE_RATING:
        ':nth-child(2) > .vtex-flex-layout-0-x-flexCol > .vtex-flex-layout-0-x-flexColChild > .vtex-list-context-0-x-list > .vtex-list-context-0-x-item > .dib > .vtex-list-context-0-x-imageElementLink > .vtex-list-context-0-x-imageElement',
      IMG_SVG_SELO_RECLAME_AQUI:
        ':nth-child(1) > .vtex-flex-layout-0-x-flexCol > .vtex-flex-layout-0-x-flexColChild > .vtex-list-context-0-x-list > :nth-child(2) > .dib > .vtex-list-context-0-x-imageElementLink > .vtex-list-context-0-x-imageElement',
      IMG_SVG_SELO_EBIT:
        ':nth-child(1) > .vtex-flex-layout-0-x-flexCol > .vtex-flex-layout-0-x-flexColChild > .vtex-list-context-0-x-list > :nth-child(1) > .dib > .vtex-list-context-0-x-imageElementLink > .vtex-list-context-0-x-imageElement',
      IMG_SVG_PIX: ':nth-child(1) > .dib > .vtex-list-context-0-x-imageElement',
      MG_SVG_BOLETO: ':nth-child(2) > .dib > .vtex-list-context-0-x-imageElement',
      IMG_SVG_DEPOSITO: ':nth-child(3) > .dib > .vtex-list-context-0-x-imageElement',
      IMG_SVG_VISA: ':nth-child(4) > .dib > .vtex-list-context-0-x-imageElement',
      IMG_SVG_VISA_ELETRON: ':nth-child(5) > .dib > .vtex-list-context-0-x-imageElement',
      IMG_SVG_MASTER: ':nth-child(6) > .dib > .vtex-list-context-0-x-imageElement',
      IMG_SVG_MAESTRO: ':nth-child(7) > .dib > .vtex-list-context-0-x-imageElement',
      IMG_SVG_DINERS: ':nth-child(8) > .dib > .vtex-list-context-0-x-imageElement',
      IMG_SVG_AMERICAN_EXPRESS: ':nth-child(9) > .dib > .vtex-list-context-0-x-imageElement',
      IMG_SVG_HIPERCARD: ':nth-child(10) > .dib > .vtex-list-context-0-x-imageElement',
      IMG_SVG_ELO: ':nth-child(11) > .dib > .vtex-list-context-0-x-imageElement',
      IMG_SVG_CONSTRUCARD: ':nth-child(12) > .dib > .vtex-list-context-0-x-imageElement',
      IMG_SVG_QUALITY:
        '.vtex-flex-layout-0-x-flexRowContent--payment-methods > :nth-child(2) > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(2) > .vtex-store-components-3-x-imageElementLink > .vtex-store-components-3-x-imageElement',
      IMG_SVG_VTEX:
        '.vtex-flex-layout-0-x-flexRowContent--payment-methods > :nth-child(2) > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(2) > .vtex-store-components-3-x-imageElementLink > .vtex-store-components-3-x-imageElement',
      BTN_BACK_TO: '.vtex-store-components-3-x-backToTopButtonContainer > .vtex-button > .vtex-button__label',
    }
    this.SECTION_COPYRIGHT_MOBILE = {
      DIV_FOOTER: '.vtex-store-footer-2-x-footerLayout',
      divCopyright: '.vtex-flex-layout-0-x-flexRow--copyright-desktop > .vtex-store-components-3-x-container',
      menuInstitutional:
        '.vtex-flex-layout-0-x-flexCol--footer-col-1 > :nth-child(1) > .vtex-menu-2-x-menuContainerNav > .vtex-menu-2-x-menuContainer',
      MENU_POLICY:
        '.vtex-flex-layout-0-x-flexCol--footer-col-1 > :nth-child(2) > .vtex-menu-2-x-menuContainerNav > .vtex-menu-2-x-menuContainer',
      menuTitle:
        '.vtex-flex-layout-0-x-flexCol > :nth-child(1) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .vtex-rich-text-0-x-heading',
      menuMooca:
        ':nth-child(2) >.vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper',
      menuPraia:
        ':nth-child(2) >.vtex-flex-layout-0-x-flexCol > :nth-child(3) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper',
      menuBenfica:
        ':nth-child(2) >.vtex-flex-layout-0-x-flexCol > :nth-child(4) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper',
      menuPiracicaba:
        ':nth-child(2) >.vtex-flex-layout-0-x-flexCol > :nth-child(5) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper',
      menuTeleVenda:
        '.vtex-flex-layout-0-x-flexColChild--footer-col-3 > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper',
      menuCentralCliente:
        '.vtex-flex-layout-0-x-flexColChild--footer-col-3 > .vtex-flex-layout-0-x-flexCol > :nth-child(3) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper',
      menuFaq:
        '.vtex-flex-layout-0-x-flexCol--footer-col-4 > :nth-child(1) > .vtex-menu-2-x-menuContainerNav',
      menuConteudo:
        '.vtex-flex-layout-0-x-flexCol--footer-col-4 > :nth-child(2) > .vtex-menu-2-x-menuContainerNav',
      imgSvgFacebook:
        ':nth-child(3) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-list-context-0-x-list > :nth-child(1)',
      imgSvgYoutube:
        ':nth-child(3) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-list-context-0-x-list > :nth-child(2)',
      imgSvgInstagram:
        ':nth-child(3) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-list-context-0-x-list > :nth-child(3)',
      imgSvgLinkedIn:
        ':nth-child(3) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-list-context-0-x-list > :nth-child(4)',
      imgSvgTwitter:
        ':nth-child(3) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-list-context-0-x-list > :nth-child(5)',
      imgSvgTikTok:
        ':nth-child(3) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-list-context-0-x-list > :nth-child(6)',
      imgSvgSiteBlindado:
        ':nth-child(2) > .vtex-flex-layout-0-x-flexCol > .vtex-flex-layout-0-x-flexColChild > .vtex-list-context-0-x-list > :nth-child(2) > .dib > .vtex-list-context-0-x-imageElementLink > .vtex-list-context-0-x-imageElement',
      imgSvgGoogleRating:
        ':nth-child(2) > .vtex-flex-layout-0-x-flexCol > .vtex-flex-layout-0-x-flexColChild > .vtex-list-context-0-x-list > :nth-child(1) > .dib > .vtex-list-context-0-x-imageElementLink > .vtex-list-context-0-x-imageElement',
      imgSvgSeloReclameAqui:
        ':nth-child(1) > .vtex-flex-layout-0-x-flexCol > .vtex-flex-layout-0-x-flexColChild > .vtex-list-context-0-x-list > :nth-child(2) > .dib > .vtex-list-context-0-x-imageElementLink > .vtex-list-context-0-x-imageElement',
      imgSvgSeloEbit:
        ':nth-child(1) > .vtex-flex-layout-0-x-flexCol > .vtex-flex-layout-0-x-flexColChild > .vtex-list-context-0-x-list > :nth-child(1) > .dib > .vtex-list-context-0-x-imageElementLink > .vtex-list-context-0-x-imageElement',
      imgSvgPix: ':nth-child(1) > .dib > .vtex-list-context-0-x-imageElement',
      imgSvgBoleto: ':nth-child(2) > .dib > .vtex-list-context-0-x-imageElement',
      imgSvgDeposito: ':nth-child(3) > .dib > .vtex-list-context-0-x-imageElement',
      imgSvgVisa: ':nth-child(4) > .dib > .vtex-list-context-0-x-imageElement',
      imgSvgVisaEletron: ':nth-child(5) > .dib > .vtex-list-context-0-x-imageElement',
      imgSvgMaster: ':nth-child(6) > .dib > .vtex-list-context-0-x-imageElement',
      imgSvgMaestro: ':nth-child(7) > .dib > .vtex-list-context-0-x-imageElement',
      imgSvgDiners: ':nth-child(8) > .dib > .vtex-list-context-0-x-imageElement',
      imgSvgAmericanExpress: ':nth-child(9) > .dib > .vtex-list-context-0-x-imageElement',
      imgSvgHipercard: ':nth-child(10) > .dib > .vtex-list-context-0-x-imageElement',
      imgSvgElo: ':nth-child(11) > .dib > .vtex-list-context-0-x-imageElement',
      imgSvgConstrucard: ':nth-child(12) > .dib > .vtex-list-context-0-x-imageElement',
      imgSvgQuality:
        '.vtex-flex-layout-0-x-flexRowContent--payment-methods > :nth-child(2) > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(2) > .vtex-store-components-3-x-imageElementLink > .vtex-store-components-3-x-imageElement',
      imgSvgVtex:
        '.vtex-flex-layout-0-x-flexRowContent--payment-methods > :nth-child(2) > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(2) > .vtex-store-components-3-x-imageElementLink > .vtex-store-components-3-x-imageElement',
      btnBackTo: '.vtex-store-components-3-x-backToTopButtonContainer > .vtex-button > .vtex-button__label',
    }
  }
}

module.exports = FOOTER_PAGE
