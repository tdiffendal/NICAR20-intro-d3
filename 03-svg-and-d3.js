(function () {

  // your data can be a plain array (Python calls them lists)...
  var numbers = [8, 20, 4];

  // ... but it's usually (what we'd call in Python) a list of dictionaries!
  var cities = [
    {
      'name': 'NYC',
      'population': 8,
      'area': 304
    },
    {
      'name': 'Tokyo',
      'population': 14,
      'area': 845
    },
    {
      'name': 'LA',
      'population': 4,
      'area': 4500      
    },
    {
      'name': 'Brooklyn',
      'population': 4,
      'area': 97
    }
  ]

  // Remember, scales allow us to map an INPUT (a domain) to an OUTPUT (a range).

  // For example, I'm going to have input values of 0-4500 (square miles), please give me back
  //   the appropriate size for a circle, between 0 and 100. A 0 sqmi city would have a 0 radius,
  //   while a 4500 sqmi city would have a radius of 100 pixels.

  // You can also use scales to say "I'm going to give you a number between 4 and 15, and you're
  //    going to give me back a color between beige and red." We can get fancy with our colors and use
  //    hex codes from colorbrewer.

  // The answer to every question is probably "function(d) { }"
  d3.selectAll("rect").attr("fill", "red").attr("width", 200)

  //can also write
  d3.selectAll("rect") //grab all rects
    .attr("fill", "red")
    .attr("width", 200)
  
  d3.selectAll("circle").attr("r", 30).attr("fill", "blue")

 widthScale = d3.scaleLinear()
                .domain([0, 15])
                .range([0, 500])


  //can also write
  d3.selectAll("rect") //grab all rects
    .data(cities) //attach city data to rects
    .attr("fill", "red")
    .attr("width", function(d) {
      return widthScale(d.population)
    })

   colorScale = d3.scaleLinear()
                  .domain([0, 15])
                  .range(["white", "red"])


   d3.selectAll("circle")
     .data(cities)
     .attr("r", 30)
     .attr("fill", function(d) {
       return(colorScale(d.population))
     })



})()
