document.addEventListener('DOMContentLoaded', () => {
    const starRating = document.getElementById('starRating');
    const ratingValueInput = document.getElementById('ratingValue');
    const ratingForm = document.getElementById('ratingForm');
    const ratingsList = document.getElementById('ratingsList');
    let currentRating = 0;

    // Manejar la selección de estrellas
    starRating.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('fa-star')) {
            const value = parseInt(e.target.dataset.value);
            highlightStars(value);
        }
    });

    starRating.addEventListener('mouseout', () => {
        highlightStars(currentRating);
    });

    starRating.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-star')) {
            currentRating = parseInt(e.target.dataset.value);
            ratingValueInput.value = currentRating;
            highlightStars(currentRating);
        }
    });

    function highlightStars(value) {
        const stars = starRating.querySelectorAll('.fa-star');
        stars.forEach((star, index) => {
            if (index < value) {
                star.classList.remove('far'); // Estrella vacía
                star.classList.add('fas'); // Estrella rellena
            } else {
                star.classList.remove('fas'); // Estrella rellena
                star.classList.add('far'); // Estrella vacía
            }
        });
    }

    // Manejar el envío del formulario
    ratingForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const rating = parseInt(document.getElementById('ratingValue').value);
        const comment = document.getElementById('comment').value;

        if (!username || !rating || !comment) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        try {
            const response = await fetch('/api/ratings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, rating, comment })
            });

            if (response.ok) {
                alert('¡Valoración enviada con éxito!');
                ratingForm.reset();
                currentRating = 0; // Resetear estrellas
                highlightStars(0);
                loadRatings(); // Recargar valoraciones para mostrar la nueva
            } else {
                const errorData = await response.json();
                alert(`Error al enviar valoración: ${errorData.message || response.statusText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error de conexión al enviar la valoración.');
        }
    });

    // Función para cargar y mostrar valoraciones
    async function loadRatings() {
        try {
            const response = await fetch('/api/ratings');
            if (response.ok) {
                const ratings = await response.json();
                ratingsList.innerHTML = ''; // Limpiar valoraciones existentes

                if (ratings.length === 0) {
                    ratingsList.innerHTML = '<p>Aún no hay valoraciones. ¡Sé el primero en dejar una!</p>';
                    return;
                }

                ratings.forEach(rating => {
                    const ratingItem = document.createElement('div');
                    ratingItem.classList.add('rating-item');

                    const starsHtml = '⭐'.repeat(rating.rating) + '☆'.repeat(5 - rating.rating);

                    ratingItem.innerHTML = `
                        <p class="username">${rating.username}</p>
                        <p class="rating-stars">${starsHtml}</p>
                        <p class="comment">${rating.comment}</p>
                    `;
                    ratingsList.appendChild(ratingItem);
                });
            } else {
                console.error('No se pudieron cargar las valoraciones:', response.statusText);
                ratingsList.innerHTML = '<p>Error al cargar las valoraciones.</p>';
            }
        } catch (error) {
            console.error('Error al cargar las valoraciones:', error);
            ratingsList.innerHTML = '<p>Error de conexión al cargar las valoraciones.</p>';
        }
    }

    // Cargar valoraciones cuando la página se carga
    loadRatings();
});
