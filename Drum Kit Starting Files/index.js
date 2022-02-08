// Detecting Button Clicked

const length = document.querySelectorAll(".drum").length;

for (let i = 0; i < length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
    playKey(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


// Detecting Key Pressed

 document.addEventListener("keydown", function(event){
   playKey(event.key);
   buttonAnimation(event.key);
 });



// Function that plays an Audio with parameter of a letter

function playKey(letter){
  switch (letter) {
    case "w":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "a":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "s":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "d":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "j":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "k":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "l":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log("HAHA!");
  }
}

// Animation function

function buttonAnimation(currentKey){
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
