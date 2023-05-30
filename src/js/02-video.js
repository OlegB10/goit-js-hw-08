// // HTML містить < iframe > з відео для Vimeo плеєра.Напиши скрипт, який буде 
// // зберігати поточний час відтворення відео у локальне сховище і, після 
// // перезавантаження сторінки, продовжувати відтворювати відео з цього часу.

// // <iframe
// //   id="vimeo-player"
// //   src="https://player.vimeo.com/video/236203659"
// //   width="640"
// //   height="360"
// //   frameborder="0"
// //   allowfullscreen
// //   allow="autoplay; encrypted-media"
// // ></iframe>

// Виконуй це завдання у файлах 02 - video.html і 02 - video.js.Розбий його 
// на декілька підзавдань:

// Ознайомся з документацією бібліотеки Vimeo плеєра.
// Додай бібліотеку як залежність проекту через npm.
// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre - existing
// player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// Вивчи документацію методу on() і почни відстежувати подію timeupdate -
// оновлення часу відтворення.Зберігай час відтворення у локальне сховище. 
// Нехай ключем для сховища буде рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime() з 
// метою відновлення відтворення зі збереженої позиції.
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення
//  оновлювався у сховищі не частіше, ніж раз на секунду.


import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_TIME_PLAY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(e => {
  localStorage.setItem(STORAGE_TIME_PLAY, e.seconds)
}, 1000)); 

player.setCurrentTime(localStorage.getItem(STORAGE_TIME_PLAY) || 0)
console.log(`Ви зупинились на перегляді ${Math. round(localStorage.getItem(STORAGE_TIME_PLAY))} секунди фільму`);