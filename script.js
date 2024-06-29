const button = document.getElementById('change-text');

button.addEventListener('click', () => {
  const paragraph = document.querySelector('p');
  paragraph.textContent = 'Thanks for visiting my website!';
});

