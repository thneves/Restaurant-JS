// const body = document.querySelector('body');
document.body.classList.add('body-bg-home')
const header = document.createElement('header');

const nav = document.createElement('nav');
nav.classList.add('nav');
nav.innerHTML = `
  <a href="#" class="tabs" id="home">Home</a>
  <a href="#" class="tabs" id="menu">Menu</a>
  <a href="#" class="tabs" id="contact">Contact</a>
  `;
header.appendChild(nav);
document.body.appendChild(header);