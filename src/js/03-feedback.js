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
    const localData = JSON.parse(localStorage.getItem(KEY));
    if (localData !== null) {
        data.email = localData.email;
        data.message = localData.message;
    }
    if (target.type === 'email') {
        data.email = target.value;
    }
    if (target.type === 'textarea') {
        data.message = target.value
    }
    localStorage.setItem(KEY, JSON.stringify(data))

};
function hendlerSend(e) {
    e.preventDefault();
    const localData = JSON.parse(localStorage.getItem(KEY));
    console.log(`email: ${localData.email}`)
    console.log(`message: ${localData.message}`)

    e.currentTarget.reset();
    localStorage.removeItem(KEY);
    data.message = '';
    data.email = '';
};

function resetSaveData() {
    const localData = JSON.parse(localStorage.getItem(KEY));
    if (localData !== null) {
        emailInputEl.value = localData.email;
        messageInputEl.value = localData.message;
    }
};

feedBackForm.addEventListener('input', throttle(hendlerSaveData, 500));
feedBackForm.addEventListener('submit', hendlerSend);