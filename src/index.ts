import email from 'email-validator';

const formEmail = document.querySelector('.form-email')! as HTMLFormElement;
const errorIcon = document.querySelector(
  '.form-email__error'
)! as HTMLSpanElement;
const errorText = document.querySelector(
  '.form-email__error-text'
)! as HTMLSpanElement;

const emailInput = document.querySelector(
  '.form-email__input'
)! as HTMLInputElement;

let emailInputValue = '';
emailInput.addEventListener('change', (e) => {
  emailInputValue = (e.target as HTMLInputElement).value;
});

formEmail.addEventListener('submit', (e): void => {
  e.preventDefault();

  if (!email.validate(emailInputValue)) {
    errorText.classList.add('error');
    errorIcon.classList.add('error');
  } else {
    emailInput.value = '';
    errorText.classList.remove('error');
    errorIcon.classList.remove('error');
  }
});
