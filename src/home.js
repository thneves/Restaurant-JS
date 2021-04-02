let home = () => {
  const content = document.getElementById('content');
  content.classList.add('content');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML = 'The Tower'

  const copy = document.createElement('h4');
  copy.classList.add('copy');
  copy.innerHTML = 'Unique experience, every time';

  content.appendChild(title);
  content.appendChild(copy);

  document.body.appendChild(content);
}

export default home;

