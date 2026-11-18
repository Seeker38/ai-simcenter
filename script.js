const topLink = document.querySelector('.back-to-top');
function updateTopLink() { topLink.hidden = window.scrollY < 650; }
window.addEventListener('scroll', updateTopLink, { passive: true });
updateTopLink();
