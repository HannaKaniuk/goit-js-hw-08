import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';


function saveFormState() {
  const formState = {
    email: inputEmail.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formState));
}


function loadFormState() {
  const savedState = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedState) {
    const formState = JSON.parse(savedState);
    inputEmail.value = formState.email;
    messageTextarea.value = formState.message;
  }
}


loadFormState();


inputEmail.addEventListener('input', throttle(saveFormState, 500));
messageTextarea.addEventListener('input', throttle(saveFormState, 500));


feedbackForm.addEventListener('submit', (evt) => {
  evt.preventDefault(); 
  console.log('Form data:', {
    email: inputEmail.value,
    message: messageTextarea.value,
  });
  localStorage.removeItem(LOCALSTORAGE_KEY); 
});





