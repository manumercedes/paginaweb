document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para los enlaces del menú
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Botón "Volver al Inicio"
    const backToTopButton = document.getElementById('backToTop');

    // Muestra u oculta el botón basado en el scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Muestra el botón si el usuario ha bajado 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Desplaza la página hacia arriba al hacer clic en el botón
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Manejo básico del formulario de comentarios (solo frontend)
    const commentForm = document.querySelector('.comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que el formulario se envíe realmente

            // Aquí puedes añadir lógica para:
            // 1. Validar los campos del formulario.
            // 2. Mostrar un mensaje de éxito o error al usuario.
            // 3. (Lo más importante) Enviar los datos a un servidor (backend)
            //    usando Fetch API o XMLHttpRequest.
            //    Ejemplo conceptual:
            //    fetch('/api/comments', {
            //        method: 'POST',
            //        headers: { 'Content-Type': 'application/json' },
            //        body: JSON.stringify({
            //            name: document.getElementById('nombre').value,
            //            email: document.getElementById('email').value,
            //            comment: document.getElementById('comentario').value
            //        })
            //    })
            //    .then(response => response.json())
            //    .then(data => {
            //        console.log('Comentario enviado:', data);
            //        alert('¡Comentario enviado con éxito!');
            //        commentForm.reset(); // Limpia el formulario
            //        // Opcional: añadir el comentario a la lista dinámicamente
            //    })
            //    .catch(error => {
            //        console.error('Error al enviar el comentario:', error);
            //        alert('Hubo un error al enviar tu comentario.');
            //    });

            alert('Comentario enviado (solo demostración, no se guarda).');
            this.reset(); // Limpia el formulario
        });
    }
});