// Egyszerű menüvezérlés mobilra
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('menu-btn');
  const nav = document.querySelector('.main-nav');
  if(!btn || !nav) return;
  btn.addEventListener('click', () => {
    const visible = nav.style.display === 'flex';
    nav.style.display = visible ? 'none' : 'flex';
    if(window.innerWidth <= 700) nav.style.flexDirection = 'column';
  });
  const links = document.querySelectorAll('.main-nav a');
  links.forEach(a => {
    try {
      if(location.pathname.endsWith(a.getAttribute('href'))) {
        a.classList.add('active');
      }
    } catch(e){}
  });
});