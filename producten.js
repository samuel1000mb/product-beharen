var products = [
    {
        id: 1,
        name: "The bastard small",
        category: 219,
        omshrijving: 0,
        image: "img_1.jpg"
    },
    {
        id: 2,
        name: "The bastard small",
        category: 219,
        omshrijving: 0,
        image: "img_1.jpg"
    },
    {
        id: 3,
        name: "The bastard small",
        category: 219,
        omshrijving: 0,
        image: "img_1.jpg"
    },
    {
        id: 4,
        name: "The bastard small",
        category: 219,
        omshrijving: 0,
        image: "img_1.jpg"
    },
    {
        id: 5,
        name: "The bastard small",
        category: 219,
        omshrijving: 0,
        image: "img_1.jpg"
    },
    {
        id: 6,
        name: "The bastard small",
        category: 219,
        omshrijving: 0,
        image: "img_1.jpg"
    }
]


  

  
function myCreateFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell1 = row.insertCell(2);
  var cell2 = row.insertCell(3);
  var cell1 = row.insertCell(4);
  var cell2 = row.insertCell(5);
  cell1.innerHTML = "";
  cell2.innerHTML = "";
  cell3.innerHTML = "";
  cell4.innerHTML = "";
  cell5.innerHTML = "";
  cell6.innerHTML = "";
  
}



function verwijderen(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }

