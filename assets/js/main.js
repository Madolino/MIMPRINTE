const menuBtn = document.querySelector('[data-menu-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
if (menuBtn && mobileMenu){
  menuBtn.addEventListener('click', () => {
    const open = mobileMenu.style.display === 'block';
    mobileMenu.style.display = open ? 'none' : 'block';
  });
}

function makeMessage(data){
  return [
    'Olá MIMPRIME! Gostaria de solicitar um orçamento.',
    '',
    `Nome: ${data.name || ''}`,
    `Telefone: ${data.phone || ''}`,
    `Email: ${data.email || ''}`,
    `Serviço: ${data.service || ''}`,
    `Quantidade: ${data.quantity || ''}`,
    `Prazo: ${data.deadline || ''}`,
    `Descrição: ${data.details || ''}`,
    '',
    'Vou enviar o ficheiro no WhatsApp ou por email.'
  ].join('\n');
}

document.querySelectorAll('[data-quote-form]').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const url = 'https://wa.me/244691080981?text=' + encodeURIComponent(makeMessage(data));
    window.open(url, '_blank', 'noopener');
  });
});

document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const service = link.dataset.service;
    const url = 'https://wa.me/244691080981?text=' + encodeURIComponent(`Olá MIMPRIME! Gostaria de um orçamento para ${service}.`);
    window.open(url, '_blank', 'noopener');
  });
});
