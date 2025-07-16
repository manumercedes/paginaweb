 function toggleNavbar() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
  }

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".carousel-images");
    const images = document.querySelectorAll(".carousel-images img");
    let index = 0;

    function moveCarousel() {
        index = (index + 1) % images.length;
        container.style.transform = `translateX(-${index * 100}vw)`;
    }

    setInterval(moveCarousel, 3000);
});
function toggleMenu() {
    const menu = document.getElementById("accMenu");
    const isVisible = menu.style.display === "block";
    menu.style.display = isVisible ? "none" : "block";
  }
   /*cookies*/
document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookieConsent');
  const acceptButton = document.getElementById('acceptCookies');

  // Si ya se aceptaron las cookies, no se muestra el banner
  if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookieBanner.style.display = 'none';
  } else {
    // Si no se han aceptado, se muestra el banner
    cookieBanner.style.display = 'flex';

    acceptButton.addEventListener('click', () => {
      // Oculta el banner y guarda la preferencia
      cookieBanner.style.display = 'none';
      localStorage.setItem('cookiesAccepted', 'true');
    });
  }
});
