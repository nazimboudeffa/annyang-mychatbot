var scrollTo = function(identifier, speed) {
 $('html, body').animate({
     scrollTop: $(identifier).offset().top
 }, speed || 1000);
};

var helpToBack = function () {
  $("#help").hide();
  $("#back").show();
};
