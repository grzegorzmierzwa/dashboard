
function toggleMenu(visible) {
  document.querySelector('.menu-sidebar').classList.toggle('show', visible)
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});