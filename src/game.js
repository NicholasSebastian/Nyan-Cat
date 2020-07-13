import initializeControls from "./controls";
import NyanCat from "./objects/nyancat";

let player;

export function Start() {
  player = new NyanCat(20, 20);
  initializeControls(player);
}

export function Update() {
  player.update();
}

export function Animate() {
  player.animate();
}

export function Render() {
  player.render();
}
