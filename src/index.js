import './styles.css';
import './tabs';
import home from './home';
import menu from './menu';
import contact from './contact';
import reset from './reset';

home();

document.getElementById('home').addEventListener('click', () => {
  reset();
  home();
});

document.getElementById('menu').addEventListener('click', () => {
  reset();
  menu();
});

document.getElementById('contact').addEventListener('click', () => {
  reset();
  contact();
});