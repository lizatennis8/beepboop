$(document).ready(function() {
  $("#questions").submit(function(event) {

    var numberInput = parseInt($("#number").val());
    var nameInput = $("#name").val();
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
    console.log(elementArray);

    elementArray.forEach(function(number) {
      var characters = number.toString().split(" ");
      characters.forEach(function(character) {

      if (number % 3 === 0) {
      $("#thebigreveal").append(" I'm sorry, " + nameInput + ". I'm afraid I can't do that.");
    } else if (character.match(/[1]/)) {
      $("#thebigreveal").append(" BOOP");
    } else if (character.match(/[0]/)) {
      $("#pleasework").append(" BEEP");
    } else {
      $("#thebigreveal").append(" " + number);
    }
      })
    });

    event.preventDefault();
  });
});
