class Bubble {
    constructor(canvas, speedY, diver){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.speed = speedY;
        this.x = diver.x;
        this.y = diver.y;
        this.size = Math.random() * 7 + 3;
        this.speed = speedY;
        this.diver = diver;
    }

    updatePosition(){
        this.x -= this.diver.speed;
        this.y += this.speedY;
        this.draw();
    }

    draw(){
        this.ctx.fillStyle = 'blue';
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    }


}