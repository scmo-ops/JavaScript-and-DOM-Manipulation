// from data.js
var tableData = data;

// YOUR CODE HERE!

// Console.log the data from data.js

console.log(data);

// Code to reference the table and do the columns and append to tr
var tbody = d3.select("tbody");
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    // wanted to use Object.entries to console.log for each sighthing
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Code for the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");
// now I go for the input instead of the date

    var inputElement = d3.select("#input");
    var inputValue = inputElement.property("value");
    
    // Now to filter the entries accordign to what the user asks for
    var inputCommand = tableData.filter(sighting => sighting.datetime === inputValue
        || sighting.city === inputValue || sighting.state === inputValue || sighting.country === inputValue
        || sighting.shape === inputValue || sighting.comments === inputValue);

    console.log(inputCommand);

    inputCommand.forEach((report) => {
        var row = tbody.append('tr');
        Object.entries(report).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });

//    inputCommand.forEach(function(report) {

 //   console.log(report);

//    // I wanted to Append one table row for each sighting
 //   var row = tbody.append("tr");
 //   Object.entries(report).forEach(function([key, value]) {
 //       console.log(key, value);
 //       var cell = row.append("td");
  //      cell.text(value);
 //   });
//});
});