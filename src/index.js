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
        songs[index].pauseSong();
      } else {
        obj.play.setAttribute("src", "pause.png");
        playState = 1;
        songs[index].playSong();
      }
    });

    obj.next.addEventListener("click", function () {
      songs[index].pauseSong();
      if (index != 2) {
        index++;
      } else {
        index = 0;
      }
      if (playState == 1) {
        songs[index].playSong();
      }
      songs[index].render();
      let cover = document.getElementById("coverart");
      cover.setAttribute("src", "cover" + index + ".jpg");
    });
    obj.prev.addEventListener("click", function () {
      songs[index].pauseSong();
      if (index != 0) {
        index--;
      } else {
        index = 2;
      }
      if (playState == 1) {
        songs[index].playSong();
      }
      songs[index].render();
      let cover = document.getElementById("coverart");
      cover.setAttribute("src", "cover" + index + ".jpg");
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
  let obj = this;

  this.render = function () {
    let songElement = document.getElementById("song");
    songElement.innerHTML = obj.songName;
    let artistElement = document.getElementById("artist");
    artistElement.innerHTML = obj.artistName;
  };
}

let song0 = new Song("song0.mp3", "All That", "Benjamin Tissot", 0);
let song1 = new Song("song1.mp3", "Indigo Sun", "Daniel Birch", 1);
let song2 = new Song("song2.mp3", "Alright Okay", "Mild Wild", 2);

let buttons = new Buttons("play", "next", "prev", song0, song1, song2);
buttons.initialize();
