class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.obstacles = [];
    this.diver = null;
    this.coins = [];
    this.bubbles = [];
    this.treasure = null;
    this.gameIsOver = false;
    this.gameWin = false;
    this.gameScreen = gameScreen;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
    this.framesCounter = 0;
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
    this.diver = new Diver(
      this.canvas,
      5,
      "/images/black_suited_diver_perframe(2).png"
    );

    //create treasure

    const newTreasure = new Treasure(this.canvas, "images/treasure.png");
    this.treasure = newTreasure;

    //create timer

    this.timer = new Timer();
    this.timer.startTimer();

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
      this.framesCounter++;
      //create obstacles
      if (Math.random() > 0.95) {
        let randomY = Math.floor(this.canvas.height * Math.random());

        if (randomY > this.canvas.height / 2) {
          randomY = this.canvas.height;
        } else {
          randomY = 0;
        }
        const obstacle = new Obstacle(
          this.canvas,
          randomY,
          4,
          "images/seaweed_transparent_top.png"
        );
        this.obstacles.push(obstacle);
      }

      //create coins

      if (Math.random() > 0.97) {
        let randomPositionY = Math.floor(
          (this.canvas.height - 10) * Math.random()
        );

        const coin = new Coin(
          this.canvas,
          randomPositionY,
          4,
          "images/coin.png"
        );
        this.coins.push(coin);
      }

      // create bubbles

      const bubble = new Bubble(
        this.canvas,
        Math.random() * 1 - 0.5,
        this.diver
      );
      this.bubbles.push(bubble);

      //clear canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      //Update bubbles position

      for (let i = 0; i < this.bubbles.length; i++) {
        this.bubbles[i].updatePosition();
      }
      if (this.bubbles.length > 1000) {
        for (let i = 0; i < this.bubbles.length; i++) {
          this.bubbles.pop(this.bubbles[i]);
        }
      }

      //update diver position
      this.diver.updatePosition(this.framesCounter);

      //update obstacles position
      this.obstacles.forEach((obstacle) => {
        obstacle.updatePosition();
      });

      //update coins position
      this.coins.forEach((coin) => {
        coin.updatePosition();
      });

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

      // Update treasure position

      if (this.timer.value > 30) {
        this.treasure.draw();
        this.treasure.updatePosition();
      }

      //check  obstacle collisions
      this.checkCollisions();

      //check coin collision
      this.coinsCollisions();

      //check treasure collision
      this.getTreasure();

      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }

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

        const collisionSound = new Audio("audio/explosion.wav");
        collisionSound.volume = 0.2;

        collisionSound.play();
      }
    });
  }

  coinsCollisions() {
    this.coins.forEach((coin) => {
      if (this.diver.collide(coin)) {
        this.score += 5;

        coin.x = 0 - coin.width; // remove coins if collision

        const coinSound = new Audio("audio/coin(1).wav");
        coinSound.volume = 0.2;
        coinSound.play();
      }
    });
  }

  getTreasure() {
    if (this.diver.collisionTreasure(this.treasure)) {
      this.score += 100;

      this.treasure.x = 0 - this.treasure.width;

      this.youWin();

      const treasureSound = new Audio("audio/treasure.wav");
      treasureSound.volume = 0.3;
      treasureSound.play();
    }
  }

  gameOver() {
    this.gameIsOver = true;
    endGame(this.score);
  }

  youWin() {
    this.gameIsOver = true;
    winGame(this.score);
  }

  updateGameStats() {
    this.livesElement.innerHTML = this.diver.lives;
    this.scoreElement.innerHTML = this.score;
  }
}
