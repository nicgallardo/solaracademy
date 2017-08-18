var points = 0;

const scored = (id) => {
  points++
  $('#points').text(points);
}

const clickListen = (id) => {
  $( "#"+id ).click(function(e) {
    scored($(this).attr('id'))
  });
};



$( document ).ready(function() {

  // const grid = ["gr-0", "gr-1", "gr-2", "gr-3", "gr-5", "gr-6", "gr-7", "gr-8", "gr-9", "gr-10", "gr-11", "gr-12", "gr-13"];
  // var numbs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  // var pulled = [];
  for (let i = 0; i < grid.length; i++) {
    //
    // var selected = array.splice(Math.floor(Math.random()*13), 1);
    //
    // var numSelected = "img" +  + ".jpg";
    clickListen(grid[i])
  }

});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array.slice(0,5);
}