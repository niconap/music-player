import css from "./style.css";

function Buttons(playButton, nextButton, prevButton) {
  this.next = document.getElementById(nextButton);
  this.play = document.getElementById(playButton);
  this.prev = document.getElementById(prevButton);
  let obj = this;

  this.initialize = function () {
    let playState = 0;
    obj.play.addEventListener("click", function () {
      if (playState == 0) {
        obj.play.setAttribute("src", "play.png");
        playState = 1;
      } else {
        obj.play.setAttribute("src", "pause.png");
        playState = 0;
      }
    });
  };
}

let buttons = new Buttons("play", "next", "prev");
buttons.initialize();
