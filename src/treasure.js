class Treasure{
    constructor(canvas, speed, treasureImgSrc){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = 600;
        this.y = 350;
        this.width = 150;
        this.height = 100;
        this.image = new Image();
        this.image.src = treasureImgSrc;
        this.speed = speed;
    }

    draw() {
        this.ctx.fillStyle = "orange";
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    updatePosition() {
        this.x -= this.speed;
        this.draw();
      }

      isInsideScreen() {
        const treasureRight = this.x + this.width;
        const screenLeft = 0;
        const isInside = treasureRight > screenLeft;
        return isInside;
      }
}