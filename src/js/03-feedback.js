import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
let textForStorage ={message:"", email:""};

const formInputEL = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
   input: document.querySelector('.feedback-form input'),
};

formInputEL.form.addEventListener('submit', onFormSubmit);
formInputEL.form.addEventListener('input', throttle(onInputChange, 500));

saveStorageText ()

function onFormSubmit(event){
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    textForStorage ={message:"", email:""};
};

function onInputChange(event) {
    if (localStorage.getItem(STORAGE_KEY)) {
        textForStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    };

    textForStorage[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(textForStorage));

};

function saveStorageText () {
  if (localStorage.getItem(STORAGE_KEY)) {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    formInputEL.textarea.value = savedMessage.message;
    formInputEL.input.value = savedMessage.email;
  }
};
