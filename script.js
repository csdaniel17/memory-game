//variable to represent what state you are in - 1st/2nd
var state = "first";
var count = 0;
var card1;
var card2;
//debugger
$(function () {
  $(".tile").click(function () {

    if ($(this).hasClass("open")) {
      return;
    }
    //find card src and flip card when clicked
    if (state === "first") {
      card1 = $(this).find("img").attr("src");
      $(this).addClass("open");
      state = "second";
    } else if (state === "second") {
      card2 = $(this).find("img").attr("src");
      $(this).addClass("open");
      state = "first";
      //count moves
      count++;
      //display moves after two clicks
      $("#num-moves").text(count);
      //set timeout to flip cards back over after if not match
      if (card1 != card2) {
        setTimeout(function () {
          $(".tile").removeClass("open");
        }, 500);
      } else {
        //if they are a match, add class "match" and remove "open"
        $(".open").addClass("match");
        $(".open").removeClass("open");
      }
    }
    var matched = $(".match").length;
    var totalCards = $(".tile").length;
    if (matched === totalCards) {
      $("#game-over").show();
    }
  });

  //reset game
  $("#new").click(function () {
    //reset counter
    count = 0;
    $("#num-moves").text(count);
    //reset congrats message
    $("#game-over").hide();
    //remove "match" and "open" class
    $(".open").removeClass("open");
    $(".match").removeClass("match");
  });
});
