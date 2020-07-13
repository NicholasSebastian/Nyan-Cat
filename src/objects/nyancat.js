import Component from "../component";

class NyanCat extends Component {
  constructor(x, y) {
    super(x, y);
    this.controls = {
      Left: false,
      Right: false,
      Up: false,
      Down: false,
      Shoot: false,
    };
    this.texture = {
      Texture: new Image(),
      Current: 0,
      Frames: 12,
      Width: 506,
      Height: 200,
    };
    this.texture.Texture.src = "../../assets/cat.png";
  }

  update() {
    // Movement.
    if (this.controls.Left) this.x -= 3;
    if (this.controls.Right) this.x += 3;
    if (this.controls.Up) this.y -= 3;
    if (this.controls.Down) this.y += 3;
  }

  animate() {
    // Animation Loop.
    this.texture.Current = (this.texture.Current + 1) % this.texture.Frames;
  }

  render() {
    this.context.drawImage(
      this.texture.Texture,
      0,
      this.texture.Current * this.texture.Height,
      this.texture.Width,
      this.texture.Height,
      this.x,
      this.y,
      125,
      50
    );
  }
}

export default NyanCat;
