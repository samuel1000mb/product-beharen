/* var products = [
    {
        id: 1,
        price: 400,
        name: "The bastard small",
        category: 219,
        description: "The description of The Bastard Small",
        image: "img_1.jpg"
    },
    {
        id: 2,
        price: 499,
        name: "The bastard Large",
        category: 219,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus blandit orci et tempor. Nullam sit amet vestibulum velit. Quisque vitae efficitur enim. Nullam fringilla fermentum porttitor. Curabitur malesuada sem eget lorem iaculis, et cursus massa tincidunt. Nullam feugiat dictum fringilla. Praesent non mauris vel nisi laoreet porta vitae ut arcu.",
        image: "img_1.jpg"
    },
    {
        id: 3,
        price: 249,
        name: "The bastard Medium",
        category: 219,
        description: "Suspendisse ultricies turpis in sapien varius, sed convallis dui sodales. Aenean a nisi id metus ullamcorper aliquet ullamcorper eget lectus. Nullam eget pulvinar erat. Fusce suscipit purus eget neque bibendum, vel malesuada mauris tempus.",
        image: "img_1.jpg"
    },
    {
        id: 4,
        price: 199,
        name: "tempus",
        category: 219,
        description: "Proin sit amet metus non dui ornare auctor eu sit amet felis. Aenean id tempus urna, eu porttitor est. Curabitur vel massa ac libero lacinia dignissim. Phasellus id rhoncus nulla. Quisque non enim non nulla tincidunt sagittis. Sed dictum rutrum risus sed hendrerit.",
        image: "img_1.jpg"
    },
    {
        id: 5,
        price: 600,
        name: "at interdum pharetra",
        category: 219,
        description: "Vivamus vel quam at ex iaculis egestas quis in sapien. In imperdiet risus sed justo sagittis maximus. Nulla elit nisi, placerat nec mi vel, iaculis ornare ipsum. Sed porttitor sapien non velit dignissim egestas ut sit amet dui. ",
        image: "img_1.jpg"
    },
    {
        id: 6,
        price: 999,
        name: "id pulvinar ligul",
        category: 219,
        description: "Aenean bibendum, tortor sed luctus tristique, ligula nulla blandit arcu, nec pharetra velit risus quis diam. Integer a turpis odio. Maecenas lacinia aliquet augue, non convallis elit. Sed non sem porttitor, tincidunt ipsum sed, interdum risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras fringilla arcu accumsan tellus pellentesque volutpat eu quis purus. ",
        image: "img_1.jpg"
    }
];*/

// create an XMLHttpRequest to perform an AJAX action
var request = new XMLHttpRequest(); 

// The initialize function is called from body.onload in HTML
// It configures the XMLHttpRequest and sends it to the server
function Initialize() {
    request = new XMLHttpRequest();
    // configure the request:
    // We use the GET method (as shown at https://dataweb.stoplight.io/docs/dwapi/reference/dwAPI.v1.json/paths/~1item~1read/get)
    // As a GET parameter, we use the url from that same page
    request.open("GET", "https://api.data-web.be/item/read?project=QNyG0s83pm3i&entity=producten");

    // When the server is ready and sends us a response, it needs a function to call
    // We've created the function 'ProcessServerResponse' for this purpose
    request.addEventListener("load", ProcessServerResponse);

    // after configuring the request, we can send it to the server!
    request.send();
}

// When the server is ready and sends us a response, it needs a function to call
// We've created the function 'ProcessServerResponse' for this purpose
function ProcessServerResponse() {
    // get the response from the server as text
    let responseText = request.responseText;
    // the response is actually JSON, so we parse it as a JSON file/string
    let responseJSON = JSON.parse(responseText);
    console.log(responseJSON);

    // all products can be found in the JSON object
    let products = responseJSON.data.items;

    // loop over all products
    for (let i = 0; i < products.length; ++i) {
        // create a product variable, to temporarily save each product in the list of products
        let product = products[i];

        // insert the product in the table
        InsertProductInTable(product.naam, product.categorie, product.omschrijving, product.prijs, product.afbeelding);
    }
}

// adds a product from the add-product form
function AddProductFromForm() {
    // get all the necessary values from the form
    let name = document.querySelector("form#newProduct>input[name='naam']").value;
    let desc = document.querySelector("form#newProduct>input[name='omschrijving']").value;
    let price = document.querySelector("form#newProduct>input[name='prijs']").value;
    let img = document.querySelector("form#newProduct>input[name='afbeelding']").value;
    let category = document.querySelector("form#newProduct>input[name='categorie']").value;

    // call the addproduct function with the right values
    AddProduct(name, category, desc, price, img);
}

// Adds a product to the database
function AddProduct(name, category, description, price, image) {
    // create a json object for the product
    // this should be passed to the "values" value of the formdata
    // e.g. {"naam": "Joske", "omschrijving": "Vermeulen", "afbeelding": "img3.jpg", "prijs": 54321, "categorie": "bbq"}
    let productJSON = `{"naam": "${name}", "omschrijving": "${description}", "afbeelding": "${image}", "prijs": ${price}, "categorie": "${category}"}`;

    // create a formdata object
    let formData = new FormData();
    // append the values of the productJSON variable
    formData.append("values", productJSON);

    // start a new request
    request = new XMLHttpRequest();
    // open the request with the correct URL
    request.open("POST", "https://api.data-web.be/item/create?project=QNyG0s83pm3i&entity=producten");

    // send the request to the server with the formData object in it's body
    request.send(formData);
}


function InsertProductInTable(name, category, description, price, image) {
    let tbody = document.querySelector("table#products>tbody");

    let row = tbody.insertRow();

    let cell = row.insertCell();
    cell.innerHTML = name;

    cell = row.insertCell();
    cell.innerHTML = category;

    cell = row.insertCell();
    cell.innerHTML = description;

    cell = row.insertCell();
    cell.innerHTML = price;

    cell = row.insertCell();
    cell.innerHTML += `<img src="${image}">`;

    cell = row.insertCell();
    cell.innerHTML += '<button type="button" class="btn btn-primary" onclick="verwijderen(this)">verwijderen</button>';
    cell.innerHTML += '<button type="button" class="btn btn-primary" onclick="bewaren(this)">bewaren</button>';
}

function verwijderen(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}