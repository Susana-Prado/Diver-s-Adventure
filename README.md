## About the game

This is a side-scrolling game where a diver has to collect coins while avoiding obstacles in order to reach the treasure. Each coin is 1 point and hitting an obstacle three times ends the game. The goal is to get the highest score and get the treasure.



## Used Web Technologies

- HTML5 / CSS

- JavaScript for the game logic

  - OOP

  - Canvas & DOM

    

## MVP (DOM - CANVAS)

This is a game where the player can move to collect coins

- Create 4 states (splashscreen page, game page, gameover page, youwin page)

- Start the game with "Start button"

- Use an animation rendering loop to simulate movement

  - Diver moves forward by default
  - Obstacles scroll to the left

- Diver moves up and down with the keyboard arrows 

- Use collision logic to control game state

- End game after 3 collisions

- Win if diver gets the treasure

- Restart on game over/ you win screen

  

## Backlog

- Track score / lives

- Add audio effects

- Increase speed as time goes on 

- Levels

  

## Game Plan

### HTML

- container for gaming screen
- game title
- canvas

### CSS

- centered game screen

### Javascript

#### Tasks

- Main - buildDom
- Main - buildSplashScreen
- Main - buildGameScreen
- Main - buildGameOverScreen
- Main - buildYouWinScreen
- Game - buildCanvas
- Game - clearCanvas
- Game - updateCanvas
- Game - drawCanvas
- Game - setGameOver
- Game - setYouWin
- Diver - drawImage
- Diver - setDirection
- Diver - updatePosition
- Diver - removeLife
- Obstacle - drawImage
- Obtscale - setPosition
- Obstacle - removeObstacle
- Coins - drawImage
- Coins -  removeCoins



#### Functions

Basic (startGame, moveDiver, setObstacles, setCoins, checkCollision, checkTreasure)

Update (game screen, positions)

##### States & States Transitions

```javascript
- splashScreen()
  - buildSplash()
  - addEventListener(startGame)
  
- startGame()
  - create new Game()
  - game.start()
  
- gameOver()
  - buildGameOver()
  - addEventListener(startGame) 

- youWin()
	-buildYouWin()
	-addEventListener(startGame)
```

##### main.js

```javascript
buildDom(){ 
}

buildSplashScreen(){
}

removeSplashScreen(){
}

buildGameScreen(){
}

removeGameScreen(){
}

buildGameOverScreen(){
}

removeGameOverScreen(){
}

buildYouWinScreen(){
}

removeYouWinScreen(){
}

startGame(){
}

endGame(){
}
```

##### game.js

```javascript
class Game(){
  constructor (gameScreen){
    this.canvas;
    this.ctx;
    this.obstacles;
    this.diver;
    this.coins;
    this.gameIsOver;
    this.gameScreen;
    this.score;
    this.lives;
  }
    
drawCanvas(){ 
}
    
startLoop(){
}
    
displayDiver(){
    
}
     
displayObstacle{
    //obstacle's x decrease to scroll left - generate y randomly
}
    
displayCoins(){
    //generate randomly
}

clearCanvas(){
}

updateCanvas(){
}
    
checkCollisions{
}

setGameOver(){
    //after 3 collisions with obstacles
    //restart game on click button
    //display current score and reset
    //reset obstacles and coins
}
    
setYouWin(){
    //collision with treasure
    //restart game on click button
    //display current score and reset
    //reset obstacles and coins
}
}
```

##### diver.js

```javascript
class Diver(){
    this.canvas;
    this.x;
    this.y;
    this.size;
    this.direction;
    this.speed;
    this.lives;
}

draw(){
    
}

setDirection(){
    
}

goDown(){
    
}

goUp(){
    
}

updatePosition(){
    
}

removeLife(){
    
}


```

##### obstacle.js

```javascript
class Obstcale(){
    this.canvas;
    this.x;
    this.y;
    this.size;
    //this.speed;
}

drawObstacle(){
    
}

updatePosition(){
    
}

isInsideScreen(){
    
}

removeObstacle){
    
}


```



##### coins.js

```javascript
Coins(){
    this.canvas;
    this.x;
    this.y;
    this.size;
    this.speed;
}

draw(){
    
}

updatePosition(){
    
}

isInsideScreen(){
    
}

removeCoins(){
    
}



```



## Links

### Trello 

https://trello.com/b/siIE4x6l/project-1

### Git

URls for the project repo and deploy



