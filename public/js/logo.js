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

/*
function rotateCircles() {
  $('div[class*="circle"]').each(function() {
    var that = this,
    direction = ["-", "+"],
    chosenDirection = direction[Math.floor(Math.random() * direction.length)],
    speed = Math.floor((Math.random() * 300) + 100),
    looper = setInterval(circleMove, 2000);

    function circleMove() {
      $(that).animate({
        rotation: chosenDirection + '=' + speed
      }, {
        duration: 2000,
        easing: 'linear',
        step: function(now) {
          $(that).css({
            "transform": "rotate(" + now + "deg)"
          });
        }
      });
    }
    circleMove();
  });
}
*/
