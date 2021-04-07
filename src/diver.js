class Diver {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.lives = lives;
    this.x = 150;
    this.y = 200;
    this.direction = 0;
    this.width = 50;
    this.height = 30;
    this.speed = 5;
  }

  draw() {
    this.ctx.fillStyle = "#66D3FA";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  setDirection(direction) {
    if (direction === "up") {
      this.direction = -1;
    } else if (direction === "down") {
      this.direction = 1;
    }
  }

  updatePosition() {
    this.y += this.direction * this.speed;
    this.draw();
  }

  screenCollision() {
    const screenTop = 0;
    const screenBottom = this.canvas.height;

    const diverTop = this.y;
    const diverBottom = this.y + this.height;

    if (diverBottom >= screenBottom) {
      this.setDirection("up");
    } else if (diverTop <= screenTop) this.setDirection("down");
  }

  removeLife() {
    this.lives -= 1;
  }

  didCollide(obstacle) {
    const diverLeft = this.x;
    const diverRight = this.x + this.width;
    const diverTop = this.y;
    const diverBottom = this.y + this.height;

    const obstacleLeft = obstacle.x;
    const obstacleRight = obstacle.x + obstacle.width;
    const obstacleTop = obstacle.y;
    const obstacleBottom = obstacle.y + obstacle.height;

    const crossRight = diverRight >= obstacleLeft && diverRight <= obstacleRight;
    const crossLeft = diverLeft >= obstacleLeft && diverLeft <= obstacleRight;
    const crossTop = diverTop >= obstacleBottom && diverTop <= obstacleTop;
    const crossBottom = diverBottom >= obstacleTop && diverBottom <= obstacleBottom;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }

  collide(coin) {
    const diverLeft = this.x;
    const diverRight = this.x + this.width;
    const diverTop = this.y;
    const diverBottom = this.y + this.height;

    const coinLeft = coin.x;
    const coinRight = coin.x + coin.width;
    const coinTop = coin.y;
    const coinBottom = coin.y + coin.height;

    const crossLeft = coinLeft <= diverRight && coinLeft >= diverLeft;
    const crossRight = coinRight >= diverLeft && coinRight <= diverRight;
    const crossBottom = coinBottom >= diverTop && coinBottom <= diverBottom;
    const crossTop = coinTop <= diverBottom && coinTop >= diverTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }
}
