// var player1 = prompt("Player 1, please enter your name. Your role will be blue.")
// var player2 = prompt("Player 2, please enter your name. Your role will be red.")

//GLOBAL VARIABLES
//Temprary placeholder variable
var player1 = prompt("Player 1, please enter your name. Your role will be blue.");
var player1Color = "rgb(0, 119, 255)";

var player2 = prompt("Player 2, please enter your name. Your role will be red.");
var player2Color = "rgb(252, 3, 11)";
var game_active = true;

var table_allRow = $("table tr");


//FUNCTIONS
function checkOccupiedColor(table_rowIndex, table_colIndex){
    return table_allRow.eq(table_rowIndex).find("td").eq(table_colIndex).find("button").css("background-color");
}

function changeColor(table_rowIndex, table_colIndex, color_next){
    return table_allRow.eq(table_rowIndex).find("td").eq(table_colIndex).find("button").css("background-color", color_next);
}

function checkAvailableBottomSlot(table_colIndex){
    for(let index = 5; index >= 0; index--){
        if(checkOccupiedColor(index, table_colIndex) === "rgb(128, 128, 128)"){
            return(index);
        }
    }
    return "FULL";
}

function checkSameColor(cell_first, cell_second, cell_third, cell_fourth){
    return (cell_first === cell_second && cell_first === cell_third && cell_first === cell_fourth && cell_first != "rgb(128, 128, 128)" && cell_first != undefined);
}

function winCheck_horizontal(){
    for(let index_row = 0; index_row < 6; index_row++){
        for(let index_col = 0; index_col < 4; index_col++){
            if(checkSameColor(checkOccupiedColor(index_row, index_col), checkOccupiedColor(index_row, index_col + 1), checkOccupiedColor(index_row, index_col + 2), checkOccupiedColor(index_row, index_col + 3))){
                console.log("Horizontal win");
                return true;
            }else{
                continue;
            }
        }
    }
}

function winCheck_vertical(){
    for(let index_col = 0; index_col < 7; index_col++){
        for(let index_row = 0; index_row < 3; index_row++){
            if(checkSameColor(checkOccupiedColor(index_row, index_col), checkOccupiedColor(index_row + 1, index_col), checkOccupiedColor(index_row + 2, index_col), checkOccupiedColor(index_row + 3, index_col))){
                console.log("Vertical win");
                return true
            }else{
                continue
            }
        }
    }
}

function winCheck_diagonal(){
    for(let index_col = 0; index_col < 5; index_col++){
        for(let index_row = 0; index_row < 7; index_row++){
            if(checkSameColor(checkOccupiedColor(index_row, index_col), checkOccupiedColor(index_row + 1, index_col + 1), checkOccupiedColor(index_row + 2, index_col + 2), checkOccupiedColor(index_row + 3, index_col + 3))){
                console.log("Diagonal win, positive slope");
                return true;
            }
            else if(checkSameColor(checkOccupiedColor(index_row, index_col), checkOccupiedColor(index_row - 1, index_col + 1), checkOccupiedColor(index_row - 2, index_col + 2), checkOccupiedColor(index_row - 3, index_col + 3))){
                console.log("Diagonal win, negative slope");
                return true;
            }
            else{
                continue;
            }
        }
    }
}

function board_fullCheck(){
    for(let index_row = 0; index_row < 6; index_row++){
        for(let index_col = 0; index_col < 7; index_col++){
            if(checkOccupiedColor(index_row, index_col) === "rgb(128, 128, 128)"){
                return false;
            }
        }
    }
    return true;
}

//Player1 will go first, player2 will go second, and so on. 

var currentPlayer = {
    currentPlayerName : player1,
    currentPlayerColor : player1Color
};


$("#inst_switchPlayer").html("<strong>" + currentPlayer.currentPlayerName + ", it is your turn now" + "</strong>");

var current_availCol;
var current_availRow;

var button = $("table button");

button.click(function(){
    current_availCol = $(this).closest("td").index();
    current_availRow = checkAvailableBottomSlot(current_availCol);

    if(current_availRow === "FULL"){
        alert("Column is full!")
    }
    else{
        changeColor(current_availRow, current_availCol, currentPlayer.currentPlayerColor);

        if(winCheck_horizontal() || winCheck_vertical() || winCheck_diagonal()){
            $("#inst_switchPlayer").html("<strong>" + "GAME OVER! " + currentPlayer.currentPlayerName + " Wins!" + "\nPlease refresh your page to play again." +"</strong>")
            $("table button").prop("disabled", true);
        }else{
            if(currentPlayer.currentPlayerName === player1){
                currentPlayer.currentPlayerName = player2;
                currentPlayer.currentPlayerColor = player2Color;
            }else{
                currentPlayer.currentPlayerName = player1;
                currentPlayer.currentPlayerColor = player1Color;
            }
            $("#inst_switchPlayer").html("<strong>" + currentPlayer.currentPlayerName + ", it is your turn now" + "</strong>");

            if(board_fullCheck()){
                $("#inst_switchPlayer").html("<strong>" + "DRAW! All cells are full." + "</strong>");
                $("table button").prop("disabled", true);
            }
        }
    }
});
