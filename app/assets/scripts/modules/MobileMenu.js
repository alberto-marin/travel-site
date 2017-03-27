import $ from 'jquery';


class MobileMenu {
  constructor() {
    this.siteHeader = $('.site-header');
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.events();
  }
  events() {
    // anything between the parentesis of bind will be use as a this in toggleTheMenu
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    // now this instance and the toggleTheMenu have the same this value
  }
  toggleTheMenu() {
    this.menuContent.toggleClass('site-header__menu-content--is-visible')
    this.siteHeader.toggleClass('site-header--is-expanded');
    this.menuIcon.toggleClass('site-header__menu-icon--close-x')
  }
}

export default MobileMenu;
