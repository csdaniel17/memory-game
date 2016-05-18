//variable to represent what state you are in - 1st/2nd
var state = "";

$(function () {
  $(".tile").click(function () {
    //if you are in first state, flip card
    if (state === "") {
      state = "first";
      //add the class "open" to flip tile open
      $(this).addClass("open");
    } else if (state === "first") {
      state = "second";
      //add the class "open" to flip tile open
      $(this).addClass("open");
    }

  });
});
