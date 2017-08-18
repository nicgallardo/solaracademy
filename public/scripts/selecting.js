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
  const grid = ["gr-0", "gr-1", "gr-2", "gr-3", "gr-5", "gr-6", "gr-7", "gr-8", "gr-9", "gr-10", "gr-11"];





  for (let i = 0; i < grid.length; i++) {
    
    clickListen(grid[i])
  }

});


//
