function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light');

  const img = document.querySelector("#profile img");

  if(html.classList.contains('light')) {
    img.setAttribute('src', 'assets/avatar-light.png');
    img.setAttribute('alt', 'Foto de um homem sorrindo, usando óculos escuros e camisa preta, no fundo azul e rosa')
  }else {
    img.setAttribute('src', 'assets/avatar.png');
    img.setAttribute('alt', 'Foto homen sorrindo, usando óculos e camisa preta, barba e fundo amarelo.')
  }
}