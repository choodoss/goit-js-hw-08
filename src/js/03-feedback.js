import throttle from 'lodash.throttle';

const feedBackForm = document.querySelector('.feedback-form');
const KEY = "feedback-form-state";
resetForm();

function hendlerInputForm({ target }) {
    let localData = localStorage.getItem(KEY);
    localData = localData !== true ? JSON.parse(localData) : {};
    console.log(localStorage.getItem(KEY))
    localData[target.name] = target.value;
    localStorage.setItem(KEY, JSON.stringify(localData))
};

function hendlerSavedata(e) {
    e.preventDefault();
    console.log(feedBackForm.elements)
    for (let i = 0; i < 2; i += 1) {
        console.log(`${feedBackForm.elements}: ${feedBackForm.elements[i].value}`)
    }
    console.log(`${feedBackForm.elements}: ${feedBackForm.elements[0].value}`)

};

function resetForm() {
    if (localStorage.getItem(KEY)) {
        const localData = JSON.parse(localStorage.getItem(KEY));
        console.log(Object.entries(localData).forEach(([key, value]) => {
            feedBackForm.elements[key].value = value;
        }));
    }
};

feedBackForm.addEventListener('input', throttle(hendlerInputForm, 1000));
feedBackForm.addEventListener('submit', hendlerSavedata);
