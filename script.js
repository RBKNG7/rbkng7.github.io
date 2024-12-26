// Actualiza las coordenadas del ratón en tiempo real
document.addEventListener("mousemove", (event) => {
  const coordinates = document.getElementById("mouse-coordinates");
  coordinates.innerHTML = `X: ${event.clientX}<br>Y: ${event.clientY}`;
});
