const scriptURL = 'https://script.google.com/macros/s/AKfycby5T5sVKvjxAvtAJbUIBTcRw_3VvAiI0fWdjrDW70g5JqiYnPK8aMN-yR8QLwDQ4JzL/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})

  // setTimeout(function() {
  //   form.reset();
  //   window.location.href = "confirmation.html";
  // }, 500);
})