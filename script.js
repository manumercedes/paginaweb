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
   // Alternar visibilidad del menú
  function toggleMenu() {
    const menu = document.getElementById("accMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  }

  // Cambiar tamaño del texto
  function changeFontSize(delta) {
    const elements = document.querySelectorAll("body, body *:not(.acc-menu):not(.acc-menu *)");
    elements.forEach(el => {
      const currentSize = window.getComputedStyle(el).fontSize;
      const newSize = Math.max(10, parseFloat(currentSize) + delta);
      el.style.fontSize = newSize + "px";
    });
  }

  // Alternar modo de alto contraste
  function toggleContrast() {
    document.body.classList.toggle("high-contrast");
  }

  // Alternar modo lupa
  function toggleZoom() {
    document.body.classList.toggle("zoomed");
  }