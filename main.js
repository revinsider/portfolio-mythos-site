import './app/scss/style.scss';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const main = document.querySelector('#main')
const footer = document.querySelector('#footer')
const btnOpen = document.querySelector('#btnOpen')
const btnClose = document.querySelector('#btnClose')
const menuTopNav = document.querySelector('#menuTopNav')
const breakpoint = window.matchMedia('(width < 43.75em)')
const overlay = document.querySelector('#overlay')

const setupTopNav = () => {
  if (breakpoint.matches) {
    menuTopNav.setAttribute('inert', '')
  } else {
    menuTopNav.removeAttribute('inert')
    disableMobileMenu()
  }
}
setupTopNav()

// Open Mobile Menu
btnOpen.addEventListener('click', () => {
  btnOpen.setAttribute('aria-expanded', 'true')
  main.setAttribute('inert', '')
  footer.setAttribute('inert', '')
  menuTopNav.removeAttribute('inert')
  menuTopNav.style.transitionDuration = '300ms'
  overlay.style.transitionDuration = '300ms'
  disableBodyScroll(menuTopNav);
  btnClose.focus();
})

// Close Mobile Menu
btnClose.addEventListener('click', () => {
  btnOpen.setAttribute('aria-expanded', 'false')
  main.removeAttribute('inert')
  footer.removeAttribute('inert')
  menuTopNav.setAttribute('inert', '')
  enableBodyScroll(menuTopNav)
  btnOpen.focus();

  setTimeout(() => {
    menuTopNav.removeAttribute('style')
    overlay.removeAttribute('style')

  }, 400);
})

function disableMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  main.removeAttribute('inert');
  footer.removeAttribute('inert');
  enableBodyScroll(menuTopNav);
  menuTopNav.removeAttribute('style');
  overlay.removeAttribute('style');
}

breakpoint.addEventListener('change', () => {
  setupTopNav()
})

