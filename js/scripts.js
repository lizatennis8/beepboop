$(document).ready(function() {
  $("#questions").submit(function(event) {

    var numberInput = parseInt($("#number").val());
    var nameInput = $("#name").val();
    var total = 0;
    var numberRange = [numberInput, numberInput * 2, numberInput + 10];
    console.log(numberRange);

    $(".name").text(nameInput);

    numberRange.forEach(function(element) {

    if (element === 0) {
      $("#beepoutput").show();
    } 

    // else if (numberInput === "1") {
    //   $("#boopoutput").show();
    // } else if (numberInput === "20") {
    //   $(index).text();
    // }

    })

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
