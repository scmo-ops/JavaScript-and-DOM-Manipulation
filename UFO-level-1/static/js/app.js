// from data.js
var tableData = data;

// YOUR CODE HERE!

// Console.log the data from data.js

console.log(tableData)

// Code to reference the table and do the columns and append to tr
var tbody = d3.select("tbody");
tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");

    // wanted to use Object.entries to console.log for each sighthing
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Code for the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var inputCommand = tableData.filter(sighting1 => sighting1.datetime === inputValue);
    console.log(inputCommand);

    inputCommand.forEach((report) => {
        var row = tbody.append('tr');
        Object.entries(report).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
});