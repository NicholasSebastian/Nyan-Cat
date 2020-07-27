import initializeControls from "./controls";

import Interface from "./objects/userInterface";
import NyanCat from "./objects/nyancat";
import generateStars from "./objects/star";
import generateObstacles from "./objects/obstacle";

let player;
let stars = [];
let obstacles = [];
let ui;

export function Start() {
  generateStars(stars, 100);

  generateObstacles(obstacles, 5);

  player = new NyanCat(0, 300, obstacles);
  initializeControls(player);

  ui = new Interface();
}

export function Update() {
  stars.forEach((star) => star.update());
  player.update();
  obstacles.forEach((obstacle) => obstacle.update());
  ui.update();
}

export function Animate() {
  player.animate();
}

export function Render() {
  stars.forEach((star) => star.render());
  player.render();
  obstacles.forEach((obstacle) => obstacle.render());
  ui.render();
}
