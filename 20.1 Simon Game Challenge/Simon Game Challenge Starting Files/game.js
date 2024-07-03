let gamePattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let started = false
let level = 0;


function nextSequence() {

   userClickedPattern = [];
   level++;
   let randomNumber = Math.floor(Math.random() * 4);
   let randomChosenColor = buttonColors[randomNumber];
   gamePattern.push(randomChosenColor);
   $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColor);
   $("#level-title").html("Level " + level);

}
$(".btn").on("click", function () {
   let userChosenColor = $(this).attr("id");
   userClickedPattern.push(userChosenColor);
   // $("#"+userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(userChosenColor);
   animatePress(userChosenColor);
   checkAnswer(userClickedPattern.length - 1);

});

function playSound(name) {
   const audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
}
function animatePress(currentColor) {
   $("#" + currentColor).addClass("pressed");
   setTimeout(() => {
      $("#" + currentColor).removeClass("pressed");
   }, 100);
}
$(document).keypress(function (event) {
   if (!started) {
      nextSequence();
      started = true;
   }
});

function checkAnswer(currentLevel) {
   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("sucess");
      if (gamePattern.length === userClickedPattern.length) {
         setTimeout(() => {
            nextSequence();
         }, 1000);
      }

   }
   else {
      console.log("wrong");
      let worng = new Audio("sounds/wrong.mp3")
      worng.play();
      $("body").addClass("game-over");
      setTimeout(()=>{
         $("body").removeClass("game-over");
      },200);
      $("#level-title").html("Game Over, Press Any key to Restart");
      startOver();
   }
}

function startOver() {
   level = 0;
   gamePattern = [];
   started = false;
}


