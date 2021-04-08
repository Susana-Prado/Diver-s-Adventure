class Bubble {
    constructor(canvas, speedY, diver){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.speed = speedY;
        this.x = diver.x + 80;
        this.y = diver.y + 20;
        this.size = Math.random() * 3 + 3;
        this.diver = diver;
    }

    updatePosition(){
        this.x -= this.diver.speed;
        this.y += this.speed;
        this.draw();
    }

    draw(){
        this.ctx.fillStyle = '#D6EAF8 ';
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    }


}