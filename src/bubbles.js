class Bubble {
    constructor(canvas, speedY){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.speed = speedY;
        this.x = diver.x;
        this.y = diver.y;
        this.size = Math.random() * 7 + 3;
        this.speed = speedY;
        this.color = 'blue';
    }

    updatePosition(){
        this.x -= this.diver.speed;
        this.y += this.speedY;
        this.draw();
    }

    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }


}