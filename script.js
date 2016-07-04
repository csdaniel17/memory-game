//variable to represent what state you are in - 1st/2nd
var state = "first";
var count = 0;
var card1;
var card2;

$(function () {
  //shuffle cards
  var pictures = [
    'monsters-01.png',
    'monsters-02.png',
    'monsters-03.png',
    'monsters-04.png',
    'monsters-05.png',
    'monsters-06.png',
    'monsters-07.png',
    'monsters-08.png',
    'monsters-09.png',
    'monsters-10.png',
    'monsters-11.png',
    'monsters-12.png',
    'monsters-13.png',
    'monsters-14.png',
    'monsters-15.png',
    'monsters-16.png'
  ];

  pictures = _.shuffle(pictures);

  var fourPics = [];
  fourPics = pictures.slice(0, 4);

  var eightPics = [];
  eightPics = fourPics.concat(fourPics);

  shuffledPics = _.shuffle(eightPics);

  function shuffled() {
    for (var i = 0; i < shuffledPics.length; i++) {
      $('#grid').append('<div class="tile"><img class="monster" src="images/' + shuffledPics[i] + '"><div class="back"></div></div>');
    }

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
  }
  shuffled();
  //reset game
  $("#new").click(function () {
    $('#grid').html('');
    shuffledPics = _.shuffle(eightPics);
    shuffled();
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
