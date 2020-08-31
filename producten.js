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
  var newrow = table.insertRow(0);
  var cell1 = newrow.insertCell(0);
  var cell2 = newrow.insertCell(1);
  var cell3 = newrow.insertCell(2);
  var cell4 = newrow.insertCell(3);
  var cell5 = newrow.insertCell(4);
  var cell6 = newrow.insertCell(5);
  var cell7 = newrow.insertCell(5);
  
  cell1.innerHTML = "";
  cell2.innerHTML = "";
  cell3.innerHTML = "";
  cell4.innerHTML = "";
  cell5.innerHTML = "";
  cell6.innerHTML = "";
  cell7.innerHTML = "";

  name = document.getElementById("recipient-name").value,
  category = document.getElementById("select").value,
  omshrijving= document.getElementById("form8").value,
  prijs=document.getElementById("prijs").value
  id= document.getElementById("id").value,
  image= document.getElementById("image").value,
  buttons=document.getElementById("buttons"); 
 
  
}

function verwijderen(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }

  function toonProducts()
  var prod=""
  var i;
  for (i = 0; i < products.length; i++) {
     prod += products[i];
  } 