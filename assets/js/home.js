var layouts = [
  "background",
  "hero",
  "profile",
  "page",
  "card"
]

//  Change for beer groups
const beerColorMapping = {
  "AB-InBev": '#ffe500',      // Budweiser Gold
  "Asahi": '#F9C846',        // Asahi Super Dry Amber
  "Carlsberg": '#9d028a',    // Carlsberg Green
  "Diageo": '#231F20',       // Guinness Black
  "Heineken": '#00A100',     // Heineken Green
  "MolsonCoors": '#E23B01',   // Coors Original Red
  "Others": '#ffcdf9'
};

function getColor(value) {
  return beerColorMapping[value] || 'gray'; // Return color from mapping or a default color
}

const countryNames = ['World', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia-Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Czechoslovakia', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Germany (GDR)', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guadeloupe', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'International', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Martinique', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nepal', 'Netherlands', 'New Caledonia', 'New Hebrides', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Yemen', 'Norway', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', "People's Republic of the Congo", 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Republic of the Congo', 'Rhodesia', 'Romania', 'Russia', 'Rwanda', 'Saudi Arabia', 'Senegal', 'Serbia', 'Serbia-Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovak Republic', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'South Yemen', 'Soviet Union', 'Spain', 'Sri Lanka', 'St. Kitts and Nevis', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Wallis and Futuna', 'West Bank and Gaza Strip', 'West Germany (FRG)', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', 'Zambia', 'Zimbabwe'];

var dotsLayerGroup;


var currentLayout = 0

function switchHomeLayout() {

  var old = currentLayout
  currentLayout = currentLayout == layouts.length - 1 ? 0 : currentLayout + 1

  var oldDiv = document.getElementById(layouts[old])
  var currentDiv = document.getElementById(layouts[currentLayout])
  const layoutCode = document.querySelectorAll("code[id=layout]");

  currentDiv.style.display = "block";
  oldDiv.style.display = "none";
  layoutCode.forEach(function (el) {
    el.innerText = layouts[currentLayout];
  });

}

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("#switch-layout-button").forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      switchHomeLayout();
    })
  );
});

var list_config = [
  "CardViewProse",
  "CardViewScreenWidth",
  "NormalView"
]

var titles = {
  "CardViewProse" : "card view with constrained width",
  "CardViewScreenWidth" : "card view with full width",
  "NormalView" : "standard list view"
}

var currentConfig = 0

function switchList() {

  var old = currentConfig
  currentConfig = currentConfig == list_config.length - 1 ? 0 : currentConfig + 1

  var oldDiv = document.getElementById(list_config[old])
  var currentDiv = document.getElementById(list_config[currentConfig])
  const configCode = document.querySelectorAll("code[id=config]");

  currentDiv.style.display = "block";
  oldDiv.style.display = "none";

  configCode.forEach(function (el) {
    el.innerText = titles[list_config[currentConfig]];
  });

}

// window.addEventListener("DOMContentLoaded", (event) => {
//   document.querySelectorAll("#switch-config-button").forEach((button) =>
//     button.addEventListener("click", function (e) {
//       e.preventDefault();
//       switchList();
//     })
//   );
// });

document.addEventListener("DOMContentLoaded", function () {
   
  function makemap2electricboogaloo(){

    var datasetNames = {
      'button1': 'ABInBev',
      'button2': 'Carlsberg',
      'button3': 'Diageo',
      'button4': 'Heineken',
      'button5': 'MolsonCoors'
   };

   var colorSchemes = {
    'ABInBev': ["#ffffff", "#ffe0cc", "#ffac1c", "#ff4500", "#dc143c"],
    'Carlsberg': ["#ffffff", "#d4f0e4", "#a3e4d7", "#28b463", "#186a3b"],
    'Diageo': ["#ffffff", "#d9d9d9", "#a6a6a6", "#808080", "#474747"],
    'Heineken': ["#ffffff", "#b3e0a6", "#66cd00", "#228b22", "#004d00"],
    'MolsonCoors': ["#ffffff", "#d2e7f2", "#add8e6", "#87ceeb", "#4682b4"],
  };

    var minMaxValues = {
      'ABInBev': { min: 1, max: 11 },
      'Carlsberg': { min: 1, max: 5 },
      'Diageo': { min: 1, max: 2},
      'Heineken': { min: 1, max: 8},
      'MolsonCoors': {min: 1, max: 5}
   };

    var svgmap = d3.select("#goddamnmap"),
      widthmap = +svgmap.attr("width"),
      heightmap = +svgmap.attr("height");


    var projection = d3.geoMercator()
      .scale(120)
      .center([10,50])
      .translate([widthmap /2, heightmap /2]);


    var mapdata = d3.map();
    var colorScale = d3.scaleThreshold()


    var infoBox = svgmap.append("text")
      .attr("class", "infoBox")
      .attr("x", 300) // Set x position
      .attr("y", heightmap - 20) // Set y position
      .style("font-size", "16px");

    function drawMap(topo) {
      // Draw the map
      svgmap.append("g")
          .selectAll("path")
          .data(topo.features)
          .enter()
          .append("path")
          .attr("d", d3.geoPath().projection(projection))
          // set the color of each country
          .attr("fill", function (d) {
            d.total = mapdata.get(d.id) || 0;
            return colorScale(d.total);
          })
          .style("stroke", "black")
          .attr("class", function(d){ return "Country" } )
          .style("opacity", .8)
          .on("mouseover", mouseOver )
          .on("mouseleave", mouseLeave );
      
      // Legend!
      var legend = svgmap.append("g")
        .attr("class", "legend")
        .attr("transform", "translate(" + (widthmap - 100) + "," + 20 + ")")
        .selectAll("g")
        .data(colorScale.domain().slice().reverse())
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
  
      legend.append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", colorScale);
  
      legend.append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .text(function(d) { return "≥ " + d; });
    } 

    function calculateLegendSteps(min, max) {
      var steps = [];
      var stepSize = (max - min) / 4;
  
      for (var i = 0; i < 4; i++) {
          steps.push(Math.round(min + stepSize * i));
      }
  
      return steps;
    }
    
    function updateLegend(legendSteps, colorScale) {
      // Remove existing legend
      svgmap.select(".legend").remove();
  
      // Create new legend
      var legend = svgmap.append("g")
          .attr("class", "legend")
          .attr("transform", "translate(" + (widthmap - 100) + "," + 20 + ")");
  
      legend.selectAll("rect")
          .data(legendSteps)
          .enter().append("rect")
          .attr("x", 0)
          .attr("y", function(d, i) { return i * 20; })
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", function(d) { return colorScale(d); });
  
      legend.selectAll("text")
          .data(legendSteps)
          .enter().append("text")
          .attr("x", 24)
          .attr("y", function(d, i) { return i * 20 + 9; })
          .attr("dy", ".35em")
          .text(function(d) { return "≥ " + d; });
    }


    function mouseOver(d) {
      d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .5)
      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 0.8)
        .style("stroke", "black")

      var countryData = mapdata.get(d.id) || 0;
      infoBox.text(d.properties.name + ": " + countryData + " breweries")
        .style("font-weight", "bold");
    }


    function mouseLeave(d) {
      d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", 0.8)
      d3.select(this)
        .transition()
        .duration(200)
      // ... existing mouseLeave code ...
      infoBox.text('');
    }

    function loadData(buttonId) {  
      var datasetName = datasetNames[buttonId];
      var dataUrl = `https://raw.githubusercontent.com/epfl-ada/ada-2023-project-tornada/kajetan/plot_data/BA/breweries_countries/only_2017_with_full_codes/${datasetName}.csv`;

      var currentMinMax = minMaxValues[datasetName];
      var legendSteps = calculateLegendSteps(currentMinMax.min, currentMinMax.max);
      colorScale.domain(legendSteps);

      colorScale.range(colorSchemes[datasetName]);

      d3.csv(dataUrl, function(error,data) {
        if (error) throw error;

        data.forEach(function(d){
          mapdata.set(d.code, +d.nbr_breweries);
        });
          
        d3.selectAll(".Country")
          .transition()
          .style("fill", function (d) {
            d.total = mapdata.get(d.id) || 0;
            return colorScale(d.total);
        });


        updateLegend(legendSteps, colorScale);
      });

    }

    d3.queue()
      .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
      .await(ready);
        
    function ready(error, topo) {
      if (error) throw error;
      drawMap(topo);
      loadData('button1'); // Load the first dataset by default
    }

    d3.selectAll("#data-buttons button").on("click", function() {
      d3.selectAll("#data-buttons button").classed("active", false);
      d3.select(this).classed("active", true);
      loadData(this.id);
    });

  }
 
  function make_barplot_stacked(){

    const domainY = 120;
    const prewidth = 460;
    const preheight = 400;

    var margin = {top: 10, right: 30, bottom: 20, left: 50},
    width = prewidth - margin.left - margin.right,
    height = preheight - margin.top - margin.bottom;

    var svg = d3.select(".barplot-stacked")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform","translate(" + margin.left + "," + margin.top + ")");

    d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_stackedXL.csv", function(data) {
      
      var subgroups = data.columns.slice(1)

      var groups = d3.map(data, function(d){return(d.group)}).keys()

      var x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.2])
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSizeOuter(0));

      var y = d3.scaleLinear()
        .domain([0, domainY])
        .range([ height, 0 ]);
      svg.append("g")
        .call(d3.axisLeft(y));

      var color = d3.scaleOrdinal()
      .domain(subgroups)
      .range(d3.schemeSet2);
      //.range(['#e41a1c','#377eb8','#4daf4a'])

      var stackedData = d3.stack()
        .keys(subgroups)
        (data)

      var mouseover = function(d) {
        // what subgroup are we hovering?
        var subgroupName = d3.select(this.parentNode).datum().key; // This was the tricky part
        var subgroupValue = d.data[subgroupName];
        // Reduce opacity of all rect to 0.2
        d3.selectAll(".myRect").style("opacity", 0.2)
        // Highlight all rects of this subgroup with opacity 0.8. It is possible to select them since they have a specific class = their name.
        d3.selectAll("."+subgroupName)
          .style("opacity", 1)
        }

      var mouseleave = function(d) {
        // Back to normal opacity: 0.8
        d3.selectAll(".myRect")
          .style("opacity",0.8)
        }

      svg.append("g")
        .selectAll("g")
        // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .enter().append("g")
          .attr("fill", function(d) { return color(d.key); })
          .attr("class", function(d){ return "myRect " + d.key })
          .selectAll("rect")
          // enter a second time = loop subgroup per subgroup to add all rectangles
          .data(function(d) { return d; })
          .enter().append("rect")
            .attr("x", function(d) { return x(d.data.group); })
            .attr("y", function(d) { return y(d[1]); })
            .attr("height", function(d) { return y(d[0]) - y(d[1]); })
            .attr("width",x.bandwidth())
            .attr("stroke", "grey")
          .on("mouseover", mouseover)
          .on("mouseleave", mouseleave)

    });
  }

  function make_lineplot_meanratings(){
    
    const prewidth1 = 700;
    const preheight1 = 400;
    
    // set the dimensions and margins of the graph
    var margin1 = {top: 10, right: 30, bottom: 30, left: 100},
    width1 = prewidth1 - margin1.left - margin1.right,
    height1 = preheight1 - margin1.top - margin1.bottom;

    // append the svg object to the body of the page
    var svg1 = d3.select(".lineplot-meanratings")
    .append("svg")
    .attr("width", width1 + margin1.left + margin1.right)
    .attr("height", height1 + margin1.top + margin1.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin1.left + "," + margin1.top + ")");
    
    //Read the data
    d3.csv("https://raw.githubusercontent.com/ctaverni/whatareyoudrinking/clara/data/timeseries_average.csv", function(data) {

      // List of groups (here I have one group per column)
      var allGroup1 = ["Carlsberg", "Diageo", "Heineken", "AB-InBev", "MolsonCoors", "Others"]
      var allYear1 = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"]

      // Reformat the data: we need an array of arrays of {x, y} tuples
      var dataReady1 = allGroup1.map( function(bwrName1) { // .map allows to do something for each element of the list
        return {
          name1: bwrName1,
          values1: data.map(function(d) {
            return {year1: d.year, value1: +d[bwrName1]};
          })
        };
      });
      // I strongly advise to have a look to dataReady with
      // console.log(dataReady)

      // Add X axis --> it is a date format
      var x = d3.scaleBand()
        .domain(allYear1)
        .range([ 0, width1])
      var xAxis1 = svg1.append("g")
        .attr("transform", "translate(0," + height1 + ")")
        .call(d3.axisBottom(x))
      xAxis1.select("path") //Axis 
        .style("stroke","white");
      xAxis1.selectAll("line") //ticks
        .style("stroke","white")
      xAxis1.selectAll("text")
        .attr("fill", "white");

      // Add Y axis
      var y = d3.scaleLinear()
        .domain( [2,5])
        .range([ height1, 0 ]);
      var yAxis1 = svg1.append("g")
        .call(d3.axisLeft(y))
      yAxis1.select("path") //Axis 
        .style("stroke","white");
      yAxis1.selectAll("line") //ticks
        .style("stroke","white");
      yAxis1.selectAll("text")
        .attr("fill", "white");

      // Add the lines
      var line1 = d3.line()
        .x(function(d) { return x(+d.year1) })
        .y(function(d) { return y(+d.value1) })
        .defined(function (d) { return d.value1; });
      svg1.selectAll("myLines")
        .data(dataReady1)
        .enter()
        .append("path")
        .attr("class", function(d){ return d.name1 })
        .attr("d", function(d){ return line1(d.values1) } )
        .attr("stroke", function(d){ return getColor(d.name1) })
        .style("stroke-width", 4)
        .style("fill", "none")

      // Add a legend (interactive)
      svg1
        .selectAll("myLegend1")
        .data(dataReady1)
        .enter()
          .append('g')
          .append("text")
            .attr('x', function(d,i){ return 50 + (i%2)*120})
            .attr('y', function(d,i){ return 30 + i*15})
            .text(function(d) { return d.name1; })
            .style("fill", function(d){ return getColor(d.name1) })
            .style("font-size", 15)
          .on("click", function(d){
            // is the element currently visible ?
            //currentOpacity1 = d3.select("." + d.name1).style("opacity")
            // Change the opacity: from 0 to 1 or from 1 to 0
            //d3.select("." + d.name1).transition().style("opacity", currentOpacity1 == 1 ? 0:1)
          })
    })
  }

  function make_lineplot_annualsales(){
    
    const domainY = 120;
    const prewidth = 700;
    const preheight = 400;
    
    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 30, bottom: 30, left: 100},
    width = prewidth - margin.left - margin.right,
    height = preheight - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select(".lineplot-annualsales")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
    
    //Read the data
    d3.csv("https://raw.githubusercontent.com/ctaverni/whatareyoudrinking/clara/data/financialdata.csv", function(data) {

      // List of groups (here I have one group per column)
      var allGroup = ["Molson-Coors", "AB-InBev", "Heineken", "Carlsberg", "Asahi", "Diageo"]
      var allYear = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"]

      // Reformat the data: we need an array of arrays of {x, y} tuples
      var dataReady = allGroup.map( function(bwrName) { // .map allows to do something for each element of the list
        return {
          name: bwrName,
          values: data.map(function(d) {
            return {year: d.year, value: +d[bwrName]};
          })
        };
      });
      // I strongly advise to have a look to dataReady with
      // console.log(dataReady)

      // Add X axis --> it is a date format
      var x = d3.scaleBand()
        .domain(allYear)
        .range([ 0, width ])
      var xAxis = svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
      xAxis.select("path") //Axis 
        .style("stroke","white");
      xAxis.selectAll("line") //ticks
        .style("stroke","white")
      xAxis.selectAll("text")
        .attr("fill", "white");
    

      // Add Y axis
      var y = d3.scaleLinear()
        .domain( [0,50000000000])
        .range([ height, 0 ]);
      var yAxis = svg.append("g")
        .call(d3.axisLeft(y))
      yAxis.select("path") //Axis 
        .style("stroke","white");
      yAxis.selectAll("line") //ticks
        .style("stroke","white");
      yAxis.selectAll("text")
        .attr("fill", "white");

      // Add the lines
      var line = d3.line()
        .x(function(d) { return x(+d.year) })
        .y(function(d) { return y(+d.value) })
        .defined(function (d) { return d.value; });
      svg.selectAll("myLines")
        .data(dataReady)
        .enter()
        .append("path")
          .attr("class", function(d){ return d.name })
          .attr("d", function(d){ return line(d.values) } )
          .attr("stroke", function(d){ return getColor(d.name) })
          .style("stroke-width", 4)
          .style("fill", "none")

      

      // Add a legend (interactive)
      svg
        .selectAll("myLegend")
        .data(dataReady)
        .enter()
          .append('g')
          .append("text")
            .attr('x', 50)
            .attr('y', function(d,i){ return 30 + i*25})
            .text(function(d) { return d.name; })
            .style("fill", function(d){ return getColor(d.name) })
            .style("font-size", 15)
          .on("click", function(dn){
            // is the element currently visible ?
            //currentOpacity = d3.select("." + dn.name).style("opacity")
            // Change the opacity: from 0 to 1 or from 1 to 0
            //d3.select("." + dn.name).transition().style("opacity", currentOpacity == "1" ? "0":"1")
          })
    })
  }

  function make_barplot_marketpart(){
    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 30, bottom: 90, left: 40},
    width = 460 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select(".barplot-marketpart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    // Parse the Data
    d3.csv("https://raw.githubusercontent.com/ctaverni/whatareyoudrinking/clara/data/market.csv", function(data) {
      // X axis
      var x = d3.scaleBand()
        .range([ 0, width ])
        .domain(data.map(function(d) { return d.Companies; }))
        .padding(0.2);
      var xAxis1 = svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
      xAxis1.select("path") //Axis 
        .style("stroke","white");
      xAxis1.selectAll("line") //ticks
        .style("stroke","white")
      xAxis1.selectAll("text")
        .attr("fill", "white")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .style("color", "white");

      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, 55])
        .range([ height, 0]);
      var yAxis1 = svg.append("g")
        .call(d3.axisLeft(y));
      yAxis1.select("path") //Axis 
        .style("stroke","white");
      yAxis1.selectAll("line") //ticks
        .style("stroke","white")
      yAxis1.selectAll("text")
        .attr("fill", "white")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .style("color", "white");

      // ----------------
      // Create a tooltip
      // ----------------
      var tooltip = d3.select(".barplot-marketpart")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "transparent")
        .style("border", "solid")
        .style("color", "white")
        .style("text-color", "white")
        .style("border-radius", "5px")
        .style("padding", "10px");
        //.style("top",  (d3.mouse(this)[1]) + "px")
        //.style("left", (d3.mouse(this)[0]) + "px");

      // Three function that change the tooltip when user hover / move / leave a cell
      var mouseover = function(d) {
        tooltip
            .html("Company: " + d.Companies + "<br>" + "Market part: " + Math.round(y(d.Value)) + "%")
            .style("opacity", 1)
      }
      var mousemove = function(d) {
        tooltip
          .style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
          .style("top", (d3.mouse(this)[1]) + "px")
      }
      var mouseleave = function(d) {
        tooltip
          .style("opacity", 0)
      }

      // Bars
      svg.selectAll("mybar")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function(d) { return x(d.Companies); })
        .attr("width", x.bandwidth())
        .attr("fill", function(d){ return getColor(d.Companies) })
        // no bar at the beginning thus:
        .attr("height", function(d) { return height - y(0); }) // always equal to 0
        .attr("y", function(d) { return y(0); })
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)

      // Animation
      svg.selectAll("rect")
        .transition()
        .duration(800)
        .attr("y", function(d) { return y(d.Value); })
        .attr("height", function(d) { return height - y(d.Value); })
        .delay(function(d,i){console.log(i) ; return(i*100)})
      
      })
  }
  
  makemap2electricboogaloo();
  make_barplot_stacked();
  make_lineplot_annualsales();
  make_lineplot_meanratings();
  make_barplot_marketpart();
  makemap();


});