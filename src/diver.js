class Diver {
    constructor(canvas, lives){
        this.canvas = canvas;
        this.lives = lives;
        this.x = 150;
        this.y = 200;
        this.direction = 0;
        this.width = 20;
        this.height = 20;
        this.speed = 5;
    }

    draw(){
        ctx.fillStyle = '#66D3FA';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    setDirection(direction){
        if (direction === "up") {
            this.direction = -1;
        } else if (direction === "down") {this.direction = 1};
     }

    updatePosition(){
        this.y += this.direction * this.speed;
    }

    screenCollision(){
        const screenTop = 0;
        const screenBottom = this.canvas.height;

        const diverTop = this.y;
        const diverBottom = this.y + this.height;

        if(diverBottom >= screenBottom) {this.setDirection('up')}
        else if (diverTop <= screenTop) this.setDirection('down')

    }

    removeLife(){
        this.lives -= 1;
    } 

    
}

const diver = new Diver();
