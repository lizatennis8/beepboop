$(document).ready(function() {
  $("#questions").submit(function(event) {

    var numberInput = parseInt($("#number").val());
    var nameInput = $("#name").val();
    var total = 0;
    var endInput = [];
    var elementArray = [];

    $(".name").text(nameInput);

    for (var i = 0; i <= numberInput; i += 2) {
      var bunchGuys = [i];
      bunchGuys.forEach(function(unit) {
      endInput.push(unit);
      })
    }

    endInput.forEach(function(element) {
    elementArray.push(element);
    })

    elementArray.forEach(function(number) {
      var characters = number.toString().split(" ");
      characters.forEach(function(character) {

      if (number % 3 === 0) {
      $("#pleasework").append(" I'm sorry, " + nameInput + ". I'm afraid I can't do that.");
    } else if (character.match(/[1]/)) {
      $("#pleasework").append(" BOOP");
    } else if (character.match(/[0]/)) {
      $("#pleasework").append(" BEEP");
    } else {
      $("#pleasework").append(" " + number);
    }
      })
    });

    event.preventDefault();
  });
});
