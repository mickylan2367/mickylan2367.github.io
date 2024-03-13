$(function () {
    var audioBtn = $("#page-link li:nth-of-type(1)"),
      audio = document.getElementById("audio");
  
    audioBtn.on("click", function () {
      if (audioBtn.hasClass("play")) {
        audio.pause();
        audioBtn.removeClass("play");
      } else {
        audio.play();
        audioBtn.addClass("play");
      }
    });
  });