var layouts = [
  "background",
  "hero",
  "profile",
  "page",
  "card"
]

//  Change for beer groups
const colorMapping = {
  'Government (Diplomatic)': '#FFA500', // Orange
  'Government (General)': '#4B0082', // Indigo
  'Military': '#000080', // Navy Blue
  'Maritime': '#0000FF', // Blue
  'Transportation': '#006400', // Dark Green
  'Police': '#008000', // Green
  'Utilities': '#00FFFF', // Cyan
  'Tourists': '#6A5ACD', // Slate Blue
  'Business': '#FF00FF', // Magenta
  'Private Citizens & Property': '#FF0000', // Red
  'Violent Political Party': '#FF69B4', // Hot Pink
  'Religious Figures/Institutions': '#FFD700', // Gold
  'Telecommunication': '#87CEFA', // Light Sky Blue
  'Journalists & Media': '#FFFF00', // Yellow
  'Unknown': '#808080', // Gray
  'Airports & Aircraft': '#800080', // Purple
  'Educational Institution': '#800000', // Maroon
  'Terrorists/Non-State Militia': '#800000', // Maroon
  'NGO': '#ADFF2F', // Green Yellow
  'Food or Water Supply': '#CD5C5C', // Indian Red
  'Other': '#A0522D', // Sienna
  'Abortion Related': '#C71585' // Medium Violet Red
};

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
   
  
  function makemap(){
    // Define variables for the map container and switch button
    var mapContainer_ = document.querySelector(".map"); // selects an HTML element with class map and saves it as "mapContainer_"
    // mapContainer_.style.borderRadius = "0";
    // mapContainer_.style.display = "none";

    var mymap = L.map('map', {
      minZoom: 2 // Set the minimum zoom level
    }).setView([46.5197, 6.6323],5);


    // Set the maximum bounds of the map to prevent repetitions
    var southWest = L.latLng(-90, -180);
    var northEast = L.latLng(90, 180);
    var bounds = L.latLngBounds(southWest, northEast);
    mymap.setMaxBounds(bounds);
    mymap.on('drag', function () {
        mymap.panInsideBounds(bounds, { animate: false });
    });



    // mymap.createPane('labels');
    // mymap.getPane('labels').style.zIndex = 650;
    // mymap.getPane('labels').style.pointerEvents = 'none';


    var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '©OpenStreetMap, ©CartoDB'
    }).addTo(mymap);

    var mapContainer = document.getElementById('map');
    mapContainer.style.zIndex = 1;
    positron.setZIndex(1);

    var div = L.DomUtil.get('no-scrolling-clicking');
    L.DomEvent.on(div, 'mousewheel', L.DomEvent.stopPropagation);
    L.DomEvent.on(div, 'click', L.DomEvent.stopPropagation);

    

    mymap.on('dragstart', function (event) {
      event.preventDefault();
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

  function make_lineplot_annualsales(){
    
    const domainY = 120;
    const prewidth = 460;
    const preheight = 400;
    
    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 30, bottom: 30, left: 60},
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
    d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered.csv", function(data) {

      // group the data: I want to draw one line per group
      var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
      .key(function(d) { return d.name;})
      .entries(data);

      // Add X axis --> it is a date format
      var x = d3.scaleLinear()
      .domain(d3.extent(data, function(d) { return d.year; }))
      .range([ 0, width ]);
      svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(5));

      // Add Y axis
      var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.n; })])
      .range([ height, 0 ]);
      svg.append("g")
      .call(d3.axisLeft(y));

      // color palette
      var res = sumstat.map(function(d){ return d.key }) // list of group names
      var color = d3.scaleOrdinal()
      .domain(res)
      .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])

      // Draw the line
      svg.selectAll(".line")
        .data(sumstat)
        .enter()
        .append("path")
          .attr("fill", "none")
          .attr("stroke", function(d){ return color(d.key) })
          .attr("stroke-width", 1.5)
          .attr("d", function(d){
            return d3.line()
              .x(function(d) { return x(d.year); })
              .y(function(d) { return y(+d.n); })
              (d.values)
          })
    });
  }

  function make_barplot_buttons(){
    
  }

  
  make_barplot_stacked();
  make_lineplot_annualsales();
  makemap();

});