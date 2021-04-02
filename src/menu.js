let menu = () => {
  const content = document.getElementById('content');
  content.classList.add('content');
  
  const menu_div = document.createElement('div');
  menu_div.classList.add('menu_div')
  menu_div.innerHTML = `
    <div class="option1"></div>
    <div class="option2"></div>
    <div class="option3"></div>
  `
  content.appendChild(menu_div);

  document.body.appendChild(content);
  document.body.classList.add('body-bg-menu');
}

export default menu;