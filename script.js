let value = document.getElementById('value');
let counter = 0;
value.textContent = counter;

let colors = { danger: 'crimson', success: 'lightgreen', dark: '#333' };

let btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let styles = e.currentTarget.classList;
    if (styles.contains('increase')) {
      counter++;
      value.textContent = counter;
    } else if (styles.contains('decrease')) {
      counter--;
      value.textContent = counter;
    } else {
      counter = 0;
      value.textContent = 0;
    }

    if (value.textContent < 0) {
      value.style.color = colors.danger;
    } else if (value.textContent > 0) {
      value.style.color = colors.success;
    } else {
      value.style.color = colors.dark;
    }
  });
});
