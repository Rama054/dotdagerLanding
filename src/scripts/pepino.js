const GRAVITY = 0.3; // Gravedad para el movimiento
const WIND = 0.5; // Viento lateral

function crearPepino(layer, activePepinos) {
    const pepino = document.createElement("div");
    pepino.classList.add("pepino");
    pepino.textContent = "🥒";

    // Tamaño aleatorio del pepino
    const tamaño = Math.random() * 100 + 50; // Entre 50 y 150
    pepino.style.fontSize = `${tamaño}px`;

    // Posición inicial aleatoria
    const inicioX = Math.random() * layer.offsetWidth;
    pepino.style.left = `${inicioX}px`;

    // Añadir al layer
    layer.appendChild(pepino);

    activePepinos.count++;

    let x = inicioX;
    let y = -200;
    let velocidadY = Math.random() * 3 + 1;
    let velocidadX = (Math.random() - 0.5) * 2;

    // Rotación (solo para algunos pepinos)
    const tieneRotacion = Math.random() < 0.9; // 50% de probabilidad
    let angulo = 0; // Ángulo inicial de rotación
    let velocidadRotacion = Math.random() * 10 + 1; // Velocidad de rotación entre 1 y 5 grados por frame

    if (Math.random() < 0.5) {
        velocidadRotacion *= -1; // Rotar en sentido contrario aleatoriamente
    }

    
    function animar() {
        velocidadY += GRAVITY;
        velocidadX += (Math.random() - 0.5) * WIND;
        x += velocidadX;
        y += velocidadY;

        // Actualizar posición y rotación
        angulo += tieneRotacion ? velocidadRotacion : 0; // Solo rota si tieneRotacion es true
        pepino.style.transform = `translate(${x}px, ${y}px) rotate(${angulo}deg)`;

        if (y < layer.offsetHeight + 50 && x > -50 && x < layer.offsetWidth + 50) {
            requestAnimationFrame(animar);
        } else {
            activePepinos.count--;
            pepino.remove();
            if (activePepinos.count === 0) {
                layer.classList.add("hidden");
            }
        }
    }

    animar();
}

export default function iniciarLluvia() {
    const layer = document.getElementById("pepinoLayer");
    layer.classList.remove("hidden");

    const activePepinos = { count: 0 };

    const intervalo = setInterval(() => crearPepino(layer, activePepinos), 10);

    setTimeout(() => {
        clearInterval(intervalo);
    }, 2500);
}
