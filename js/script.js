

const nav = document.querySelector('.nav')
const botao = document.querySelector('#icone')

function ativarMenu(){
  nav.classList.toggle('active')
}

botao.addEventListener('click', ativarMenu)


//Efeito navbar

const menu = document.querySelector('.menu')

function efeitoNav(){
  menu.classList.toggle('stiky', window.scrollY > 0)
}

window.addEventListener('scroll', efeitoNav)




/* Slide----------------- */

new SimpleSlide({
  slide: 'quote',
  time: 5000,
  nav:true
});