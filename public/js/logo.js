$(document).ready(function() {
  rotateCircles1();
  console.log("interval");
});

function circle3Move(speed) {
  $(".circle3").animate({
    rotation: speed
  },{ duration: 2000,
      easing: 'linear',
      step : function(now){
        $(".circle3").css({
          "transform": "rotate(" + now + "deg)"
        });
        console.log("step");
      }
  });
}

function circle2Move(speed) {
  $(".circle2").animate({
    rotation: speed
  },{ duration: 2000,
      easing: 'linear',
      step : function(now){
        $(".circle2").css({
          "transform": "rotate(" + now + "deg)"
        });
      }
  });
}

function rotateCircles1() {
  //circle2Move(100);
  looper = setInterval(circle3Move(100),2000);
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
