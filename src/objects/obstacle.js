import Component from "../component";
import { canvas } from "../main";

class Obstacle extends Component {
  constructor() {
    let x, y, origin;
    origin = Math.floor(Math.random() * 3); // 0, 1, or 2.
    switch (origin) {
      case 1: // From above.
        x = Math.random() * canvas.width;
        y = -50;
        break;
      case 2: // From below.
        x = Math.random() * canvas.width;
        y = canvas.height + 50;
        break;
      default:
        // From the right.
        x = canvas.width + 50;
        y = Math.random() * canvas.height;
        break;
    }
    super(x, y);
    this.origin = origin;
    this.texture = new Image();
    this.texture.src = "../../assets/obstacle.png";
  }

  update() {
    switch (this.origin) {
      case 1:
        if (this.y > canvas.height) {
          this.y = -50;
          this.x = Math.random() * canvas.width;
        }
        this.y += 5;
        break;
      case 2:
        if (this.y < -100) {
          this.y = canvas.height + 50;
          this.x = Math.random() * canvas.width;
        }
        this.y -= 5;
        break;
      default:
        if (this.x < -100) {
          this.x = canvas.width + 50;
          y = Math.random() * canvas.height;
        }
        this.x -= 5;
        break;
    }
  }

  render() {
    this.context.drawImage(this.texture, this.x, this.y, 100, 100);
  }
}

function generateObstacles(obstacles, limit) {
  for (let i = 0; i < limit; i++) {
    obstacles.push(new Obstacle());
  }
}

export default generateObstacles;
