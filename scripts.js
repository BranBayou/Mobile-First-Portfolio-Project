const humMenuBtn = document.querySelector('.humburger-menu-btn');
const popup = document.querySelector('.mobile-menu');
const header = document.querySelector('header');
const closeBtn = document.querySelector('.close-btn');
const option1 = document.getElementById('');
const option2 = document.getElementById('');
const option3 = document.getElementById('');

humMenuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.display = 'block';
  header.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  header.style.display = 'flex';
});

option1.addEventListener('click', () => {
  popup.style.display = 'none';
  header.style.display = 'block';
});

option2.addEventListener('click', () => {
  popup.style.display = 'none';
  header.style.display = 'block';
});

option3.addEventListener('click', () => {
  popup.style.display = 'none';
  header.style.display = 'block';
});