  import $ from 'jquery';

  export default class AppScroll {
    /**
     * Enables scrolling navtigation by changing state properties
     * mobile: false
     * scrollEnabled: true
     */
    initiateScrollNav(changeLocation) {
      let timeStamp;
      let counter = 0;

      $(window).on({
        'DOMMouseScroll mousewheel': (ev) => {
          ev.preventDefault();
          const timeNow = new Date().getTime();

          if (timeNow - timeStamp < 500) {
            timeStamp = timeNow;
          } else if (counter === 0) {
            counter += 1;
          } else if (counter >= 100) {
            counter = 0;
          } else {
            timeStamp = timeNow;
            counter = 0;
            this.elementScroll(ev, changeLocation);
          }
        },
      });
    }

    /**
     * Disables scrolling navtigation by changing state properties
     * mobile: true
     * scrollEnabled: false
     */
    disableScrollNav() {
      $(window).off('DOMMouseScroll mousewheel');
    }

    /**
     * Watching scroll events and determines if scroll event meets scroll threshold
     * If threshold is met, setLocation function is called.
     */
    elementScroll(e, changeLocation) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        changeLocation('last');
      } else if (e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
        changeLocation('next');
      }
    }
  }
