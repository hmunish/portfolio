// DOM Elements
const mobileNav = document.querySelector('.mobile_nav');
const navOpenIcon = document.querySelector('.nav_icon');
const navCloseIcon = document.querySelector('.nav_close_icon');
const header = document.querySelector('.header_navbar');
const banner = document.querySelector('.banner');
const workSection = document.querySelector('#work_section');
const modalWindow = document.querySelector('dialog');
const contactForm = document.querySelector('.contact_form');
const workData = [
  {
    id: 1,
    img: 'images/work-1.png',
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tags: ['Canopy', 'Back End Dev', 2015],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    modalTechnologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveUrl: 'index.html',
    sourceUrl: 'index.html',
  },
  {
    id: 2,
    img: 'images/work-2.png',
    title: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tags: ['Facebook', 'Back End Dev', 2015],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    modalTechnologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveUrl: 'index.html',
    sourceUrl: 'index.html',
  },
  {
    id: 3,
    img: 'images/work-3.png',
    title: 'Tonic',
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tags: ['Facebook', 'Back End Dev', 2015],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    modalTechnologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveUrl: 'index.html',
    sourceUrl: 'index.html',
  },

  {
    id: 4,
    img: 'images/work-4.png',
    title: 'Multi-Post Stories',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tags: ['Uber', 'Lead Developer', 2018],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    modalTechnologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveUrl: 'index.html',
    sourceUrl: 'index.html',
  },
];
// Adding work cards function

function addWorkCards() {
  workData.forEach((i, c) => {
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
      <button class="work_button" data-modal=${c}>See project</button>
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

// Adding Modal Function

function addModal(obj) {
  let techStacks = '';
  obj.modalTechnologies.forEach((i) => {
    techStacks += `<li class="work_tech_stack">${i}</li>`;
  });
  const modalHtml = `
  <div class="work_modal_wrapper">
            <div class="work_modal_head_wrapper">
              <div class="work_modal_title_wrapper">
                <h3 class="work_title">${obj.title}</h3>
                <img src="images/close-icon.png" class="modal_close_icon" alt="Close">
              </div>
              <ul class="work_tags">
                <li class="work_tags main_tag">Canopy</li>
                <li class="work_tags">Back End Dev</li>
                <li class="work_tags">2015</li>
              </ul>
            </div>
            <img src="images/work-${obj.id}.png" alt="Work ${obj.id}" class="work_img"/>
            <div class="work_img_wrapper work_${obj.id}" id="modal_img_wrapper"></div>
            <div class="work_modal_bottom_wrapper">
              <p class="work_description" id="modal_description">${obj.modalDescription}</p>
              <div class="work_modal_action_wrapper">
                <ul class="work_tech_stack" id="modal_tech_stack">
                  ${techStacks}
                </ul>
                <div class="work_modal_buttons_wrapper">
                  <a href="${obj.liveUrl}" class="work_link">
                    <button class="work_button work_modal_button">See live <img src="images/link-icon.svg"> </button>
                  </a>
                  <a href="${obj.sourceUrl}" class="work_link">
                    <button class="work_button work_modal_button">See source <img src="images/github-icon.png" alt="GitHub"></button>
                  </a>
                </div>
              </div>
            </div>
          </div>
  `;

  modalWindow.innerHTML = modalHtml;
}

// Form Validation Function

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
workSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('work_button')) {
    e.preventDefault();
    modalWindow.style.display = 'flex';
    addModal(workData[e.target.getAttribute('data-modal')]);
    const modalCloseIcon = document.querySelector('.modal_close_icon');
    modalCloseIcon.addEventListener('click', () => {
      modalWindow.style.display = 'none';
    });
  }
});
