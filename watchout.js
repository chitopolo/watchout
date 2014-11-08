// start slingin' some d3 here.

var gameOptions = {
  width: 1000,
  height: 1000,
	nEnemies: 30,
	padding: 20,
  asteroidsImage: "http://www.minerwars.com/ForumUploads/20101222063104_5025_Asteroid4.png"
};

var gameStats = { 
	score: 10,  
	bestScore: 150
};

var position = {
  moveX : function(){
    var randomPlaceX = giveMeANumberInterval(0,gameOptions.width);
    var randomPlaceY = giveMeANumberInterval(0,gameOptions.height);
    console.log('position x: ' + randomPlaceX + 'position y: ' + randomPlaceY);
    this.transition().attr('x', randomPlaceX)
                     .attr('y', randomPlaceY);
    // this.transition().attr('y', randomPlaceY);

  },
};


var giveMeANumberInterval = function(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


var Asteroid = function(positionX, positionY){
  this.positionX = positionX,
  this.positionY = positionY
};

var svg = d3.select("body").append("svg")
    .attr("width", gameOptions.width)
    .attr("height", gameOptions.height);

var g = svg.append("g");

var img = g.append("svg:image")
    .attr("xlink:href", "http://www.minerwars.com/ForumUploads/20101222063104_5025_Asteroid4.png")
    .attr("width", 50)
    .attr("height", 50)
    .attr("x", 228)
    .attr("y",53);
   
d3.select(".scoreboard").selectAll(".high").text('Best score: ' + [gameStats.bestScore]);

d3.select(".scoreboard").selectAll(".current").text('Score: ' + [gameStats.score]);


window.setInterval(position.moveX.bind(img),1000);

// var t = setInterval( position.moveX.bind(img),1000);



