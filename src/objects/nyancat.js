import Component from "../component";
import { canvas } from "../main";

class NyanCat extends Component {
  constructor(x, y, obstacles) {
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
      Trail_Width: 150,
    };
    this.texture.Texture.src = "../../assets/cat.png";
    this.obstacles = obstacles;
  }

  update() {
    // Movement.
    if (this.controls.Left) this.x -= 3;
    if (this.controls.Right) this.x += 3;
    if (this.controls.Up) this.y -= 3;
    if (this.controls.Down) this.y += 3;

    // Position clamping.
    if (this.x > canvas.width - 150) this.x -= 3;
    if (this.x < -50) this.x += 3;
    if (this.y > canvas.height - 60) this.y -= 3;
    if (this.y < 0) this.y += 3;

    // Collision.
    this.obstacles.forEach((obstacle) => {
      // insert code here.
    });
  }

  animate() {
    // Animation Loop.
    this.texture.Current = (this.texture.Current + 1) % this.texture.Frames;
  }

  render() {
    // Render the cat.
    this.context.drawImage(
      this.texture.Texture,
      0,
      this.texture.Current * this.texture.Height,
      this.texture.Width,
      this.texture.Height,
      this.x,
      this.y,
      150,
      60
    );
    // Render the rainbow trail.
    for (let i = 1; i <= Math.ceil(this.x / 42); i++) {
      this.context.drawImage(
        this.texture.Texture,
        0,
        this.texture.Current * this.texture.Height,
        this.texture.Trail_Width,
        this.texture.Height,
        this.x - 42 * i,
        this.y,
        45,
        60
      );
    }
  }
}

export default NyanCat;
