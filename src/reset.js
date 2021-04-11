export default function reset() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  document.body.classList.remove('bg-home', 'bg-menu', 'bg-contact');
}