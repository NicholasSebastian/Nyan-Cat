import Component from "../component";
import { canvas } from "../main";

class Interface extends Component {
  constructor() {
    super(0, 0);
    this.score = 100;
  }

  update() {
    this.score += 10;
  }

  render() {
    this.context.fillStyle = "#fff";
    this.context.textAlign = "right";

    this.context.font = "50px Arial";
    this.context.fillText(this.score, canvas.width - 30, 65);

    this.context.font = "20px Arial";
    this.context.fillText("score", canvas.width - 30, 85);
  }
}

export default Interface;
