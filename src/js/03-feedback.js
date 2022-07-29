import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const input = document.querySelector(".feedback-form input");
const textarea = document.querySelector(".feedback-form textarea");
const LOCALSTORAGE_KEY = "feedback-form-state";

let objectFormValue = {};

updatePageBrowser()
    
form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

function onFormInput(event) {
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    objectFormValue = { email, message };
    // objectFormValue[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectFormValue));
}

function onFormSubmit(event) {
    event.preventDefault();
    objectFormValue.email = input.value;
    objectFormValue.message = textarea.value;

    if (input.value === "" || textarea.value === "") {
        alert("Заповніть, будь ласка, пусті поля!")
    } else {
        console.log(objectFormValue);
        event.currentTarget.reset();
        localStorage.removeItem(LOCALSTORAGE_KEY);
    }
}
  
function updatePageBrowser() {
    const objStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    // console.log(objStorage);

    if (objStorage) {
        input.value = objStorage.email;
        textarea.value = objStorage.message;
    }    
}
  
