var products = [
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
]

function Initialize() {
    let tbody = document.querySelector("table#products>tbody");

    for(let i = 0; i < products.length; ++i) {
        let product = products[i];

        let row = tbody.insertRow();


        let cell = row.insertCell();
        cell.innerHTML = product.name;

        cell = row.insertCell();
        cell.innerHTML = product.category;

        cell = row.insertCell();
        cell.innerHTML = product.description;

        cell = row.insertCell();
        cell.innerHTML = product.price;

        cell = row.insertCell();
        cell.innerHTML += `<img src="${product.image}">`;

        cell = row.insertCell();
        cell.innerHTML += '<button type="button" class="btn btn-primary" onclick="verwijderen(this)">verwijderen</button>';
        cell.innerHTML += '<button type="button" class="btn btn-primary" onclick="bewaren(this)">bewaren</button>';
    }

}

function verwijderen(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}