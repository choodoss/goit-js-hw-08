import throttle from 'lodash.throttle';
import localMetods from './storage';

const feedBackForm = document.querySelector('.feedback-form');
const KEY = "feedback-form-state";
resetForm();

function hendlerInputForm({ target }) {
    let localData = localMetods.load(KEY) || {};
    localData[target.name] = target.value;
    localMetods.save(KEY, localData);
};

function hendlerSavedata(e) {
    e.preventDefault();
    const userData = {};
    const formData = new FormData(feedBackForm);
    formData.forEach((value, name) => userData[name] = value)
    console.log(userData)
    feedBackForm.reset();
    localMetods.remove(KEY);
};

function resetForm() {
    if (localStorage.getItem(KEY)) {
        Object.entries(localMetods.load(KEY)).forEach(([key, value]) => {
            feedBackForm.elements[key].value = value;
        });
    }
};

feedBackForm.addEventListener('input', throttle(hendlerInputForm, 1000));
feedBackForm.addEventListener('submit', hendlerSavedata);
