//<h1 align="center">Simon Game</h1>
//alert("hello");

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];


$(".btn").click(function() {

    //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");
  
    //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);
  
    //console.log(userClickedPattern);
  
  });

  

//1. Inside game.js create a new function called nextSequence()
function nextSequence() {

  //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
  var randomNumber = Math.floor(Math.random() * 4);

  //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[randomNumber];

  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColour);
  
  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

}

