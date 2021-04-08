class Treasure{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = 600;
        this.y = 400;
        this.width = 40;
        this.height = 20;
    }

    draw() {
        this.ctx.fillStyle = "orange";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}