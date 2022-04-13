

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




/* EVENTO SCROLL --------------------------------------- */

const item = document.querySelectorAll('[data-anime]');

const animeScroll = () => {

  //top da pagina
  const windowTop = window.pageYOffset + window.innerHeight * 0.75
  
  item.forEach(element => {
    //se distancia da tela para o topo for maior que a distancia do meu elemento para o topo
    if(windowTop > element.offsetTop){
      element.classList.add('animate')
    }else{
      element.classList.remove('animate')
    }
  })

  


}

//execução
animeScroll()

window.addEventListener('scroll', ()=>{
  animeScroll()
})



//////////////////////////////

/* Rellax */

const rallax = new Rellax('.rellax');


