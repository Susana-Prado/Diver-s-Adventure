class Diver {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d')
    this.lives = lives;
    this.x = 150;
    this.y = 200;
    this.direction = 0;
    this.width = 20;
    this.height = 20;
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

  handleScreenCollision() {
    const screenTop = 0;
    const screenBottom = this.canvas.height;

    const diverTop = this.y;
    const diverBottom = this.y + this.height;

    if (diverBottom >= screenBottom) this.setDirection("up");
    else if (diverTop <= screenTop) this.setDirection("down");
  }

  didCollide(obstacle) {
    const diverLeft = this.x;
    const diverRight = this.x + this.width;
    const diverTop = this.y;
    const diverBottom = this.y + this.heigth;

    
    const obstacleLeft = obstcale.x;
    const obstcaleRight = obstcale.x + obstcale.width;
    const obstcaleTop = obstcale.y;
    const obstcaleBottom = obstcale.y + obstcale.heigth;

   
    const crossLeft = obstacleLeft <= diverRight && obstcaleLeft >= diverLeft;
    const crossRight = obstcaleRight >= diverLeft && obstcaleRight <= diverRight;
    const crossBottom = obstcaleBottom >= diverTop && obstcaleBottom <= diverBottom;
    const crossTop = obstcaleTop <= diverBottom && obstcaleTop >= diverTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)){
        return true;
    } else {
        return false
    }
  }
}
