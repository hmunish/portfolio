// DOM Elements
const mobileNav = document.querySelector('.mobile_nav');
const navOpenIcon = document.querySelector('.nav_icon');
const navCloseIcon = document.querySelector('.nav_close_icon');
const header = document.querySelector('.header_navbar');
const banner = document.querySelector('.banner');
const bio = document.querySelector('p.banner_content');
const workSection = document.querySelector('#work_section');
const modalWindow = document.querySelector('dialog');
const aboutSection = document.querySelector('#about_section');
const skillBox = document.querySelector('ul.skills_wrapper');
const skillList = document.querySelectorAll('ul.skills_list');
const skillCloseIcon = document.querySelectorAll('img.dropdown_arrow');
const contactSection = document.querySelector('#contact_section');
const contactForm = document.querySelector('.contact_form');
const formErrorMsg = document.querySelector('.form_error_msg');
const workData = [
  {
    id: 1,
    img: 'images/project-1.PNG',
    title: 'Multi Group Chat App',
    description:
      'Chatz is a real time chatting application with features to chat with multiple contacts & groups at the same time. It supports features like real time messaging, file sharing, group chat, etc. It uses socket.io library for creating socket connections to the server, AWS S3 for uploading & sharing files.',
    modalDescription:
      'Chatz is a real time chatting application with features to chat with multiple contacts & groups at the same time. It supports features like real time messaging, file sharing, group chat, etc. It uses socket.io library for creating socket connections to the server, AWS S3 for uploading & sharing files.',
    tags: ['Full Stack Dev', 'AWS', 2023],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
    ],
    liveUrl: 'https://chatz-p118.onrender.com/dashboard.html',
    sourceUrl: 'https://github.com/hmunish/chatz',
  },

  {
    id: 2,
    img: 'images/project-2.PNG',
    title: 'Mapty',
    description:
      "Mapty is an application to display workouts on the map & stores them on the browser's local storage for future reference. It's built using HTML5, CSS3, JavaScript & Leaflet library.",
    modalDescription:
      "Mapty is an application to display workouts on the map & stores them on the browser's local storage for future reference. It's built using HTML5, CSS3, JavaScript & Leaflet library.",
    tags: ['Front End Dev', 'Leaflet', 2023],
    technologies: ['HTML', 'CSS', 'JavaScript', 'MVC', 'Leaflet'],
    liveUrl: 'https://munish-mapty.netlify.app/',
    sourceUrl: 'https://github.com/hmunish/mapty',
  },
  {
    id: 3,
    img: 'images/project-3.PNG',
    title: 'Forkify',
    description:
      'Forkify is a web application to search for more than 1,000,000 recipes with features to adjust ingredients according to the servings. Moreover, users can upload their custom recipes & bookmark recipes for future use.',
    modalDescription:
      'Forkify is a web application to search for more than 1,000,000 recipes with features to adjust ingredients according to the servings. Moreover, users can upload their custom recipes & bookmark recipes for future use.',
    tags: ['Front End Dev', 'MVC', 2023],
    technologies: ['HTML', 'CSS', 'JavaScript', 'AJAX', 'MVC'],
    liveUrl: 'https://forkify-munish.netlify.app/',
    sourceUrl: 'https://github.com/hmunish/forkify',
  },

  {
    id: 4,
    img: 'images/project-4.PNG',
    title: 'Expenzy',
    description:
      'Expense Tracker, crafted with React, Redux, Node, Express, and SQL, offers a streamlined mobile layout for effortless financial management. The integration of the RazorPay payment gateway ensures secure transactions.',
    modalDescription:
      'Expense Tracker, crafted with React, Redux, Node, Express, and SQL, offers a streamlined mobile layout for effortless financial management. The integration of the RazorPay payment gateway ensures secure transactions, providing users with a seamless experience to track expenses on the go. Simplify your finances with our intuitive mobile solution.',
    tags: ['Full Stack Dev', 'Razorpay', 2023],
    technologies: ['React', 'Redux', 'Node', 'Express', 'SQL'],
    liveUrl: 'https://expenzy-app.onrender.com/',
    sourceUrl: 'https://github.com/hmunish/expenzy',
  },

  {
    id: 5,
    img: 'images/project-5.PNG',
    title: 'Tic Tac Toe',
    description:
      'Tic_Tac_Toe is a game which can be played against the computer or with any other human player. Player needs to draw a squence 3 X or 0 as per the turn in rows/columns/diagonally before the opponent. Each player takes turn alternatively until game is drawn.',
    modalDescription:
      'Tic_Tac_Toe is a game which can be played against the computer or with any other human player. Player needs to draw a squence 3 X or 0 as per the turn in rows/columns/diagonally before the opponent. Each player takes turn alternatively until game is drawn',
    tags: ['Front End Dev', 'MVC', 2023],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://tictactoe-munish.netlify.app/',
    sourceUrl: 'https://github.com/hmunish/tic-tac-toe/',
  },
];
const bioText = "I'm a Full-stack Web Developer passionate about creating clean, accessible code and enthusiastic about technology. Skilled in JavaScript and Ruby with a strong foundation in various frameworks. Swift language adaptation with a 95% collaboration success metric and strong communication skills.";
let bioCounter = 0;

// Adding bio animation
function writeBio() {
  if (bioCounter >= bioText.length) return;
  bio.textContent += bioText[bioCounter];
  bioCounter += 1;
  setTimeout(writeBio, 30);
}

// Adding work cards function
function addWorkCards() {
  workData.forEach((i, c) => {
    let techs = '';
    i.technologies.forEach((j) => {
      techs += `<li class="work_tech_stack">${j}</li>`;
    });

    let tags = '';
    i.tags.forEach((i) => {
      tags += `<li class="work_tags">${i}</li>`;
    });

    const workCard = `<div class="work_card">
<div class="work_card_wrapper work_${i.id}">
  <img src="${i.img}" alt="Work ${i.id}" class="work_img" />
  <div class="work_img_wrapper work_${i.id}"></div>
  <div class="work_card_content_wrapper">
    <h3 class="work_title">${i.title}</h3>
    <ul class="work_tags">
    ${tags}
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
  workSection.classList.toggle('blur');
  aboutSection.classList.toggle('blur');
  contactSection.classList.toggle('blur');
}

// Adding Modal Function

function addModal(obj) {
  let techStacks = '';
  obj.technologies.forEach((i) => {
    techStacks += `<li class="work_tech_stack">${i}</li>`;
  });
  let tags = '';
  obj.tags.forEach((i) => {
    tags += `<li class="work_tags">${i}</li>`;
  });
  const modalHtml = `
  <div class="work_modal_wrapper">
            <div class="work_modal_head_wrapper">
              <div class="work_modal_title_wrapper">
                <h3 class="work_title">${obj.title}</h3>
                <img src="images/close-icon.png" class="modal_close_icon" alt="Close">
              </div>
              <ul class="work_tags">
                ${tags}
              </ul>
            </div>
            <img src="images/project-${obj.id}.PNG" alt="Project ${obj.id}" class="work_img"/>
            <div class="work_img_wrapper work_${obj.id}" id="modal_img_wrapper"></div>
            <div class="work_modal_bottom_wrapper">
              <p class="work_description" id="modal_description">${obj.modalDescription}</p>
              <div class="work_modal_action_wrapper">
                <ul class="work_tech_stack" id="modal_tech_stack">
                  ${techStacks}
                </ul>
                <div class="work_modal_buttons_wrapper">
                  <a href="${obj.liveUrl}" class="work_link" target="_blank">
                    <button class="work_button work_modal_button">See live <img src="images/link-icon.svg"> </button>
                  </a>
                  <a href="${obj.sourceUrl}" class="work_link" target="_blank">
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

function validateContactForm(e) {
  if (e.target.email.value !== e.target.email.value.toLowerCase()) {
    e.preventDefault();
    formErrorMsg.style.display = 'block';
    formErrorMsg.textContent = 'Error: please enter email in lower case.';
  }
}

// Toggle skill section function
function toggleSkillSection(e) {
  // Validating if dropdown arrow is clicked
  if (e.target.classList.contains('dropdown_arrow')) {
    const skillNo = +e.target.dataset.index;
    skillList.forEach((skill, index) => {
      if (skillNo === index) {
        skill.classList.toggle('dp-none');
        skillCloseIcon[index].classList.toggle('close_icon');
      } else {
        skill.classList.add('dp-none');
        skillCloseIcon[index].classList.add('close_icon');
      }
    });
  }
}

// EVENT LISTENERS

// Adding work cards to work section from work data array
window.addEventListener('DOMContentLoaded', () => {
  writeBio();
  addWorkCards();
}, false);
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
skillBox.addEventListener('click', toggleSkillSection);
contactForm.addEventListener('submit', validateContactForm, false);
