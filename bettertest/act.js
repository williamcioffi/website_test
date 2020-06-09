const navslide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navlinks = document.querySelectorAll('.nav-links li');
  
  //toggle nav
  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
    
    //animate 
    navlinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    
    //burger animation
    burger.classList.toggle('toggle');
  });
}

navslide();
