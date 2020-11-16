import css from "./style.css";

let index = 0;
let currentInterval = "";
let playState = 0;

function Buttons(playButton, nextButton, prevButton, ...songs) {
  this.next = document.getElementById(nextButton);
  this.play = document.getElementById(playButton);
  this.prev = document.getElementById(prevButton);
  let obj = this;

  this.initialize = function () {
    obj.play.addEventListener("click", function () {
      if (playState == 1) {
        obj.play.setAttribute("src", "play.png");
        playState = 0;
        songs[index].pauseSong();
        clearInterval(currentInterval);
      } else {
        obj.play.setAttribute("src", "pause.png");
        playState = 1;
        songs[index].playSong();
        currentInterval = setInterval(songs[index].updateTime, 1000);
      }
    });

    obj.next.addEventListener("click", function () {
      songs[index].pauseSong();
      clearInterval(currentInterval);
      songs[index].audio.currentTime = 0;
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
      currentInterval = setInterval(songs[index].updateTime, 1000);
    });
    obj.prev.addEventListener("click", function () {
      songs[index].pauseSong();
      clearInterval(currentInterval);
      songs[index].audio.currentTime = 0;
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
      currentInterval = setInterval(songs[index].updateTime, 1000);
    });
  };
}

function Song(file, name, artist, length) {
  let obj = this;
  this.audio = new Audio(file);
  this.playSong = function () {
    this.audio.play();
  };
  this.pauseSong = function () {
    this.audio.pause();
  };
  this.songName = name;
  this.artistName = artist;
  this.songLength = length;
  this.slider = document.getElementById("timebar");
  this.slider.addEventListener("change", function () {
    let position = obj.audio.duration * (obj.slider.value / 100);
    obj.audio.currentTime = position;
  });

  this.render = function () {
    obj.audio.currentTime = 0;
    obj.slider.value = 0;
    let songElement = document.getElementById("song");
    songElement.innerHTML = obj.songName;
    let artistElement = document.getElementById("artist");
    artistElement.innerHTML = obj.artistName;
    let totalTime = document.getElementById("total");
    totalTime.innerHTML = obj.songLength;
    let time = document.getElementById("current");
    time.innerHTML = "0:00";
  };

  this.updateTime = function () {
    let totalSeconds = Math.floor(obj.audio.currentTime);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = "";
    if (minutes != 0) {
      seconds = totalSeconds - 60 * minutes;
    } else {
      seconds = totalSeconds;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    let timeElement = document.getElementById("current");
    let newTime = minutes + ":" + seconds;
    timeElement.innerHTML = newTime.toString();
    obj.sliderUpdate();
    if (timeElement.innerHTML == total.innerHTML) {
      obj.pauseSong();
      clearInterval(currentInterval);
      obj.slider.value = 0;
      timeElement.innerHTML = "0:00";
      resetPlayButton();
    }
  };

  this.sliderUpdate = function () {
    let position = 0;

    if (!isNaN(obj.audio.duration)) {
      position = obj.audio.currentTime * (100 / obj.audio.duration);
      obj.slider.value = position;
    }
  };
}

let song0 = new Song("song0.mp3", "All That", "Benjamin Tissot", "2:25");
let song1 = new Song("song1.mp3", "Indigo Sun", "Daniel Birch", "4:52");
let song2 = new Song("song2.mp3", "Alright Okay", "Mild Wild", "2:53");

let buttons = new Buttons("play", "next", "prev", song0, song1, song2);
buttons.initialize();

function resetPlayButton() {
  let play = document.getElementById("play");
  play.setAttribute("src", "play.png");
  playState = 0;
}
