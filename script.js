function closeIntroContent() {
    $(".intro-to-game").fadeOut();
}

function selectedCard(id) {
console.log("card id", id);
let cardID = "#card"+id;

if(!$(cardID).hasClass('rotate180')) {
    $(cardID).addClass('rotate180');
}
}