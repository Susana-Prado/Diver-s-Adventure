class Obstacle {
  constructor(canvas, positionY, speed) {
    this.canvas = canvas;
    this.speed = speed;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width;
    if (positionY > 0) {
      let randomHeight = (Math.random() * (this.canvas.height/3) + 50) ;
      this.y = positionY - randomHeight;
      this.height = randomHeight;
    } else {
      this.y = positionY;
      this.height = (Math.random() * (this.canvas.height/3) + 50);
    }
    this.width = 30;
    // this.image = new Image();
    // this.image.src = obstacleImgSrc;
  }

  draw() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    //this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
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
