// DOM Elements
const mobileNav = document.querySelector('.mobile_nav');
const navOpenIcon = document.querySelector('.nav_icon');
const navCloseIcon = document.querySelector('.nav_close_icon');
const header = document.querySelector('.header_navbar');
const banner = document.querySelector('.banner');
const workSection = document.querySelector('#work_section');
const workData = [
  {
    id: 1,
    img: 'images/work-1.png',
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no account or sign-ups required.',
    tags: ['Canopy', 'Back End Dev', 2015],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'index.html',
    sourceUrl: 'index.html',
  },
  {
    id: 2,
    img: 'images/work-2.png',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no account or sign-ups required.',
    tags: ['Canopy', 'Back End Dev', 2015],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'index.html',
    sourceUrl: 'index.html',
  },
  {
    id: 3,
    img: 'images/work-3.png',
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no account or sign-ups required.',
    tags: ['Canopy', 'Back End Dev', 2015],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'index.html',
    sourceUrl: 'index.html',
  },

  {
    id: 4,
    img: 'images/work-4.png',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no account or sign-ups required.',
    tags: ['Canopy', 'Back End Dev', 2015],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'index.html',
    sourceUrl: 'index.html',
  },
];
// FUNCTIONS

// Adding work cards function

function addWorkCards() {
  workData.forEach((i) => {
    let techs = '';
    i.technologies.forEach((j) => {
      techs += `<li class="work_tech_stack">${j}</li>`;
    });

    const workCard = `<div class="work_card">
<div class="work_card_wrapper work_${i.id}">
  <img src="${i.img}" alt="Work ${i.id}" class="work_img" />
  <div class="work_img_wrapper work_${i.id}"></div>
  <div class="work_card_content_wrapper">
    <h3 class="work_title">${i.title}</h3>
    <ul class="work_tags">
      <li class="work_tags main_tag">Canopy</li>
      <li class="work_tags">Back End Dev</li>
      <li class="work_tags">2015</li>
    </ul>
    <p class="work_description">
      ${i.description}
    </p>
    <ul class="work_tech_stack">
      ${techs}
    </ul>
    <a href="${i.liveUrl}" class="work_link">
      <button class="work_button">See project</button>
    </a>
  </div>
</div>
</div>`;

    workSection.innerHTML += workCard;
  });
}


// Toggling Nav Function
function toggleMobileNav() {
  mobileNav.classList.toggle('dp-none');
  navOpenIcon.classList.toggle('dp-none');
  header.classList.toggle('blur');
  banner.classList.toggle('blur');
}



// EVENT LISTENERS

// Adding work cards to work section from work data array

window.addEventListener('load', addWorkCards, false);
navOpenIcon.addEventListener('click', toggleMobileNav, false);
navCloseIcon.addEventListener('click', toggleMobileNav, false);
mobileNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    toggleMobileNav();
  }
});
