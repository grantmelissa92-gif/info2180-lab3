document.addEventListener("DOMContentLoaded", function(){
    //game board
    const board = document.getElementById("board");
    //each square in the grid
    const square = board.getElementsByTagName("div");

    //set player and turn
    const player1 = "X";
    const player2 = "O";
    let current_turn = player1;

    let gameXorO = Array(square.length).fill("");

    for(let a = 0; a < square.length; a++){
        square[a].classList.add("square");

        square[a].addEventListener("click", function(){
            if (gameXorO[a] === ""){
                gameXorO[a] = current_turn;

                square[a].textContent = current_turn;

                square[a].classList.add(current_turn);

                current_turn = current_turn === player1 ? player2 : player1;
            }
        });

        square[a].addEventListener("mouseover", function(){
            square[a].classList.add("hover");
        });

        square[a].addEventListener("mouseleave", function(){
            square[a].classList.remove("hover");
        });

    } 
});

