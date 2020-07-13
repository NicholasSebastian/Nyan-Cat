let keymap = {
  a: "Left",
  A: "Left",
  d: "Right",
  D: "Right",
  w: "Up",
  W: "Up",
  s: "Down",
  S: "Down",
  p: "Shoot",
  P: "Shoot",
};

function initializeControls(player) {
  window.onkeydown = (e) => {
    if (typeof keymap[e.key] !== "undefined") {
      player.controls[keymap[e.key]] = true;
    }
  };
  window.onkeyup = (e) => {
    if (typeof keymap[e.key] !== "undefined") {
      player.controls[keymap[e.key]] = false;
    }
  };
}

export default initializeControls;
