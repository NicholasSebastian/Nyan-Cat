import Component from "../component";
import { canvas } from "../main";

class Star extends Component {
  constructor(x, y) {
    super(x, y);
  }

  update() {
    if (this.x < 0) this.x = canvas.width;
    this.x -= 1;
  }

  render() {
    this.context.fillStyle = "#fff";
    this.context.fillRect(this.x, this.y, 4, 4);
  }
}

function generateStars(stars, limit) {
  for (let i = 0; i < limit; i++) {
    stars.push(
      new Star(Math.random() * canvas.width, Math.random() * canvas.height)
    );
  }
}

export default generateStars;
