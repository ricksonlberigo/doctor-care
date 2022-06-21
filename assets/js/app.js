window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  scrollNavBackground()
  backToTopButtonShow()

  activeMenuCurrentSection()
}

function scrollNavBackground() {
  const nav = document.querySelector('#navigation')
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function backToTopButtonShow() {
  const backToTopButton = document.getElementById('backToTop')
  if (scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function activeMenuCurrentSection() {
  const sections = document.querySelectorAll('main section[id]')
  const checkpoints = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoints >= sectionTop
    const checkpointEnd = checkpoints <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('.nav__item a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('.nav__item a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* Não funciona no chrome
function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop

  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionsBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionsBoundaries) {
    menuElement.classList.add('active')
  }
}
*/

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// Scroll reveal js
ScrollReveal({
  origin: 'top',
  distance: '30px',
  reset: true,
}).reveal(`
#home .header__section, #home .content, #home .stats, #home .stats .stat,
#services .header__section, #services .service,
#about .header__section, #about .content,
#testimonials .header__section,
#contact .header__section, #contact .col-b,
#footer .footer__brand, #footer .social__list
`)

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
