$(document).ready(function() {
  $("#questions").submit(function(event) {

    var numberInput = $("#number").val();
    var nameInput = $("#name").val();

    $(".name").text(nameInput);

    if (numberInput === "0") {
      $("#beepoutput").show();
    } 

    $("#questions").hide();
    event.preventDefault();
  });
});
