## About the game

This is a side-scrolling game where a diver has to collect coins while avoiding obstacles in order to reach the treasure. Each coin is 5 points and hitting an obstacle 5 times ends the game. The goal is to get the highest score and get the treasure.



## Used Web Technologies

- HTML5 / CSS

- JavaScript for the game logic

  - OOP

  - Canvas & DOM

    

## MVP (DOM - CANVAS)

This is a game where the player moves up and down to collect coins

- Create 3 states (splashscreen page, game page, gameover page)

- Start the game with "Start button"

- Use an animation rendering loop to simulate movement

  - Diver moves forward by default
  - Obstacles scroll to the left

- Diver moves up and down with the keyboard arrows 

- Use collision logic to control game state

- End game after 5 collisions

- Restart on game over

  

## Backlog

- Track score / lives

- Add audio effects

- Create sprites 

- Replace objects with images

- Create bubbles coming out of the diver

- Win if diver gets the treasure

- Create a 4th state - You win screen

  

## Game Plan

### HTML

- container for gaming screen
- game title
- canvas

### CSS

- centered game screen
- styles

### Javascript

#### Functions

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

winGame(){
    
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
    this.bubbles;
    this.treasure;
    this.gameIsOver;
    this.gameWin;
    this.gameScreen;
    this.score;
    this.livesElement;
    this.scoreElement;
    this.framesCounter;
  }
    
start(){ 
}
    
startLoop(){
   loop();
}
        
checkCollisions{
}

getTreasure(){
}

gameOver(){
    //after 5 collisions with obstacles
    //restart game on click button
    //display current score and reset
    //reset obstacles and coins
}
    
youWin(){
    //collision with treasure
    //restart game on click button
    //display current score and reset
    //reset obstacles and coins
}
    
updateGameStats(){
}
}
```

##### diver.js

```javascript
class Diver(){
    this.canvas;
    this.ctx;
    this.lives;
    this.x;
    this.y;
    this.direction;
    this.width;
    this.height;
    this.speed;
    this.image;
    this.image.src;
    this.frames;
    this.framesIndex;
}

draw(){
    
}

animate(){
    
}

setDirection(){
    
}

updatePosition(){
    
}

removeLife(){
    
}

screenCollision(){
    
}

didCollide(){
    
}


```

##### obstacle.js

```javascript
class Obstcale(){
    this.canvas;
    this.speed;
    this.ctx;
    this.x;
    this.y;
    this.width;
}

draw(){
    
}

updatePosition(){
    
}

isInsideScreen(){
    
}

```



##### coins.js

```javascript
Coins(){
    this.canvas;
    this.speed;
    this.ctx;
    this.x;
    this.y;
    this.width;
    this.height;
    this.image;
}

draw(){
    
}

updatePosition(){
    
}

isInsideScreen(){
    
}

```



##### bubbles.js

```javascript
class Bubble {
    constructor(){
        this.canvas;
        this.ctx;
        this.speed;
        this.x;
        this.y ;
        this.size;
        this.diver;
    }

    updatePosition(){
       
    }

    draw(){
       
    }

    isInsideScreen() {
       
      }
}
```



##### treasure.js

```javascript
class Treasure{
    constructor(){
        this.canvas;
        this.ctx;
        this.x;
        this.y;
        this.width;
        this.height;
        this.image;
        this.speed;
    }

    draw() {
       
    }

    updatePosition() {
     
      }
}
```



##### timer.js

```
class Timer{
    constructor(){
        this.value;
    }

    startTimer(){
    }

}

```



## Links

### Trello 

https://trello.com/b/siIE4x6l/project-1

### Git

URls for the project repo and deploy

https://susana-prado.github.io/Diver-s-Adventure/



