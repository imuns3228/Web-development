let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let level = 0;


// USER CLICK
$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
    let id = $("#" + userChosenColour);
    id.fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(userChosenColour);
    animatePress(userChosenColour);

}) ;


// Function  (pam = userClicked.length - 1)
function checkAnswer(currentLevel){
   if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
     console.log("HOOOOOREU");
     if(gamePattern.length === userClickedPattern.length){
       setTimeout(function(){
         nextSequence();
       }, 1000);
     }
   }
   else{
// plays wrong sound
     playSound("wrong");
// change game over css class
     $("body").addClass("game-over");
     setTimeout(function () {
       $("body").removeClass("game-over");
     }, 200);
//change h1
     $("#level-title").text("Game over! Press Any Key to Restart");
//restart
     startOver();
   }
}

// Function that gives next random sequence, adds level, pushes randomChosenColour to array gamePattern
function nextSequence() {
  userClickedPattern = [];

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

  $("#level-title").text("Level " + level);
  level++;


}

//Sound function

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}


// Animation function

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// Start of game

let firstKey = function () {
  nextSequence();
  $("#level-title").text("Level " + level);
  $(document).unbind("keydown", firstKey);
}

$(document).keydown(firstKey);

//Restart
function startOver(){
  level = 0;
  gamePattern = [];
  $(document).keydown(firstKey);
}
