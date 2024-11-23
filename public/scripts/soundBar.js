const steps = 120;
const testData = [];
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const innerRadius = Math.min(canvas.width, canvas.height) / 2 * (3 / 4);  // Círculo interno
const outerRadius = Math.min(canvas.width, canvas.height) / 2 - 20;      // Círculo externo
const barHeight = 30;
console.log(innerRadius, outerRadius, barHeight);
const angStep = (Math.PI * 2) / steps;
const barWidth = (innerRadius * Math.PI * 2 / steps) * 0.9;
const barWidthHalf = barWidth * 0.5;
const startAngle = -Math.PI / 2; // 12 o'clock
let img = new Image();
img.src = "./img/profile.png"; // Ruta de la imagen

img.onload = () => {
    requestAnimationFrame(drawBars);
};

function drawBars() {
    //const color = h => 'rgb(' + (200 + h * 150) + ',' + (50 + h * 50) + ',' + (100 + h * 30) + ')';
    const color = h => `rgb(${300 + h * 150}, ${50 + h * 50}, ${100 + h * 30})`;

    animateTestData();

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar la imagen dentro del círculo interno
    ctx.save();  // Guardar el estado actual del canvas
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2); // Círculo interno
    ctx.clip(); // Cortar todo lo que esté fuera de este círculo

    ctx.drawImage(img, centerX - innerRadius, centerY - innerRadius, innerRadius * 2, innerRadius * 2); // Dibujar la imagen dentro del círculo
    ctx.restore(); // Restaurar el estado original del canvas

    // Dibujar las barras
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius - 4, 0, Math.PI * 2);

    for (let i = 0; i < steps; i++) {
        const h = testData[i];
        const ang = i * angStep + startAngle;
        const xAx = Math.cos(ang);  // Dirección del eje x
        const xAy = Math.sin(ang);
        ctx.setTransform(xAx, xAy, -xAy, xAx, centerX, centerY);

        ctx.fillStyle = color(h);
        ctx.fillRect(innerRadius, -barWidthHalf, h * barHeight, barWidth);
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);  // Resetear la transformación
    requestAnimationFrame(drawBars);
};

for (let i = 0; i < steps; i++) { testData.push(Math.random()) }
var sOffset = 0;
var speedFactor = 0.1;

function animateTestData() {
    var i = 0, t, phase = Math.sin(sOffset / 10) * 100;
    while (i < steps) {
        var t = testData[i];
        t += (Math.random() - 0.5) * 0.02;
        t += Math.sin(i * 0.6 + phase + sOffset) * (Math.random() * 0.01);
        t += Math.sin(i * 0.1 + sOffset * 2) * (Math.random() * 0.1);
        testData[i++] = t <= 0 ? 0 : t >= 1 ? 1 : t;
    }
    sOffset += speedFactor;  // Modificar esta línea para controlar la velocidad
}