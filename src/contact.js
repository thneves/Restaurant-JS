let contact = () => {
  const content = document.getElementById('content');
  content.classList.add('content');

  const card_contact = document.createElement('div');
  card_contact.classList.add('card_contact');
  card_contact.innerHTML = `
    <h3>Rua Professor Ademir Francisco, 201</h3>
    <h4>Barra da Lagoa, Floranopolis - SC</h4>
    <h5>Fone: 99541-5421</h5>
  `
 
  document.body.appendChild(content);
  content.appendChild(card_contact);
  document.body.classList.toggle('bg-contact')
}

export default contact;