const videoContainer = document.querySelector(".video-container");
let currentVideoIndex = 1;
const totalVideos = 5;

// Función para crear un video
function createVideo(index) {
  const video = document.createElement("video");
  video.src = `videos/gatito${index}.mp4`;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.classList.add("video-item");
  videoContainer.appendChild(video);
}

// Función para mover los videos
function moveVideos() {
  // Mueve la lista de videos hacia arriba
  videoContainer.style.transform = `translateY(calc(-50% - 8px))`;

  // Esperamos que la animación termine para eliminar el primer video
  setTimeout(() => {
    const videos = document.querySelectorAll(".video-item");
    const firstVideo = videos[0];
    firstVideo.remove(); // Elimina el primer video

    // Crea el siguiente video y lo agrega al final de la lista

    if(currentVideoIndex === totalVideos) {
        currentVideoIndex = 0;
    }

    currentVideoIndex++;
    createVideo(currentVideoIndex);

    // Restablece la posición del contenedor para que el segundo video entre en la vista
    videoContainer.style.transition = "none"; // Desactiva la transición para reiniciar el contenedor
    videoContainer.style.transform = "translateY(0)";

    // Después de que el contenedor vuelva a su posición original, habilitamos la transición nuevamente
    setTimeout(() => {
      videoContainer.style.transition = "transform 1s ease-in-out";
    }, 50);
  }, 1000); // La duración debe coincidir con la duración de la animación de deslizamiento
}

// Inicia la galería de videos
function init() {
  // Creamos los dos primeros videos
  createVideo(currentVideoIndex);
  createVideo(currentVideoIndex + 1);
  currentVideoIndex = 2

  // Inicia el ciclo de movimiento de videos
  setInterval(() => {
    moveVideos();
  }, 5000); // Se mueve cada 5 segundos
}

init();
