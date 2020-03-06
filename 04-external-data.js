(function () {

  var width = 800,
      height = 800;

  // Create the SVG

 var margin = { top: 20, right: 10, bottom: 20, left: 10 }

    var width = 500 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom

    // You'll probably need to edit this one
    var svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")


  // Read in some external data. When we're done, run the function 'ready'
  //do have to put file path/server if item not in the same folder
 d3.csv("countries.csv").then(ready)

 //if not working, make sure you're on local host (which you can find by pasting "python -m SimpleHTTPServer" into the terminal)

  // This is 'ready':
  // it receives datapoints, our newly-read-in data
  //youtube jonathon soma d3 for more tutorials
  function ready(datapoints) {
    console.log("Data is", datapoints)

    // d3 code goes here
    xPositionScale = d3.scaleLinear()
                       .domain([0, 30000])
                       .range([0, width])

    yPositionScale = d3.scaleLinear()
                       .domain([0, 100])
                       .range([height, 0])
                       

    svg.selectAll('circle') //but we currently have 0 circles on the page
    .data(datapoints)
    .enter().append('circle') //so make a circle if there isn't one
    .attr('r', 10)
    .attr('cx', function(d) {
      return xPositionScale(d.gdp_per_capita)
    })
    .attr('cy', function(d) {
      return yPositionScale(d.life_expectancy)
    })

    // Always cut and paste the code for the axes!

  }

  //youtube jonathon soma d3 for more tutorials

})()