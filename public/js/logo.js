$(document).ready(function() {
  rotateCircles();
});

function circle3Move(s) {
  var $elem = $(".circle3");
  setInterval(function () {
    $({deg : 0}).animate({
      deg : 360
    },{ duration: 2000,
        easing: 'linear',
        step : function(now){
          $elem.css({
            transform : "rotate(" + now + "deg)"
          });
        }
    });
  }, 2000);
}

function circle2Move(s) {
  var $elem = $(".circle2");
  setInterval(function () {
    $({deg : 0}).animate({
      deg : -360
    },{ duration: 2000,
        easing: 'linear',
        step : function(now){
          $elem.css({
            transform : "rotate(" + now + "deg)"
          });
        }
    });
  }, 2000);
}

function rotateCircles() {
  circle2Move(100);
  circle3Move(1000)
}
