window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  scrollNavBackground()
  showBackToTopButton()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(testimonials)
  activateMenuAtCurrentSection(contact)
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

function activateMenuAtCurrentSection(section) {
  // Linha alvo
  const targetLine = scrollY + innerHeight / 2

  // Topo da seção
  const sectionTop = section.offsetTop
  // Tamanho da seção
  const sectionHeight = section.offsetHeight

  // verificando se a linha alvo da seção chegou ao topo ou passou
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // Final da seção
  const sectionEndsAt = sectionTop + sectionHeight

  // Verificando se a linha da seção chegou ao seu fim
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // Limites da seção onde elá deve passar do topo mas não pode passar do final
  const sectionsBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  // Pegando os ID's das seções
  const sectionId = section.getAttribute('id')
  // Pegando os links do menu
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionsBoundaries) {
    menuElement.classList.add('active')
  }
}

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
#testimonials .header__section, #testimonials .content,
#contact .header__section, #contact .content,
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
