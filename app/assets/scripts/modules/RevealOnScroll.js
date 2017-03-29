import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(cssClass, offset) {
    this.itemsToReveal = cssClass;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially(){
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoints() {
    var that = this; // this is pointing to our constructor
    this.itemsToReveal.each(function() {
      var currentItem = this;

      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass('reveal-item--is-visible');
        },
        offset: that.offsetPercentage // this.offsetPercentage is pointing to the new Waypoint
      });
    });
  }

}

export default RevealOnScroll;
