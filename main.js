'use strict';

//Make navbar transport whe it tis on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);
  scrollIntoView(link);
});

// Handle 'contact me' btn

const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Home fading
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

//Show "arrow up" button when srolling down
const arrowUp = document.querySelector('.arrow_up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//Handle clic event on "arrowUp" btn
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

//Projects
const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');

console.log(projects.item(0));
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  console.log(filter);

  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category_btn.selected');
  active.classList.remove('selected');
  const target =
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anime-out');
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === 'all' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anime-out');
  }, 200);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
