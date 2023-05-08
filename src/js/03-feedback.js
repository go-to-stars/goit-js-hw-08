var throttle = require('lodash.throttle'); // імпорт бібліотеки throttle частини бібліотеки lodash;

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const outputStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (outputStorageData) {
  form.email.value = outputStorageData.email;
  form.message.value = outputStorageData.message;
} // якщо дані є в localStorage, то заповнити ними форму

form.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ email: form.email.value, message: form.message.value })
    );
  }),
  500 // запис в сховище localStorage при настанні події "input" не частіше 500мс
); // створення прослуховування події "input"

form.addEventListener('submit', e => {
  e.preventDefault(); // блокування дій за "замовчуванням" у браузері

  if (form.email.value && form.message.value) {
    console.log({ email: form.email.value, message: form.message.value });
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
  } else {
    alert('Please fill in all the fields!');
  }
}); // якщо заповнені поля форми email та message, вивести в консоль об’єкт, очистити форму та сховище, інакше вивести попередження
