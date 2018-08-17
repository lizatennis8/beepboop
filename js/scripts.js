$(document).ready(function() {
  $("#questions").submit(function(event) {

    var numberInput = parseInt($("#number").val());
    var nameInput = $("#name").val();
    var total = 0;
    var numberRange = [numberInput, numberInput * 2, numberInput + 10];


    $(".name").text(nameInput);

    var elementArray = [];
    numberRange.forEach(function(element) {
    elementArray.push(element);

      })
// console.log(elementArray);




    elementArray.forEach(function(number) {
      var characters = number.toString().split(" ");
      // console.log(characters);
      console.log(number);
      characters.forEach(function(character) {

      if (character % 3 === 0) {
      $("#pleasework").append(" I'm sorry, " + nameInput + ". I'm afraid I can't do that.");
    } else if (character.match(/[0]/)) {
      $("#pleasework").append(" BEEP");
    } else if (character.match(/[1]/)) {
      $("#pleasework").append(" BOOP");
    } else {
      $("#pleasework").append(" " + number);
    }
})
  });


  // var digit = number.toString().split('');
  // console.log(digit);


    // $("#questions").hide();
    event.preventDefault();
  });
});




// Tried to loop range but could only get it to show in alert. Couldn't figure out how to push into an array:

// for (var index = 2; index <= numberInput; index += 6) {
// var range = [];
// range.push(index);
// console.log(index);
  // console.log(range);
