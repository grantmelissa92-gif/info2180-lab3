//Layout the board 
document.addEventListener("DOMContentLoaded", function(){
    //game board
    const board = document.getElementById("board");

    //each square in the grid
    const square = board.getElementsByTagName("div");
    for(let a = 0; a < square.length; a++){
        square[a].classList.add("square");
    }

});