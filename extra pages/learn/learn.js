// generate the multiplication table dynamically
function generateTable(number) {
    var table = document.getElementById("multiplication-table");
    table.innerHTML = ""; // Clearing previous table content
    for (var i = 1; i <= 10; i++) {
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = number + " x " + i + " =";
      cell2.innerHTML = number * i;
    }
  }