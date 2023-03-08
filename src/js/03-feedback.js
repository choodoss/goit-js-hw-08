import throttle from 'lodash.throttle';

const feedBackForm = document.querySelector('.feedback-form');

function hendlerSaveData({ target }) {
    const KEY = "feedback-form-state";
    localStorage.setItem(KEY, JSON.stringify({email, message}))
    console.log();
    if (target.type === 'email') {
        console.dir(localStorage);

        console.log(localStorage.getItem(KEY));
    }
    if (target.type === 'textarea') {
        localStorage.setItem(KEY, JSON.stringify({message: target.value.trim()}))
        console.log(target.type);
    }

};

feedBackForm.addEventListener('input', hendlerSaveData)