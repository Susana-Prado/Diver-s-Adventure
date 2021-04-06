class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.obstacles = [];
    this.diver = null;
    this.coins = [];
    this.gameIsOver = false;
    this.gameScreen = gameScreen;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
  }

  start() {
    this.livesElement = this.gameScreen.querySelector(".lives .value");
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    //create canvas
    this.canvas = document.getElementById("canvas1");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 800;
    this.canvas.height = 500;
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
      if (Math.random() > 0.96) {
        let randomY = Math.floor((this.canvas.height - 120) * Math.random());

        if (randomY > this.canvas.height / 2) {
          randomY = this.canvas.height - 120;
        } else {
          randomY = 0;
        }
        const obstacle = new Obstacle(this.canvas, randomY, 5);
        this.obstacles.push(obstacle);
      }

      //create coins

      if (Math.random() > 0.97) {
        let randomPositionY = Math.floor(
          (this.canvas.height - 10) * Math.random()
        );

        const coin = new Coin(this.canvas, randomPositionY, 5);
        this.coins.push(coin);
      }

      //clear canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      //Check if all obstacles are inside screen. Remove of the array obstacles outside screen
      this.obstacles = this.obstacles.filter((obstacle) => {
        return obstacle.isInsideScreen();
      });

      //Check if all coins are inside screen. Remove of the array coins outside screen
      this.coins = this.coins.filter((coin) => {
        return coin.isInsideScreen();
      });

      //diver is inside screen
      this.diver.screenCollision();

      //update obstacles position
      this.obstacles.forEach((obstacle) => {
        obstacle.updatePosition();
      });

      //update coins position
      this.coins.forEach((coin) => {
        coin.updatePosition();
      });

      //update diver position
      this.diver.updatePosition();

      //check  obstacle collisions
      this.checkCollisions();

      //check coin collision
      this.coinsCollisions();

      // Stop loop in case game over
      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }
      // update Game status
      this.updateGameStats();
    };

    window.requestAnimationFrame(loop);
  }

  checkCollisions() {
    this.obstacles.forEach((obstacle) => {
      if (this.diver.didCollide(obstacle)) {
        this.diver.removeLife();

        if (this.diver.lives === 0) {
          this.gameOver(); 
        }

        obstacle.x = 0 - obstacle.width; // remove obstacle if collision
      }
    });
  }

  coinsCollisions() {
    this.coins.forEach((coin) => {
      if (this.diver.collide(coin)) {
        this.score += 5;

        coin.x = 0 - coin.width; // remove coins if collision
      }
    });
  }

  gameOver() {
    this.gameIsOver = true; 
    endGame(this.score);
  }

  updateGameStats() {
    this.livesElement.innerHTML = this.diver.lives;
    this.scoreElement.innerHTML = this.score;
  }
}
