
const canvas = document.querySelector("canvas"); //query selector lets us choose a specific element, but has to be the first in the DOM

const ctx = canvas.getContext("2d");
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
//https://www.youtube.com/watch?v=RV3SaSH8lw0 

let primary = "#b30500"; 
let secondary = "#00FF00";

const grid = 32; //size of each cell in the canvas

let count = 0; //use for framerate






