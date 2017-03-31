$(document).ready(function(){

// canvas variables
var canvas = $(".canvas")[0];
var ctx =  canvas.getContext("2d");
var width = $('.canvas').width();
var height = $('.canvas').height();


var cellWidth = 10;
var food; 
var snakeArray;
var d; //default direction
var score;
var player = 2;
var runAlert = true;

$('#score').html(score = 0);
paintCanvas();

$(document).keydown(function (e) {
var key = e.which;
if (key == "32") {
init();
}})
;
// adds keydown function to snake
      $(document).keydown(function (e) {
            var key = e.which;
            if (key == '37' && d != 'right') d = 'left';
            else if (key == '38' && d != 'down') d = 'up';
            else if (key == '39' && d != 'left') d = 'right';
            else if (key == '40' && d != 'up') d = 'down';
        });

function init() {
	d = "right"; 
	$('#score').html(score = 0);
	play();
	createSnake();
	createFood();
	playerChange();
	$('#player').html(" " + player);
	runAlert = true;
}

	
function play() {

	if (typeof gameLoop != "undefined") 
		clearInterval(gameLoop);
		gameLoop = setInterval(paintSnake, 80);
	
}

function playerChange() {

		if(player === 1) {
		player ++;
		$( ".playerTurn" ).toggleClass( "animated" );

	} else if (player === 2){
		player --;
		$( ".playerTurn" ).toggleClass( "animated" );
	}
}

// making the snake
function createSnake() {
	var length = 5; // snake length
	snakeArray = [];
	for (var i = length-1; i>=0; i--){
		//horizontal snake starting from the top left
		snakeArray.push({x: i, y: 0});
	}
}

function createFood() {
	food = {x: Math.round(Math.random()*(width-cellWidth)/cellWidth),
			y: Math.round(Math.random()*(height-cellWidth)/cellWidth)
};
// creates cell x/y between 0-44
// 45(450/10) positions accross the rows and columns
		return food;
}


function paintCanvas() {
	//canvas styling
	ctx.fillStyle = "rgba(32,45,51,1)";
	ctx.fillRect(0,0,width,height);
//	ctx.strokeStyle = "yellow";
//	ctx.strokeRect(0,0,width,height);
}

function paintSnake() {
	// adding cell color

		paintCanvas();

		var nx = snakeArray[0].x; // positions of head cell
		var ny = snakeArray[0].y;

		//detecting edge
		if (nx>width/cellWidth) nx =1;
		if(nx<0) nx = width/cellWidth-1;
		if(ny>height/cellWidth) ny = 1;
		if(ny < 0) ny = height/cellWidth - 1;
		// snake movement and head placement
		if(d == "right") nx++;
		else if(d == "left") nx--;
		else if(d == "up")ny--;
		else if(d == "down")ny++;
		// the following checks for border collision and calls the body collision function - game ends upon these requirements
		if(nx == -1 || nx == width/cellWidth || ny == -1 || ny == height/cellWidth || checkCollision(nx,ny,snakeArray)) {

			while (runAlert === true) {
			alert("Snake death!  Player " + player + "'s score is " + score + ".");
			runAlert = false;
			$( ".playerTurn" ).toggleClass( "animated" );
	}	
				
				return;
			//game stops, needs spacebar to start again	
		}
// if the head position matches the position of the food, create a new head, add to the score, display score
		if(nx == food.x && ny == food.y) {
			var tail = {x: nx, y: ny};
			score ++;
			createFood();
			$('#score').html(score);
// else pop out the last cell
		} else {
			var tail = snakeArray.pop();
			tail.x = nx; 
			tail.y = ny;
		}
		// puts the tail as the first cell 
				snakeArray.unshift(tail);


// creating fill snakeArray, for each array element create/paint square using the createSnake and paintCell
	for (var i = 0; i< snakeArray.length; i++) {
		var paint = snakeArray[i];
		paintCell(paint.x, paint.y);

		ctx.fillStyle = "#FCC50D";
		ctx.fillRect(paint.x*cellWidth, paint.y*cellWidth, cellWidth, cellWidth);
		ctx.strokeStyle = "black";
		ctx.strokeRect(paint.x*cellWidth, paint.y*cellWidth, cellWidth, cellWidth);
		}

		paintCell(food.x, food.y);

}


function paintCell(x,y) {
	ctx.fillStyle = "red";
	ctx.fillRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
	ctx.strokeStyle = "black";
	ctx.strokeRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
}
// check if the given x/y coordinates exist already in an array of cells or not.
function checkCollision(x,y,array) {
	 for (var i = 0; i<array.length; i++) {
	 		if(array[i].x == x && array[i].y == y)
	 			return true;
			}
	 			return false;
	 
}
	
});