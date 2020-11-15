import css from "./style.css";

let index = 0;

function Buttons(playButton, nextButton, prevButton, ...songs) {
  this.next = document.getElementById(nextButton);
  this.play = document.getElementById(playButton);
  this.prev = document.getElementById(prevButton);
  let obj = this;

  this.initialize = function () {
    let playState = 0;
    obj.play.addEventListener("click", function () {
      if (playState == 1) {
        obj.play.setAttribute("src", "play.png");
        playState = 0;
        if (index == 0) {
          songs[0].pauseSong();
        }
      } else {
        obj.play.setAttribute("src", "pause.png");
        playState = 1;
        if (index == 0) {
          songs[0].playSong();
        }
      }
    });

    obj.next.addEventListener("click", function () {
      songs[index].pauseSong();
      if (index != 2) {
        index++;
      } else {
        index = 0;
      }
      if (playState == 0) {
        songs[index].playSong();
      }
    });
    obj.prev.addEventListener("click", function () {
      songs[index].pauseSong();
      if (index != 0) {
        index--;
      } else {
        index = 2;
      }
      if (playState == 0) {
        songs[index].playSong();
      }
    });
  };
}

function Song(file, name, artist, index) {
  this.audio = new Audio(file);
  this.playSong = function () {
    this.audio.play();
  };
  this.pauseSong = function () {
    this.audio.pause();
  };
  this.songName = name;
  this.artistName = artist;
  this.indexNumber = index;
}

let song1 = new Song("song1.mp3", "All That", "Benjamin Tissot", 0);

let buttons = new Buttons("play", "next", "prev", song1);
buttons.initialize();
