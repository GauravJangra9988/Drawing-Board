const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let brushWidth = 5; // Default brush width

// Set canvas width/height on window load
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

// Function to start drawing
const startDraw = (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  // Subtract canvas offset to get correct mouse position relative to canvas
};

// Function to draw
const drawing = (e) => {
  if (!isDrawing) return;
  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.lineWidth = brushWidth;
  ctx.stroke();
};

// Event listeners for drawing
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
