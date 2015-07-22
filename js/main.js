//define variables (figure out what you want to keep track of)
var numMoves = 0;

function gameReset() {
  $('.cards').removeClass('selected matched');
  numMoves = 0;
}

$(document).ready(function() {
  
  //click listener for the cards
  $('.cards').click(function() {
   
    // add "selected" class to card that was clicked which will change its css
    $(this).addClass('selected');

    //conditional handling when a 3rd card is clicked but there is no match in the first 2
    if($('.selected').length == 3) {
      $(this).siblings('.selected').removeClass('selected');
    }

    //conditional based on number of cards clicked

    if($('.selected').length == 2) {
      numMoves = numMoves + 1;
      var firstCard = $('.selected:eq(0)');
      var secondCard = $('.selected:eq(1)');

      if(firstCard.hasClass('king') === secondCard.hasClass('king')) {
        firstCard.addClass('matched').removeClass('selected');
        secondCard.addClass('matched').removeClass('selected');   
      };

    } else {
      console.log('Only 1 card selected...');
    }

    if($('.matched').length == 4) {
      alert("Congratulations! You've matched all cards in " + numMoves + " moves")
      gameReset();
    }

    console.log(numMoves);
  });

  $('#start, #reset').click(gameReset);


//set number of moves to 0
//make sure all cards are in default state
//randomize card order (hidden)
//detect user click on card
//apply clicked state to clicked card (flip card)
//detect value of clicked card
//detect 2nd user click
//apply clicked state to clicked card (flip card)
//detect value of clicked card
//increase move count by 1
//compare cards

//if not matching
//reset card style

//if mathcing...
//apply matching style
//detect 3rd user click
//apply clicked state to clicked card (flip card)
//detect value of clicked card
//detect 4th user click
//apply clicked state to clicked card (flip card)
//detect value of clicked card
//increase move count by 1
//display winning alert with count for moves

});