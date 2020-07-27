import { Start, Update, Animate, Render } from "./game";

export const canvas = document.getElementById("canvas");
export const context = canvas.getContext("2d");

const aspectRatio = { width: 16, height: 9 };
if (
  window.innerWidth / window.innerHeight <
  aspectRatio.width / aspectRatio.height
) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerWidth * (aspectRatio.height / aspectRatio.width);
} else {
  canvas.height = window.innerHeight;
  canvas.width = window.innerHeight * (aspectRatio.width / aspectRatio.height);
}

Start();

const frameRate = 60;
setInterval(update, 1000 / frameRate);
function update() {
  Update();
  Clear();
  Render();
}

const animFrameRate = 24;
setInterval(animate, 1000 / animFrameRate);
function animate() {
  Animate();
}

function Clear() {
  context.fillStyle = "#036";
  context.fillRect(0, 0, canvas.width, canvas.height);
}
