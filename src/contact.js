const contact = () => {
  const content = document.getElementById('content');
  content.classList.add('content');

  const contactTitle = document.createElement('h4');
  contactTitle.innerHTML = 'Our Contact';
  contactTitle.classList.add('contact_title');

  const cardContent = document.createElement('div');
  cardContent.classList.add('card_contact');
  cardContent.innerHTML = `
    <h3>Street: <span class="contact_span">1845 Longboard Alley</span></h3>
    <h3>City: <span class="contact_span">Noosa Heads</span></h3>
    <h3>State: <span class="contact_span">Quensland</span></h3>
    <h3>Phone: <span class="contact_span">923-424-543</span></h3>
  `;
  content.appendChild(contactTitle);
  document.body.appendChild(content);
  content.appendChild(cardContent);
  document.body.classList.toggle('bg-contact');
};

export default contact;