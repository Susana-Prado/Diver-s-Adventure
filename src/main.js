let game;
let splashScreen;
let gameScreen;
let gameOverScreen;

function buildDom(htmlString) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  return tempDiv.children[0];
}

//  Splash Screen
function createSplashScreen() {
  splashScreen = buildDom(`
        <main>
          <h1>Diver's Adventure</h1>
          <button>Press Start</button>
        </main>
      `);

  document.body.appendChild(splashScreen);

  const startButton = splashScreen.querySelector("button");
  startButton.addEventListener("click", startGame);
}

function removeSplashScreen() {
  splashScreen.remove();
}

// Game Screen

function createGameScreen() {
  gameScreen = buildDom(`
        <div>
            <header>
                <div class="lives">
                    <span class="label">Lives:</span>
                    <span class="value"></span>
                </div>
    
                <div class="score">
                    <span class="label">Score:</span>
                    <span class="value"></span>
                </div>
            </header>
    
            <canvas id="canvas1"></canvas>
        </div>
        `);

  document.body.appendChild(gameScreen);
  return gameScreen;
}

function removeGameScreen() {
  gameScreen.remove();
}

// Game Over screen

function createGameOverScreen() {
  gameOverScreen = buildDom(`
        <main>
            <h1>GAME OVER</h1>
            <p>You got <span>${game.score}</span> coins</p>
            <button>Try again!</button>
        </main>
        `);
  const button = gameOverScreen.querySelector("button");
  button.addEventListener("click", startGame);

  document.body.appendChild(gameOverScreen);
}

function removeGameOverScreen() {
  gameOverScreen.remove();
}

// Start and end game

function startGame() {
  removeSplashScreen();
  if (gameOverScreen) {
    removeGameOverScreen();
  }
  createGameScreen();

  game = new Game(gameScreen);
  game.start();
}

function endGame(score) {
  removeGameScreen();
  createGameOverScreen(score);
}

window.addEventListener("load", createSplashScreen);
