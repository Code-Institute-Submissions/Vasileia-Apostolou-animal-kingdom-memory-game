let animalCards = ['1', '2', '3', '4', '5', '6', '1', '2','3', '4', '5', '6'];
let bgBirdSound = new Audio ("assets/sounds/jungle.wav");

// Hide Intro Overlay 
function closeIntroContent() {
    $(".intro-to-game").fadeOut();
    initialise();
    bgBirdSound.play();

}

// Cards
function initialise() {

    animalCards = shuffle(animalCards);
    
    for (let i=0; i<12; i++) {
       let card = "<div class='flip-card'><div class='flip-card-inner' id='card"+i+"' onclick='selectedCard("+i+", "+animalCards[i]+")'><div class='flip-card-front'></div><div class='flip-card-back' style='background-image:url(assets/images/animals/animal"+animalCards[i]+".jpg')></div></div></div>";

       $(".game-container").append(card);
    }
}


function selectedCard(id) {
    console.log("card id" , id);
    let cardID = "#card" + id;

    if(!$(cardID).hasClass("onclick-cards")) {
        $(cardID).addClass("onclick-cards");
    }
}

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}