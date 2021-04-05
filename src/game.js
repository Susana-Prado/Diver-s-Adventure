class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.obstacles = [];
    this.diver = null;
    this.gameIsOver = false;
    //this.gameScreen = gameScreen;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
  }

  start() {
    //create canvas
    this.canvas = document.getElementById("canvas1");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 600;
    this.canvas.height = 400;
    //Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //create diver
    this.diver = new Diver(this.canvas, 5);

    //Move diver up&down
    function handleKeyDown(event) {
      if (event.key === "ArrowUp") this.diver.setDirection("up");
      else if (event.key === "ArrowDown") this.diver.setDirection("down");
    }

    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.body.addEventListener("keydown", boundHandleKeyDown);

    this.startLoop();
  }

  startLoop() {
    const loop = () => {
      //create obstacles
      if (Math.random() > 0.95) {
        let randomY = Math.floor((this.canvas.height - 120) * Math.random());

        if (randomY > this.canvas.height / 2) {
          randomY = this.canvas.height - 120;
        } else {
          randomY = 0;
        }
        const newObstacle = new Obstacle(this.canvas, randomY, 5);
        this.obstacles.push(newObstacle);
      }

      //clear canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      //update obstacles position
      this.obstacles.forEach((obstacle) => {
        obstacle.updatePosition();
      });

      //update diver position
      this.diver.updatePosition();

      window.requestAnimationFrame(loop);
    };

    window.requestAnimationFrame(loop);
  }
}


