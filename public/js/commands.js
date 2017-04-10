// define the functions our commands will run.
var help = function() {
  window.open("/help.html");
};

 // define the functions our commands will run.
 var hello = function() {
   var audio = document.getElementById("audio");
	 audio.play();
   console.log(audio);
 };

 var how = function () {
     meSpeak.speak("I am fine thank you");
 }

 var showTPS = function(type) {
   $("#logo").hide();
   helpToBack();
   $('#tpsreport').show();
 };

var searchImages = function(tag) {
  $("#logo").hide();
  helpToBack();
  showFlickr(tag);
};

// This is just to display the logo again after .hide()
var pageReload = function() {
  location.reload();
};
