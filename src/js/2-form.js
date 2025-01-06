const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

/* проверка локального хранилища при загрузке стр */

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  formData.email = savedData.email;
  formData.message = savedData.message;
  form.email.value = formData.email;
  form.message.value = formData.message;
}

/* Метод делегирования для обработки действия input */
form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name === 'email') {
    formData.email = value;
  } else if (name === 'message') {
    formData.message = value;
  }

  /* Запись данных в локальное хранилище */
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

/* Обработка отправки формы */
form.addEventListener('submit', event => {
  event.preventDefault();

  /* проверка на заполнение полей */
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);

    /* Очистка локального хранилища и formData */

    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';

    /* очистка полей ввода */
    form.email.value = '';
    form.message.value = '';
  }
});
