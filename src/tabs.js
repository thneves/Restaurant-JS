const body = document.querySelector('body');
body.classList.add('body-bg')
const nav = document.createElement('nav');
nav.classList.add('nav');
nav.innerHTML = `
  <a href="#" class="tabs" id="home">Home</a>
  <a href="#" class="tabs" id="menu">Menu</a>
  <a href="#" class="tabs" id="contact">Contact</a>
  `;
body.appendChild(nav);