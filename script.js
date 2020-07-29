let animalCards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D','E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K'];

/*let gameValues = [];
let memoryIds = [];
let flippedCards = [];

Array.prototype.gameShuffle = function() {
    let a = this.length, j,temp;

    while(--a; <0) {
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this [a];
        this[a] = temp;
    }
}

function myContainer() {
    flippedCards = 0;
    let output= '';

    gameArray.gameShuffle();
    for (let i=0 i<gameArray.length; i++) {
        output += ''
    }
} */


// Hide Intro Overlay 
function closeIntroContent() {
    $(".intro-to-game").fadeOut();
    initialise();
}


function initialise() {
    

    for (let i=0; i<10; i++) {
       let card = "<div class='flip-card'><div class='flip-card-inner' id='card"+i+"' onclick='selectedCard("+i+")'><div class='flip-card-front'></div><div class='flip-card-back'></div></div></div>";

       $(".game-container").append(card);
    }
}

