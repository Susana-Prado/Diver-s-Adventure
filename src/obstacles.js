class Obstacle {
    constructor(canvas, positionY, speed){
        this.canvas = canvas;
        this.speed = speed;
        this.ctx = this.canvas.getContext('2d');
        this.x = this.canvas.width;
        this.y = positionY;
        this.width =  20;
        this.height =  50;
    }

    draw(){
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    updatePosition(){
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


