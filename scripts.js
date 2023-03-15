const body = document.querySelector('body');
const humMenuBtn = document.querySelector('.humburger-menu-btn');
const popup = document.querySelector('.mobile-menu');
const header = document.querySelector('header');
const closeBtn = document.querySelector('.close-btn');
const option1 = document.getElementById('menu-port');
const option2 = document.getElementById('menu-about');
const option3 = document.getElementById('menu-contact');

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

const msg = document.querySelector('.input-textarea');
const userName = document.querySelector('.input-name');
const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.querySelector('.error-msg');

function storeData() {
  const info = {
    name: userName.value,
    email: email.value,
    message: msg.value,
  };
  window.localStorage.setItem('info', JSON.stringify(info));
}

form.addEventListener('submit', storeData);
const savedData = JSON.parse(localStorage.getItem('info'));

form.addEventListener('submit', (event) => {
  if (!email.value.match(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
    event.preventDefault();
    error.innerHTML = 'Please, email should be in lowercase';
    email.style.border = '1px solid red';
    error.style.color = 'red';
    return false;
  }
  return true;
});

window.addEventListener('load', () => {
  if (savedData) {
    userName.value = savedData.name;
    email.value = savedData.email;
    msg.value = savedData.message;
  }
});

/* Projects refactor code */

const works = [
  {
    image: 'Img/dver.svg',
    title: 'Multi-Post Stories',
    titleC: 'Keeping track of hundreds  of components website',
    titleM: 'Multi Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['css', 'html', 'bootstrap', 'ruby'],
    liveLinks: ['See live', 'See Source'],
  },
  {
    image: 'Img/Img Placeholder (2).svg',
    title: 'Multi-Post Stories',
    titleC: 'Keeping track of hundreds  of components website',
    titleM: 'Multi Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['css', 'html', 'bootstrap', 'ruby'],
    liveLinks: ['See live', 'See Source'],
  },
  {
    image: 'Img/Img Placeholder (3).svg',
    title: 'Data Dashboard Healthcare',
    titleC: 'Keeping track of hundreds  of components website',
    titleM: 'Multi Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['css', 'html', 'bootstrap', 'ruby'],
    liveLinks: ['See live', 'See Source'],
  },
  {
    image: 'Img/Img Placeholder (4).svg',
    title: 'Website Protfolio',
    titleC: 'Keeping track of hundreds  of components website',
    titleM: 'Multi Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['css', 'html', 'bootstrap', 'ruby'],
    liveLinks: ['See live', 'See Source'],
  },
  {
    image: 'Img/Img Placeholder (5).svg',
    title: 'Profesional Art Printing Data',
    titleC: 'Keeping track of hundreds  of components website',
    titleM: 'Multi Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['css', 'html', 'bootstrap', 'ruby'],
    liveLinks: ['See live', 'See Source'],
  },
  {
    image: 'Img/Img Placeholder (6).svg',
    title: 'Data Dashboard Healthcare',
    titleC: 'Keeping track of hundreds  of components website',
    titleM: 'Multi Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['css', 'html', 'bootstrap', 'ruby'],
    liveLinks: ['See live', 'See Source'],
  },
  {
    image: 'Img/Img Placeholder (7).svg',
    title: 'Website Protfolio',
    titleC: 'Keeping track of hundreds  of components website',
    titleM: 'Multi Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['css', 'html', 'bootstrap', 'ruby'],
    liveLinks: ['See live', 'See Source'],
  },
];

const projectsCard = document.querySelector('.projects-card');

function showProject(projectId) {
  projectsCard.innerHTML += `
    <div class="cardList">
        <img src="${works[projectId].image}" alt="my ${projectId} project image" />
      <div class="combine-two">
        <div class="proInfo">
          <h3 class="project-title">${works[projectId].title}</h3>
          <p>${works[projectId].description}</p>
            </div>
        <div clss="proLan">
          <ul class="flex-div tags">
          <li><a href="#"><button class="Css" type="button">${works[projectId].languages[0]}</button></a></li>
          <li><a href="#"><button class="Html" type="button">${works[projectId].languages[1]}</button></a></li>
          <li><a href="#"><button class="Bs" type="button">${works[projectId].languages[2]}</button></a></li>
          <li><a href="#"><button class="Rb" type="button">${works[projectId].languages[3]}</button></a></li>
          </ul>
          <button type="button" class="see-pro">See Project</button>
        </div>
      </div>
    </div>
  `;
}

for (let i = 0; i < works.length; i += 1) {
  showProject(i);
}

/* Event listener code goes from here to show popup window */

const seeProBtn = document.querySelectorAll('.see-pro');

/* Popup window details code goes from here */
const coverTop = document.querySelector('.cover-top');
const popupCover = document.createElement('dialog');
popupCover.classList.add('popupCover');

function showPopup(projectView) {
  const showAllWorks = [];
  coverTop.style.display = 'block';
  popupCover.style.display = 'block';
  body.appendChild(popupCover);
  popupCover.innerHTML = `
  <section class="popup"> 
  <div class="top-popup">
    <div class="top-bottom">
      <div class="head-and-close">
        <img src = "Img/Icon.svg" id="closePopupBtn">
        <h3 class="tittleC">${works[projectView].title}</h3>
        <h3 class="tittleM">${works[projectView].titleM}</h3>
      </div>
      <div>
        <button type="button" class="popup-btn">${works[projectView].languages[0]}</button>
        <button type="button" class="popup-btn">${works[projectView].languages[1]}</button>
        <button type="button" class="popup-btn">${works[projectView].languages[2]}</button>
      </div>
    </div>
  </div>
  <div class = "bottom-popup">
    <img src = "${works[projectView].image}">
    <div class="bottom-popup-desc">
      <p class="desC">${works[projectView].description}</p>
      <p class="desM">${works[projectView].descriptionM}</p>
      <div class="live-links">
        <a href="https://branbayou.github.io/Mobile-First-Portfolio-Project/"><button type="button" class="popup-btn-link">${works[projectView].liveLinks[0]}</button></a>
        <a href="https://github.com/BranBayou"><button type="button" class="popup-btn-link">${works[projectView].liveLinks[1]}</button></a>
      </div>
    </div>
  </div>
</section>
  `;
  showAllWorks.push(popupCover);
  return showAllWorks;
}
for (let i = 0; i < seeProBtn.length; i += 1) {
  seeProBtn[i].addEventListener('click', () => {
    showPopup(i);
  });
}
document.addEventListener('click', (action) => {
  if (action.target.id === 'closePopupBtn') {
    popupCover.style.display = 'none';
    coverTop.style.display = 'none';
  }
});
function addClass() {
  const csrdLst = document.querySelectorAll('.cardList');
  for (let j = 0; j <= works.length; j += 1) {
    csrdLst[j].setAttribute('id', `main-project${j}`);
  }
}
addClass();
