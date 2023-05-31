// HTML містить розмітку форми.Напиши скрипт, який буде зберігати значення 
// полів у локальне сховище, коли користувач щось друкує.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

//     Виконуй це завдання у файлах 03 - feedback.html і 03 - feedback.js. 
// Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт 
// з полями email і message, у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені
// дані, заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль 
// об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. 
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
let textForStorage ={message:"", email:""};

const formInputEL = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
   input: document.querySelector('.feedback-form input'),
};

formInputEL.form.addEventListener('submit', onFormSubmit);
formInputEL.textarea.addEventListener('input', throttle(onTextareaInput, 500));
formInputEL.input.addEventListener('input', throttle(onInputInput, 500));

saveStorageText ()

function onFormSubmit(event){
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    textForStorage ={message:"", email:""};
};

function onTextareaInput(event) {
    if (localStorage.getItem(STORAGE_KEY)) {
        textForStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    };

    textForStorage.message = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(textForStorage));

};

function onInputInput(event) {
    if (localStorage.getItem(STORAGE_KEY)) {
        textForStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    };
    textForStorage.email = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(textForStorage));

};

function saveStorageText () {
  if (localStorage.getItem(STORAGE_KEY)) {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    formInputEL.textarea.value = savedMessage.message;
    formInputEL.input.value = savedMessage.email;
  }
};
