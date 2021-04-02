let contact = () => {
  const content = document.getElementById('content');
  content.classList.add('content');

  const contact_title = document.createElement('h4');
  contact_title.innerHTML = 'Our Contact'
  contact_title.classList.add('contact_title');

  const card_contact = document.createElement('div');
  card_contact.classList.add('card_contact');
  card_contact.innerHTML = `
    <h3>Street: <span class="contact_span">1845 Longboard Alley</span></h3>
    <h3>City: <span class="contact_span">Noosa Heads</span></h3>
    <h3>State: <span class="contact_span">Quensland</span></h3>
    <h3>Phone: <span class="contact_span">923-424-543</span></h3>
  `
  content.appendChild(contact_title)
  document.body.appendChild(content);
  content.appendChild(card_contact);
  document.body.classList.toggle('bg-contact')
}

export default contact;