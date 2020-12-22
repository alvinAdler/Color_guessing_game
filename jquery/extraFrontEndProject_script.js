function getRandomInteger(min, max){
    return Math.floor(Math.random() * max) + min;
}

function generateRandomColor(){
    return("rgb(" + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ")");
}

var boxColor = generateRandomColor();
var targetBoxColor = generateRandomColor();
var player_attempt = 25;

$("#player_attempt").text(player_attempt)
$("#cell_boxColor").css("background-color", boxColor);
$("#cell_targetBoxColor").css("background-color", targetBoxColor);

$(".cell_content").css("background-color", boxColor)
$(".cell_content").eq(getRandomInteger(0, 50)).css("background-color", targetBoxColor);

$(".cell_box").click(function(){
    $(this).css("display", "none");
    // console.log($(this).closest("div").children(".cell_content").css("background-color"));
    let clicked_content = $(this).closest("div").children(".cell_content").css("background-color");
    if(clicked_content === targetBoxColor){
        $("button").prop("disabled", true);
        alert("CONGRATULATIONS! You have won!\nPlease refresh the page if you want to play again.")
    }else{
        player_attempt--;
        $("#player_attempt").text(player_attempt)

        if(player_attempt == 0){
            $("button").css("display", "none");
            alert("GAME OVER! Better luck next time!")
        }
    }
})