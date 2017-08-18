var points = 0;
var show;

const clicked = (id) => {
  console.log("click");
  function sortNumber(a,b) {
    return a - b;
  }
  var sorted = numArray.sort(show);



  // points++
  // $('#points').text(points);
}

const clickListen = (id) => {
  $(String("#bg-" + id)).click(function(e) {
    clicked($(this).attr('id'))
  });
};

function shuffle(n) {
  var currentIndex = n.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = n[currentIndex];
    n[currentIndex] = n[randomIndex];
    n[randomIndex] = temporaryValue;
  }
  return n.splice(0,5);
}


$( document ).ready(function() { // TODO: click event

  const grid = ["gr-0", "gr-1", "gr-2", "gr-3", "gr-5", "gr-6", "gr-7", "gr-8", "gr-9", "gr-10", "gr-11", "gr-12", "gr-13"];
  var numbs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  // var pulled = [];

  for (let i = 0; i < grid.length; i++) {
    $(String('#gr-'+ i)).prepend('<div data-points="' + i + '" id="bg-' + i + '"><img src="' + "./assets/img" + i + ".jpg"+ '" /></div>')
    clickListen(grid[i]);
  };

  show = shuffle(numbs);
  var hide = numbs;

  for (let i = 0; i < hide.length; i++) {
    $('#gr-'+hide[i]).attr("disabled", "disabled").off('click');
  }
  for (let i = 0; i < show.length; i++) {
    clickListen(show[i])
  }


});
