const menu = () => {
  const content = document.getElementById('content');
  content.classList.add('content');

  const menuDiv = document.createElement('div');
  const menuTitle = document.createElement('h2');
  menuTitle.classList.add('menu_title');
  menuTitle.innerHTML = 'Our Foods';

  menuDiv.classList.add('menu_div');
  menuDiv.innerHTML = `
    <div class="option1"></div>
    <div class="option2"></div>
    <div class="option3"></div>
  `;
  content.appendChild(menuTitle);
  content.appendChild(menuDiv);


  document.body.appendChild(content);
  document.body.classList.toggle('bg-menu');
};

export default menu;