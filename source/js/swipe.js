'use strict';

(function () {

  var settings = Object.assign({}, {
    minDist: 30,
    maxDist: 120,
    maxTime: 700,
    minTime: 50
  }, settings);


  var swipe = function (element) {

    if (settings.maxTime < settings.minTime) {
      settings.maxTime = settings.minTime + 500;
    }
    if (settings.maxTime < 100 || settings.minTime < 50) {
      settings.maxTime = 700;
      settings.minTime = 50;
    }
    var dir;
    var swipeType;
    var dist;
    var isMouse = false;
    var isMouseDown = false;
    var startX = 0;
    var distX = 0;
    var startY = 0;
    var distY = 0;
    var startTime = 0;
    var support = {
      pointer: !!('PointerEvent' in window || ('msPointerEnabled' in window.navigator)),
      touch: !!(typeof window.orientation !== 'undefined' || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 'ontouchstart' in window || navigator.msMaxTouchPoints || 'maxTouchPoints' in window.navigator > 1 || 'msMaxTouchPoints' in window.navigator > 1)
    };


    var getSupportedEvents = function () {
      switch (true) {
        case support.pointer:
          events = {
            type: 'pointer',
            start: 'PointerDown',
            move: 'PointerMove',
            end: 'PointerUp',
            cancel: 'PointerCancel',
            leave: 'PointerLeave'
          };
          var ie10 = (window.navigator.msPointerEnabled)();
          for (var value in events) {
            if (value === 'type') {
              continue;
            }
            events[value] = (ie10) ? 'MS' + events[value] : events[value].toLowerCase();
          }
          break;
        case support.touch:
          events = {
            type: 'touch',
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            cancel: 'touchcancel'
          };
          break;
        default:
          events = {
            type: 'mouse',
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            leave: 'mouseleave'
          };
          break;
      }
      return events;
    };


    var eventsUnify = function (e) {
      return e.changedTouches ? e.changedTouches[0] : e;
    };

    var checkStart = function (e) {
      var event = eventsUnify(e);
      if (support.touch && typeof e.touches !== 'undefined' && e.touches.length !== 1) {
        return;
      }
      dir = 'none';
      swipeType = 'none';
      dist = 0;
      startX = event.pageX;
      startY = event.pageY;
      startTime = new Date().getTime();
      if (isMouse) {
        isMouseDown = true;
      }
      e.preventDefault();
    };


    var checkMove = function (e) {
      if (isMouse && !isMouseDown) {
        return;
      }
      var event = eventsUnify(e);
      distX = event.pageX - startX;
      distY = event.pageY - startY;
      if (Math.abs(distX) > Math.abs(distY)) {
        dir = (distX < 0) ? 'left' : 'right';
      } else {
        dir = (distY < 0) ? 'up' : 'down';
      }
      e.preventDefault();
    };

    var checkEnd = function (e) {
      if (isMouse && !isMouseDown) {
        return;
      }
      var endTime = new Date().getTime();
      var time = endTime - startTime;
      if (time >= settings.minTime && time <= settings.maxTime) {
        if (Math.abs(distX) >= settings.minDist && Math.abs(distY) <= settings.maxDist) {
          swipeType = dir;
        } else if (Math.abs(distY) >= settings.minDist && Math.abs(distX) <= settings.maxDist) {
          swipeType = dir;
        }
      }
      dist = (dir === 'left' || dir === 'right') ? Math.abs(distX) : Math.abs(distY);


      if (swipeType !== 'none' && dist >= settings.minDist) {
        var swipeEvent = new CustomEvent('swipe', {
          bubbles: true,
          cancelable: true,
          detail: {
            full: e,
            dir: swipeType,
            dist: dist,
            time: time
          }
        });
        element.dispatchEvent(swipeEvent);
      }
      e.preventDefault();
    };


    var events = getSupportedEvents();


    if ((support.pointer && !support.touch) || events.type === 'mouse') {
      isMouse = true;
    }


    element.addEventListener(events.start, checkStart);
    element.addEventListener(events.move, checkMove);
    element.addEventListener(events.end, checkEnd);

  };


  var myBlock = document.querySelector('.izrael-live__advantage');


  swipe(myBlock);

})();
