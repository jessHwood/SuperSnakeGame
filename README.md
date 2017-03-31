# SuperSnakeGame

# [Link to my Trello](https://trello.com/b/VjQSTc0L/supersnakegame)

![]("images/snakewireframe.png")


Building a classic snake game.  Upon starting the player moves the snake using the arrow keys.  The goal is to eat the red square.  Upon eating the red square the snake grows and the challenge increases, as it becomes harder for the snake to control its growing body.  The game ends when the snake collides with itself or hits a wall. 

First step is creating the game board itself.  Decided to use canvas as it seems to be a great tool for a game board and x/y coordinate control.  Made the board 450x450 and painted it a dark color - using yellow and red for the snake and food square.  

Starting with empty snake array to 5 cell snake at a cell width of 10 - filling snake on game loop interval of every 80ms.  Upon the snake hitting the food need to fill another grid square. 

Needs:
- set the direction of the snake
- control snake using keypress (arrows)
- create reset in which the game restarts and direction/snake resets to start
- figure out adding cells to the snake upon food eat
- create food within a single cell
- randomize the location of this food upon the snake eating it

Global variables:

- canvas height and width: 450 450
- cell width: 10
- default snake direction: right
- Snake array: start with 5 push as eat pop as no eat
- food: 10px randomize
- score
- player

Add init function in which the game initializes upon spacebar keydown and also use this function when the snake hits the wall border or collides into itself.

Create the snake collision function and call that in the same place that the snake game borders are being created so that all of the end game parameters are in one place.  Upon the end game I decided to create an alert including the player score.  Would like to store the player score and then use a compare check for win function but didn't have enough time.  Another upside of the alert is that currently there is a bit of a delay in the snake death function - a player can still use the arrow keys to recover itself as the game doesnt restart soon enough.  The alert function fixes this as it breaks the function from running again and just runs the alert for game restart.   

After full function of the game decided to style it with directions, used right gradient on directions div.  Moved score and player to the top of the game board so that the player can more easily see the score as they're playing.  Added some better fonts to give the game personality.  Added some CSS animation to the player change.  

