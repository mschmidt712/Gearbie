  import $ from 'jquery';

  export default class AppScroll {
    /**
     * Enables scrolling navtigation by changing state properties
     * mobile: false
     * scrollEnabled: true
     */
    initiateScrollNav(changeLocation, scrollThreshold) {
      let timeStamp;
      let counter = 0;

      $(window).on({
        'DOMMouseScroll mousewheel': (ev) => {
          ev.preventDefault();
          [counter, timeStamp] = this.handleScrollEvent(
              timeStamp,
              counter,
              ev,
              changeLocation,
              scrollThreshold);
        },
      });
    }

    handleScrollEvent(
      timeStamp,
      counter,
      ev,
      changeLocation,
      scrollThreshold) {
      const timeNow = new Date().getTime();
      let calcTimestamp = timeStamp;
      let calcCounter = counter;

      if (timeNow - timeStamp < scrollThreshold) {
        calcCounter += 1;
      } else if (counter === 0) {
        calcCounter += 1;
      } else {
        calcTimestamp = timeNow;
        calcCounter = 0;
        this.elementScroll(ev, changeLocation);
      }

      return [calcCounter, calcTimestamp];
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
     * If threshold is met, changeLocation function is called.
     */
    elementScroll(e, changeLocation) {
      this.foobar = 0;

      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        changeLocation('last');
      } else if (e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
        changeLocation('next');
      }
    }
  }
