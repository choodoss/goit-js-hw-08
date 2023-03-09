import throttle from 'lodash.throttle';

const feedBackForm = document.querySelector('.feedback-form');
const emailInputEl = feedBackForm.querySelector('input');
const messageInputEl = feedBackForm.querySelector('textarea');

const KEY = "feedback-form-state";
resetSaveData();
const data = {
    email: '',
    message: '',
};

function hendlerSaveData({ target }) {

    switch (target.type) {
        case 'email': data.email = target.value;
            break;
        case 'textarea': data.message = target.value;
            break
    }
    localStorage.setItem(KEY, JSON.stringify(data))
};

function hendlerSend(e) {
    e.preventDefault();

    console.log(`email: ${JSON.parse(localStorage.getItem(KEY)).email}`)
    console.log(`message: ${JSON.parse(localStorage.getItem(KEY)).message}`)

    e.currentTarget.reset();
    localStorage.removeItem(KEY);
};

function resetSaveData() {
    if (localStorage.getItem(KEY) !== null) {
        emailInputEl.value = JSON.parse(localStorage.getItem(KEY)).email;
        messageInputEl.value = JSON.parse(localStorage.getItem(KEY)).message;
    }
};

feedBackForm.addEventListener('input', throttle(hendlerSaveData, 500));
feedBackForm.addEventListener('submit', hendlerSend);