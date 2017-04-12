$(document).ready(function() {
  rotateCircles();
  console.log("interval");
});

function circle3Move(speed) {
  var $elem = $(".circle3");
  setInterval(function () {
    $({deg : 0}).animate({
      deg : 359
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

function circle2Move(speed) {
  var $elem = $(".circle2");
  setInterval(function () {
    $({deg : 0}).animate({
      deg : -359
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
