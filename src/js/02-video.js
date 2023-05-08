import Player from '@vimeo/player'; // імпорт бібліотеки плеера;

var throttle = require('lodash.throttle'); // імпорт бібліотеки throttle частини бібліотеки lodash;

const iframe = document.querySelector('#vimeo-player');

const iframePlayer = new Player(iframe); // передаємо Vimeo <iframe> у конструктор, щоб отримати об’єкт iframePlayer

function updateTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
} // функція запису поточної секунди програвання в localStorage

iframePlayer.on('timeupdate', throttle(updateTime, 1000)); // обробник події "on(event: string, callback: function)"

const currentTime = Number(localStorage.getItem('videoplayer-current-time')); // значення поточної секунди програвання в localStorageприведене до Number

iframePlayer
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  }); // встановлення поточної позиції відтворення в секундах
