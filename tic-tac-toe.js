document.addEventListener("DOMContentLoaded", function(){
    //game board
    const board = document.getElementById("board");
    //each square in the grid
    const square = board.getElementsByTagName("div");
    //winner status
    const status = document.getElementById("status");

    //original display status
    const displaymsg = status.textContent;

    //set player and turn
    const player1 = "X";
    const player2 = "O";
    let current_turn = player1;

    let gameXorO = Array(square.length).fill("");

    const gamewin = [
        [0, 1, 2], [3, 4 ,5], [6, 7, 8],
        [0, 3, 6], [1, 4 ,7], [2, 5, 8],
        [0, 4, 8], [2, 4 ,6]
    ];

    //check who wins
    function whowins(){
        for (const[a, b, c] of gamewin){

            if(gameXorO[a] &&
                gameXorO[a] === gameXorO[b] &&
                gameXorO[a] === gameXorO[c]
            ){
                const winner = gameXorO[a];
                status.textContent = `Congratulations! ${winner} is the Winner!`;
                status.classList.add("you-won");
                return true;
            }
        }
        return false;
    }

    for(let a = 0; a < square.length; a++){
        square[a].classList.add("square");

        square[a].addEventListener("click", function(){
            if (gameXorO[a] === "" && !status.classList.contains("you-won")){
                gameXorO[a] = current_turn;

                square[a].textContent = current_turn;

                square[a].classList.add(current_turn);

                if(!whowins()){
                    current_turn = current_turn === player1 ? player2 : player1;
                }
            }
        });

        square[a].addEventListener("mouseover", function(){
            if (!status.classList.contains("you-won") && gameXorO[a] === ""){
                square[a].classList.add("hover");
            }
        });

        square[a].addEventListener("mouseleave", function(){
            square[a].classList.remove("hover");
        });
    }
    
    const reset = document.querySelector(".btn");
    //reset the game
    reset.addEventListener("click", function(){
        for(let a = 0; a < square.length; a++){
            square[a].textContent = "";
            square[a].classList.remove("X", "O");
        }
        gameXorO.fill("");

        status.textContent = displaymsg;
        status.classList.remove("you-won");
        current_turn = player1;
    });
    
});

