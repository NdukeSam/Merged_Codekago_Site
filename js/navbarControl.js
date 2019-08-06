let homeMenu = () => {
  let overlayNav = document.querySelector('#overlay-nav');
  console.log(overlayNav);
  overlayNav.style.display = 'block';
  overlayNav.classList.add('transform');
}
let hideHomeMenu = () => {
  let overlayNav = document.getElementById('overlay-nav');
  overlayNav.style.display = 'none';
}
let hideMobileMenu = () => {
  let overlay = document.getElementById('mobile-nav');
  overlay.style.display = 'none';
  if (overlay.style.display == 'none') {
    let targetNav = document.getElementById('tab-display');
    targetNav.style.zIndex = 99;
  }
}
let mobileMenu = () => {
  let mobileOverlay = document.getElementById('mobile-nav');
  mobileOverlay.style.display = 'block';
  if (mobileOverlay.style.display == 'block') {
    let targetNav = document.getElementById('tab-display');
    targetNav.style.zIndex = 0;
  }
}
