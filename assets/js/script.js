// Variables
let animalCards = ['1', '2', '3', '4', '5', '6', '7', '8', '1', '2','3', '4', '5', '6', '7', '8'];

// Variables for cards
let flipNumber = 0;
let clickedCards = 0;
let firstSelectedCard;
let secondSelectedCard;
let previousCard;
let score = 0;


// Variables for sounds
let bgBirdSound = new Audio ("assets/sounds/jungle1.wav");
let flippingSound = new Audio ("assets/sounds/click4.mp3");
let winningSound = new Audio ("assets/sounds/winning-sound.wav");
let losingSound = new Audio ("assets/sounds/losing-sound.mp3");
let congratsSound = new Audio ("assets/sounds/congrats.wav");


// Variables for timer countdown
let countdown;
let secondsInput = 60;
let seconds = secondsInput;
let secondsLeft = $(".seconds-left");

// Variable for score
let scoreNumber = $(".successful-match");

// Variables for results
let youLost = false;
let gameResults = $(".game-results");
let winningPopup = $(".winning-popup");
let playAgainButton = $(".play-again-button");
let exitButton = $(".exit-button");
let losingPopup = $(".losing-popup");
let tryAgainButton = $(".try-again-button");



// Hide Intro Overlay 
function closeIntroContent() {
    $(".intro-to-game").fadeOut();
    initialise();
    bgBirdSound.play();
}



// Mute/Unmute Background Sound
$(".sound-button").click(function() {
    bgBirdSound.pause();
    $(".sound-button").hide();
    $(".mute-sound-button").show();
});
 
$(".mute-sound-button").click(function() {
    bgBirdSound.play();
    $(".mute-sound-button").hide();
    $(".sound-button").show();
});




// Cards
function initialise() {

    animalCards = shuffle(animalCards);
    
    for (let i=0; i<16; i++) {
       let card = "<div class='flip-card'><div class='flip-card-inner' id='card"+i+"' onclick='selectedCard("+i+", "+animalCards[i]+")'><div class='flip-card-front'></div><div class='flip-card-back' style='background-image:url(assets/images/animals/animal"+animalCards[i]+".jpg')></div></div></div>";

       $(".game-container").append(card);
    }
countdownNow(seconds);
}

function selectedCard(id,current) {
    console.log("card id" , id);
    let cardID = "#card" + id;

    if(!$(cardID).hasClass("onclick-cards")) {
        $(cardID).addClass("onclick-cards");
        flippingSound.play();

         clickedCards++;

        if(clickedCards == 1){
     firstSelectedCard = current;
     previousCard = cardID;
        }

        if(clickedCards == 2) {
            secondSelectedCard = current;

            if(firstSelectedCard == secondSelectedCard) {
                score++;
                 $(".successful-match").text(score+"/8");
                if (score == 10) {
                    clearTimeout(countdownNow);
                    setTimeout(function () {
                        showResult();
                    },1000);
                    return;
                }
                
                setTimeout(function(){
                clickedCards=0;
                },500);
                console.log("Match");
                 winningSound.play();
            }else {
                setTimeout(function() {
                 $(cardID).removeClass("onclick-cards");
                 $(previousCard).removeClass("onclick-cards");
                  clickedCards=0;
                },500); 

            
            
            
            
              
            }
           
        }
    }
}



// Shuffle Function
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

    while (ctr > 0) {

        index = Math.floor(Math.random() * ctr);

        ctr--;

        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}


// Countdown 60seconds Function
function countdownNow(seconds) {
   secondsLeft.text(secondsInput);

   if (secondsInput == 0) {
       clearTimeout(countdown);
       setTimeout(function() {
           showResult();
       }, 1000);
       return;
   }
   secondsInput--;
   countdown = setTimeout(function() {
       countdownNow(seconds);
   },1000);
}


// Winning / Losing Pop Up
function showResult() {
  youLost = true;
  gameResults.show();
   
  if (score == 8) {
   winningPopup.show();
   playAgainButton.show();
   exitButton.show();
   congratsSound.play();

  } else {
   losingPopup.show();
   tryAgainButton.show();
   losingSound.play();
  }

  bgBirdSound.pause(); 
}


