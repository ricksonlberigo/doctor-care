window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  scrollNavBackground()
  showBackToTopButton()
}

function scrollNavBackground() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButton() {
  if (scrollY >= 550) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// Swiper js
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    784: {
      slidesPerView: 2,
    },
  },
})

// Scroll reveal js
ScrollReveal({
  origin: 'top',
  distance: '30px',
  reset: true,
}).reveal(`
#home .header__section, #home .content, #home .stats, #home .stats .stat,
#services .header__section, #services .service,
#about .header__section, #about .content,
#contact .header__section, #contact .content,
#footer .footer__brand, #footer .social__list
`)
