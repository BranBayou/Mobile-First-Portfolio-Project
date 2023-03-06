const humMenuBtn = document.querySelector('.humburger-menu-btn');
const popup = document.querySelector('.mobile-menu');
const header = document.querySelector('header');
const closeBtn = document.querySelector('close-btn');

humMenuBtn.addEventListener('click', e => {
  e.preventDefault();
  popup.style.display = 'block';
  header.style.display = 'none';
});

closeBtn.addEventListener('click', e => {
  popup.style.display = 'none';
  header.style.display = 'flex';
});

popup.addEventListener('click', e => {
  popup.style.display = 'none';
  header.style.display = 'flex';
});