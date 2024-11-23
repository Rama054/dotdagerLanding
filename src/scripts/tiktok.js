const videoContainer = document.querySelector(".video-container");
const videos = document.querySelectorAll(".video-item");
let currentVideoIndex = 0;

// Función para cambiar al siguiente video
function nextVideo() {
    currentVideoIndex++;
    if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0; // Volver al primer video después de mostrar todos
    }

    // Mover el contenedor para mostrar el siguiente video
    videoContainer.style.transform = `translateX(-${currentVideoIndex * 100}vw)`;
}

// Cambiar de video cada 5 segundos
setInterval(nextVideo, 5000);

// Iniciar el primer video
nextVideo();