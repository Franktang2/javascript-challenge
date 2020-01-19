// from data.js
var tabledata = data;

// for creating table
var tbody = d3.select("tbody");

// for filter buttom
var submit = d3.select("#filter-btn");
var inputdate = d3.select("#datetime");

// Creating table wit alien information

filltable(tabledata);

// function creating table
function filltable(tabledata) {

tabledata.forEach((aliens) => {
    // Creating table rows for each row of alien data
    var row = tbody.append("tr");
    //get data from each row
    Object.entries(aliens).forEach(([key, value]) => {
        // appending data to each cell
        var cell = row.append("td");
        cell.text(value);
    });
});
}



// Filtered search

submit.on("click", function() {

  // input date to a variable
  var inputvalue = inputdate.property("value");
  // if statement for searching the input date
  if (inputvalue) {
  var filtereddata = tabledata.filter(value => value.datetime === inputvalue)
  ;}
  tbody.html("");
  filltable(filtereddata);
});


