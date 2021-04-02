function component() {
  const content = document.getElementById('content');
  content.classList.add('home-content');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML = 'The Tower'

  const copy = document.createElement('h4');
  copy.classList.add('copy');
  copy.innerHTML = 'Unique experience, every single time'

  content.appendChild(title);
  content.appendChild(copy);

  return content;
}