class Treasure{
    constructor(canvas, treasureImgSrc){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = 600;
        this.y = 300;
        this.width = 100;
        this.height = 80;
        this.image = new Image();
        this.image.src = treasureImgSrc;
        this.speed = 2;
    }

    draw() {
        this.ctx.fillStyle = "orange";
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    updatePosition() {
        this.x -= this.speed;
      }

}