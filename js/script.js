

const nav = document.querySelector('.nav')
const botao = document.querySelector('#icone')

function ativarMenu(){
  nav.classList.toggle('active')
}

botao.addEventListener('click', ativarMenu)