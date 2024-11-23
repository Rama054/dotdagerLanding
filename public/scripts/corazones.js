function createHeart() {
    const point = document.getElementById('point');

    const innerWidthPoint = point.offsetWidth;

    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.classList.add('heart');

    // Establecer un tamaño aleatorio
    const size = Math.random() * 2 + 1; // tamaño entre 1 y 3
    heart.style.fontSize = `${size}rem`;

    // Establecer la posición inicial en el centro de la pantalla
    heart.style.left = `${innerWidthPoint - 50}px`;
    heart.style.top = `${window.innerHeight / 2}px`;

    // Establecer un tiempo aleatorio para la animación
    const duration = Math.random() * 4 + 3; // Duración entre 3s y 7s
    heart.style.animationDuration = `${duration}s`;

    // Establecer animación aleatoria de dispersión
    const randomX = (Math.random() * 400 - 200) + 'px'; // Movimiento aleatorio en X entre -200px y 200px
    const randomY = (Math.random() * 200 - 100) + 'px'; // Movimiento aleatorio en Y
    heart.style.setProperty('--random-x', randomX);
    heart.style.setProperty('--random-y', randomY);

    // Establecer animación aleatoria de dispersión
    heart.style.animationName = 'rise, disperse';
    heart.style.animationTimingFunction = 'ease-in-out, ease-in-out';
    heart.style.animationDelay = `${Math.random() * 2}s`; // Retraso aleatorio

    // Agregar el corazón al body
    point.appendChild(heart);

    // Eliminar el corazón después de que termine su animación
    setTimeout(() => {
      heart.remove();
    }, duration * 1000); // Duración de la animación
  }

  // Generar corazones constantemente
  setInterval(createHeart, 700); // Crear un corazón cada 100ms