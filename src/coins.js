class Coin {
    constructor(canvas, positionY, speed){
        this.canvas = canvas;
        this.speed = speed;
        this.ctx = this.canvas.getContext('2d');
        this.x = this.canvas.width;
        this.y = positionY;
        this.width =  15;
        this.height =  15;
    }

    draw(){
        this.ctx.fillStyle = 'orange';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    updatePosition(){
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
