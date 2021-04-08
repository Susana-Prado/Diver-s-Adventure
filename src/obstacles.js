class Obstacle {
  constructor(canvas, positionY, speed, obstacleImgSrc) {
    this.canvas = canvas;
    this.speed = speed;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width;
    if (positionY > 0) {
      this.image = new Image();
      this.image.src = 'images/seaweed_transparent.png';
      let randomHeight = Math.random() * (this.canvas.height / 3) + 60;
      this.y = positionY - randomHeight;
      this.height = randomHeight;
    } else {
      this.image = new Image();
      this.image.src = obstacleImgSrc;
      this.y = positionY;
      this.height = Math.random() * (this.canvas.height / 3) + 60;
    }
    this.width = 100;
  }

  draw() {
    this.ctx.fillStyle = "green";
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  updatePosition() {
    this.x -= this.speed;
    this.draw();
  }

  isInsideScreen() {
    const obstacleRight = this.x + this.width;
    const screenLeft = 0;
    const isInside = obstacleRight > screenLeft;
    return isInside;
  }
}
