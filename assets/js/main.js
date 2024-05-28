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
            centeredSlides: false,
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

