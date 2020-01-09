
const canvas = document.querySelector("canvas"); //query selector lets us choose a specific element, but has to be the first in the DOM

const ctx = canvas.getContext("2d");
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
//https://www.youtube.com/watch?v=RV3SaSH8lw0 

let primary = "#b30500"; 
let secondary = "#00FF00";

const grid = 32; //size of each cell in the canvas

let count = 0; //use for framerate

let snake = {
    x: grid * 5, // where the snake starts, 5 blocks of the grid in
    y: grid * 5,

    //velocity of snake

    vx: grid,
    vy: 0, //this ensures the snake does not move diagonal

    cells: [], //this increases with the amount the snake eats

    maxCells: 4


}

let apple ={ 
    x: grid * 10, //this keep the apples starting position 5 away from the snake
    y: grid * 10,
}

// loop

// Update function, slows down framerate
function Update(){
    requestAnimationFrame(Update) //runs 60fps 

    if(++count > 4){ //this sets the time fps to 15 as 60/4 =  15  
        return;
    }

    count = 0; 

    //clear canavs after every frame before we start drawing
    ctx.clearRect(0,0, canvas.width, canvas.height); //clears the whole canvas

    //Snake

    snake.cells.unshift({x:snake.x, y:snake.y});

    if(snake.cells.length > snake.maxCells){
        snake.cells.pop()
    }

    ctx.fillStyle = primary;
    snake.cells.forEach(function(cells,index){
        ctx.fillRect(cells.x,cells.y, grid-1,grid-1);
    });

}

//this starts game
requestAnimationFrame(Update) 




