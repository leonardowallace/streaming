/*=============== MOSTRAR MENU ===============*/
const nav = document.getElementById('nav'),
      headerMenu = document.getElementById('header-menu'),
      navClose = document.getElementById('nav-close')

    if(headerMenu){
        headerMenu.addEventListener('click', () =>{
            nav.classList.add('show-menu')
        })
    }

    /*Esconder Menu*/
    if(navClose){
        navClose.addEventListener('click', ()=>{
            nav.classList.remove('show-menu')
        })
    }

   /*===========REMOVE MENU MOBILE=============*/
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('show-menu'); // Remover a classe 'show-menu' do elemento de navegação
    });
});




/*===================LIKE=================*/
let likedButtons = document.querySelectorAll('.card__like');
likedButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Não carrega o link
        button.classList.toggle('ri-heart-line'); // Classe para ícone vazado
        button.classList.toggle('ri-heart-fill'); // Classe para ícone preenchido
    });
});



/*=============== SWIPER FILMES ===============*/
let swiperMovie = new Swiper('.movie__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 24,

    breakpoints:{
        440:{
            slidesPerView: 'auto',
        },
        768:{
            slidesPerView: 4,
        },
        1200:{
            slidesPerView: 5,
        }
    }
  });
  

/*=============== SWIPER NOVIDADES ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints:{
        440:{
            slidesPerView: 'auto',
            centeredSlides: true,
        },
        768:{
            slidesPerView: 4,
            centeredSlides: false,
        },
        1200:{
            slidesPerView: 5,
            centeredSlides: false,
        }
    }
  });

/*=============== ADD BLUR HEADER ===============*/

const blurHeader = () =>{
    const header = document.getElementById('header')
    
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)