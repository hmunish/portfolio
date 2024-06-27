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
    img: 'images/projects/kips-snap-1.png',
    title: 'KIPS Restaurants & Ice Cream Parlor',
    description: "I designed, developed, deployed, and currently maintain kipsrestaurants.com, significantly enhancing their online presence and customer engagement. My role included creating a visually appealing and intuitive website that improved accessibility to menus, reservations, and updates, thereby boosting customer satisfaction and operational efficiency for Kips Restaurants.",
    modalDescription:
      'Chatz is a real time chatting application with features to chat with multiple contacts & groups at the same time. It supports features like real time messaging, file sharing, group chat, etc. It uses socket.io library for creating socket connections to the server, AWS S3 for uploading & sharing files.',
    tags: ['Full Stack Dev', 'AWS', 2023],
    technologies: [
      'JavaScript',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
    ],
    liveUrl: 'https://www.kipsrestaurants.com',
    sourceUrl: 'https://github.com/hmunish/chatz',
  },

  {
    id: 2,
    img: 'images/projects/hartfield-snap-1.png',
    title: 'Hartfield Investments',
    description: "At hartfieldinvestmentsmw.com, my responsibilities included creating a sophisticated and user-friendly platform that enhances accessibility to investment services, client resources, and updates. This project has streamlined information delivery and client interactions, contributing to Hartfield Investments' growth and client satisfaction.",
    modalDescription:
      "Mapty is an application to display workouts on the map & stores them on the browser's local storage for future reference. It's built using HTML5, CSS3, JavaScript & Leaflet library.",
    tags: ['Front End Dev', 'Leaflet', 2023],
    technologies: ['HTML', 'CSS', 'JavaScript', 'MVC', 'Leaflet'],
    liveUrl: 'https://hartfieldinvestmentsmw.com/',
    sourceUrl: 'https://github.com/hmunish/mapty',
  },
  {
    id: 3,
    img: 'images/projects/toproof-snap-1.png',
    title: 'Toproof Malawi',
    description: "At toproofmw.com, I orchestrated the creation, launch, and continuous upkeep of the website. Leveraging SEO and SEM strategies, I significantly increased visibility and attracted hundreds of new users monthly. This initiative centered on crafting a robust and user-friendly platform tailored for the roofing industry, enhancing access to services, project portfolios, and client testimonials. My integrated approach has notably strengthened Top Roof MW's online footprint, amplifying client engagement and operational effectiveness.",
    modalDescription:
      'Forkify is a web application to search for more than 1,000,000 recipes with features to adjust ingredients according to the servings. Moreover, users can upload their custom recipes & bookmark recipes for future use.',
    tags: ['Front End Dev', 'MVC', 2023],
    technologies: ['HTML', 'CSS', 'JavaScript', 'AJAX', 'MVC'],
    liveUrl: 'https://www.toproofmw.com/',
    sourceUrl: 'https://github.com/hmunish/forkify',
  },

  {
    id: 4,
    img: 'images/projects/pipeit-snap-1.png',
    title: 'PipeIt Malawi',
    description: "Through strategic development and an engaging animated business introduction video, I enhanced pipeitmw.com as a premier destination for pipe supplies. Leveraging my expertise in web design and video production, I effectively highlighted Pipe It MW's extensive product offerings, fostering increased customer engagement and brand visibility.",
    modalDescription:
      'Expense Tracker, crafted with React, Redux, Node, Express, and SQL, offers a streamlined mobile layout for effortless financial management. The integration of the RazorPay payment gateway ensures secure transactions, providing users with a seamless experience to track expenses on the go. Simplify your finances with our intuitive mobile solution.',
    tags: ['Full Stack Dev', 'Razorpay', 2023],
    technologies: ['React', 'Redux', 'Node', 'Express', 'SQL'],
    liveUrl: 'https://www.youtube.com/watch?v=jE9zOiKnK0k',
    sourceUrl: 'https://github.com/hmunish/expenzy',
  },

  {
    id: 5,
    img: 'images/projects/swg-snap-1.png',
    title: 'Steel World Group',
    description: 'I successfully developed and optimized steelworldgroup.com, implementing comprehensive SEO and SEM strategies that resulted in top rankings on Google search pages. This initiative enhanced their online visibility, effectively driving targeted traffic to showcase their steel products and services. Leveraging my expertise in both web development and digital marketing, I strategically positioned Steel World Group as a leading authority in the industry. This integrated approach not only increased customer inquiries but also facilitated significant business growth.',
    modalDescription:
      'Tic_Tac_Toe is a game which can be played against the computer or with any other human player. Player needs to draw a squence 3 X or 0 as per the turn in rows/columns/diagonally before the opponent. Each player takes turn alternatively until game is drawn',
    tags: ['Front End Dev', 'MVC', 2023],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://www.steelworldgroup.com',
    sourceUrl: 'https://github.com/hmunish/tic-tac-toe/',
  },
];
// const bioText = "I'm a Full-stack Web Developer passionate about creating clean, accessible code and enthusiastic about technology. Skilled in JavaScript and Ruby with a strong foundation in various frameworks. Swift language adaptation with a 95% collaboration success metric and strong communication skills.";
const bioText = "Welcome to my portfolio! With a passion for designing and developing websites and web applications, I bring creativity and technical expertise to every project. I specialize in creating visually stunning and highly functional websites tailored to your business needs. Additionally, I offer services in delivering captivating business introduction animated videos, SEO optimization, and engaging social media designs. Let’s work together to transform your digital presence and achieve your business goals!";
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
    // let techs = '';
    // i.technologies.forEach((j) => {
    //   techs += `<li class="work_tech_stack">${j}</li>`;
    // });

    // let tags = '';
    // i.tags.forEach((i) => {
    //   tags += `<li class="work_tags">${i}</li>`;
    // });

    const workCard = `<div class="work_card">
<div class="work_card_wrapper work_${i.id}">
  <img src="${i.img}" alt="Work ${i.id}" class="work_img" />
  <div class="work_img_wrapper work_${i.id}"></div>
  <div class="work_card_content_wrapper">
    <h3 class="work_title">${i.title}</h3>
    <p class="work_description">
      ${i.description}
    </p>
    <a href="${i.liveUrl}" class="work_link" target="_blank">
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
            <img src="${obj.img}" alt="Project ${obj.id}" class="work_img"/>
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
// workSection.addEventListener('click', (e) => {
//   if (e.target.classList.contains('work_button')) {
//     e.preventDefault();
//     modalWindow.style.display = 'flex';
//     addModal(workData[e.target.getAttribute('data-modal')]);
//     const modalCloseIcon = document.querySelector('.modal_close_icon');
//     modalCloseIcon.addEventListener('click', () => {
//       modalWindow.style.display = 'none';
//     });
//   }
// });
skillBox.addEventListener('click', toggleSkillSection);
contactForm.addEventListener('submit', validateContactForm, false);
