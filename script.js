// Variables
let animalCards = ['1', '2', '3', '4', '5', '6', '1', '2','3', '4', '5', '6'];
let flipNumber = 0;

// Variables for sounds
let bgBirdSound = new Audio ("assets/sounds/jungle1.wav");
let flippingSound = new Audio ("assets/sounds/click4.mp3");
let winningSound = new Audio ("assets/sounds/winning-sound.wav");
let losingSound = new Audio ("assets/sounds/losing-sound.mp3");

// Variables for timer countdown
let countdown;
let secondsInput = 60;
let seconds = secondsInput;
let secondsLeft = $(".seconds-left");




// Hide Intro Overlay 
function closeIntroContent() {
    $(".intro-to-game").fadeOut();
    initialise();
    /*bgBirdSound.play();*/
}



// Cards
function initialise() {

    animalCards = shuffle(animalCards);
    
    for (let i=0; i<12; i++) {
       let card = "<div class='flip-card'><div class='flip-card-inner' id='card"+i+"' onclick='selectedCard("+i+", "+animalCards[i]+")'><div class='flip-card-front'></div><div class='flip-card-back' style='background-image:url(assets/images/animals/animal"+animalCards[i]+".jpg')></div></div></div>";

       $(".game-container").append(card);
    }
    countdown(seconds);
}

function selectedCard(id) {
    console.log("card id" , id);
    let cardID = "#card" + id;

    if(!$(cardID).hasClass("onclick-cards")) {
        $(cardID).addClass("onclick-cards");
        flippingSound.play();

        flipNumber++;

        if(flipNumber ==1){
            
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

''
// Countdown Function
function countdownNow(seconds) {
   secondsLeft.text(secondsInput);

   if (secondsInput == 0) {
       clearTimeout(countdown);
       setTimeout(function() {
           showResult();
       }, 1000);
       return;
   }
   secondsInput --;
   countdown = setTimeout(function() {
       countdownNow(seconds);
   },1000);
}