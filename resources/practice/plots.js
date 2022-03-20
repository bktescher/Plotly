//city growth descending order
var sortedCities= cityGrowths.sort((a, b) => 
a.Increase_from_2016 - b.Increase_from_2016).reverse();

console.log(sortedCities);

//sort top five cities
var topFiveCities= sortedCities.slice(0, 5);
console.log(topFiveCities);

var topFiveCityNames= topFiveCities.map(city=> city.City);
console.log(topFiveCityNames);

var topFiveCityGrowths= topFiveCities.map(city=> parseInt(city.Increase_from_2016));
console.log(topFiveCityGrowths)

var trace1 ={
  x: topFiveCityNames,
  y: topFiveCityGrowths,
  type: "bar"
};

var data= [trace1];
var layout= {
  title: "Most Rapidly Growing Cities",
  xaxis: {title: "City"},
  yaxis: {title: "Population Growth, 2016-2017"}
};

Plotly.newPlot("bar-plot", data, layout);

var topCityPop = cityGrowths.map(city=> parseInt(city.population));
console.log(topCityPop);

var topSevenCities= cityGrowths.slice(0, 7);
console.log(topSevenCities);

var topSevenNames= topSevenCities.map(city=> city.City);
console.log(topSevenNames);

var topSevenPop= topCityPop.slice(0, 7);
console.log(topSevenPop);

// var trace2 ={
//   x: topSevenNames,
//   y: topSevenPop,
//   type: "bar"
// };

// var data= [trace2];
// var layout= {
//   title: "Top Seven Cities: Population",
//   xaxis: {title: "City"},
//   yaxis: {title: "Population"}
// };

// Plotly.newPlot("bar-plot", data, layout);
