class Coin {
  constructor(canvas, positionY, speed, coinImgSrc) {
    this.canvas = canvas;
    this.speed = speed;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width;
    this.y = positionY;
    this.width = 20;
    this.height = 20;
    this.image = new Image();
    this.image.src = coinImgSrc;
  }

  draw() {
    this.ctx.fillStyle = "orange";
    //this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  updatePosition() {
    this.x -= this.speed;
    this.draw();
  }

  isInsideScreen() {
    const coinRight = this.x + this.width;
    const screenLeft = 0;
    const isInside = coinRight > screenLeft;
    return isInside;
  }
}
