//variable to represent what state you are in - 1st/2nd
var state = "first";
var count = 0;
var card1;
var card2;
//debugger
$(function () {
  $(".tile").click(function () {
    //flip card when clicked
    $(this).addClass("open");
    //find card src
    if (state === "first") {
      card1 = $(this).find("img").attr("src");
      state = "second";
    } else if (state === "second") {
      card2 = $(this).find("img").attr("src");
      state = "first";
      //set timeout to flip cards back over after if not match
      if (card1 != card2) {
        setTimeout(function () {
          $(".tile").removeClass("open");
        }, 800);
      } else {
        $(".open").addClass("match");
        $(".open").removeClass("open");
      }
    }

  });
});
