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

/* Projects refactor code */

const works = [
  {
    image: 'Img/dver.svg',
    title: 'Multi-Post Stories',
    descrtiption: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    languages: ['css', 'html', 'bootstrap', 'ruby'],
  },
  {
    image: 'Img/Img Placeholder (2).svg',
    title: 'Multi-Post Stories',
    descrtiption: "A daily selection of privately personalized reads; no  accounts or sign-ups required. has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a standard dummy   text.",
    languages: ['css', 'html', 'bootstrap', 'ruby'],
  },
  {
    image: 'Img/Img Placeholder (3).svg',
    title: 'Data Dashboard Healthcare',
    descrtiption: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    languages: ['css', 'html', 'bootstrap', 'ruby'],
  },
  {
    image: 'Img/Img Placeholder (4).svg',
    title: 'Website Protfolio',
    descrtiption: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    languages: ['css', 'html', 'bootstrap', 'ruby'],
  },
  {
    image: 'Img/Img Placeholder (5).svg',
    title: 'Profesional Art Printing Data',
    descrtiption: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    languages: ['css', 'html', 'bootstrap', 'ruby'],
  },
  {
    image: 'Img/Img Placeholder (6).svg',
    title: 'Data Dashboard Healthcare',
    descrtiption: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    languages: ['css', 'html', 'bootstrap', 'ruby'],
  },
  {
    image: 'Img/Img Placeholder (7).svg',
    title: 'Website Protfolio',
    descrtiption: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    languages: ['css', 'html', 'bootstrap', 'ruby'],
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
          <p>${works[projectId].descrtiption}</p>
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

const popupData = [
  {
    close: 'Img/Icon.svg',
    title: 'Keeping track of hundreds  of components website',
    titleM: 'Multi Post Stories',
    languages: ['html', 'bootstrap', 'ruby on rails'],
    image: 'Img/Snapshoot Portfolio.svg',
    descrtiption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descrtiptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveLinks: ['See live', 'See Source'],
  },
  {
    close: 'Img/Icon.svg',
    title: 'Keeping track of hundreds  of components website',
    titleM: 'Multi Post Stories',
    languages: ['html', 'bootstrap', 'ruby on rails'],
    image: 'Img/Snapshoot Portfolio.svg',
    descrtiption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descrtiptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveLinks: ['See live', 'See Source'],
  },
  {
    close: 'Img/Icon.svg',
    title: 'Keeping track of hundreds  of components website',
    titleM: 'Multi Post Stories',
    languages: ['html', 'bootstrap', 'ruby on rails'],
    image: 'Img/Snapshoot Portfolio.svg',
    descrtiption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descrtiptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveLinks: ['See live', 'See Source'],
  },
  {
    close: 'Img/Icon.svg',
    title: 'Keeping track of hundreds  of components website',
    titleM: 'Multi Post Stories',
    languages: ['html', 'bootstrap', 'ruby on rails'],
    image: 'Img/Snapshoot Portfolio.svg',
    descrtiption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descrtiptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveLinks: ['See live', 'See Source'],
  },
  {
    close: 'Img/Icon.svg',
    title: 'Keeping track of hundreds  of components website',
    titleM: 'Multi Post Stories',
    languages: ['html', 'bootstrap', 'ruby on rails'],
    image: 'Img/Snapshoot Portfolio.svg',
    descrtiption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descrtiptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveLinks: ['See live', 'See Source'],
  },
  {
    close: 'Img/Icon.svg',
    title: 'Keeping track of hundreds  of components website',
    titleM: 'Multi Post Stories',
    languages: ['html', 'bootstrap', 'ruby on rails'],
    image: 'Img/Snapshoot Portfolio.svg',
    descrtiption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descrtiptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveLinks: ['See live', 'See Source'],
  },
  {
    close: 'Img/Icon.svg',
    title: 'Keeping track of hundreds  of components website',
    titleM: 'Multi Post Stories',
    languages: ['html', 'bootstrap', 'ruby on rails'],
    image: 'Img/Snapshoot Portfolio.svg',
    descrtiption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descrtiptionM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveLinks: ['See live', 'See Source'],
  },
];

const coverTop = document.querySelector('.cover-top');
const popupCover = document.createElement('div');
popupCover.classList.add('popupCover');

function showPopup(projectView) {
  popupCover.style.display = 'block';
  coverTop.style.display = 'block';
  body.appendChild(popupCover);
  popupCover.innerHTML = `
  <section class="popup"> 
  <div class="top-popup">
    <div class="top-bottom">
      <div class="head-and-close">
        <img src = "${popupData[projectView].close}" id="closePopupBtn">
        <h3 class="tittleC">${popupData[projectView].title}</h3>
        <h3 class="tittleM">${popupData[projectView].titleM}</h3>
      </div>
      <div>
        <button type="button" class="popup-btn">${popupData[projectView].languages[0]}</button>
        <button type="button" class="popup-btn">${popupData[projectView].languages[1]}</button>
        <button type="button" class="popup-btn">${popupData[projectView].languages[2]}</button>
      </div>
    </div>
  </div>
  <div class = "bottom-popup">
    <img src = "${popupData[projectView].image}">
    <div class="bottom-popup-desc">
      <p class="desC">${popupData[projectView].descrtiption}</p>
      <p class="desM">${popupData[projectView].descrtiptionM}</p>
      <a href="https://branbayou.github.io/Mobile-First-Portfolio-Project/"><button type="button" class="popup-btn-link">${popupData[projectView].liveLinks[0]}</button></a>
      <a href="https://github.com/BranBayou"><button type="button" class="popup-btn-link">${popupData[projectView].liveLinks[1]}</button></a>
    </div>
  </div>
</section>
  `;
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

/* 
const coverTop = document.querySelector('.cover-top');
const popupCover = document.createElement('div');
popupCover.classList.add('popupCover');

function showModal () {
  popupCover.style.display = 'block';
  coverTop.style.display = 'block';
  body.appendChild(popupCover);

  const modal = Object.assign({}, works[0], {
    
  })
} 

for (let i = 0; i <= works.length; i += 1){
}
*/