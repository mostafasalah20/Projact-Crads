


let product = document.getElementById("product")
let carogry = document.getElementById("carogry")
let price = document.getElementById("price")
let description = document.getElementById("description")
let productIMG = document.getElementById("productIMG")
let btn_add=document.getElementById("btn-add")
let btn_update=document.getElementById("btn-update")
let search=document.getElementById("search");



let productscontainer = [];


function add() {
    let products = {
        Name: product.value,
        carogry: carogry.value,
        Price: price.value,
        Description: description.value,
        IMG:`images/${productIMG.files[0].name}`,
    }


    productscontainer.push(products)
    display();
    save();
    clearinput();
    g_update="";
    
}
function display() {
    let cartona = ``
    for (let i = 0; i < productscontainer.length; i += 1) {
        cartona += `
    
    <div class="col-md-3 ps-1">
    <div class="card" style="width: 18rem;">
        <img src=${productscontainer[i].IMG} class="card-img-top rounded" alt="...">
        <div class="card-body">
          <h5 class="card-title">Name : ${productscontainer[i].Name}</h5>
          <p class="card-text">carogry : ${productscontainer[i].carogry}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Price : ${productscontainer[i].Price}</li>
          <li class="list-group-item">Description : ${productscontainer[i].Description}</li>
          <button onclick="deleteitem(${i})"  class="btn btn-outline-danger w-100 m-auto mt-2">Delete</button>
          <button  onclick="updateitem(${i})"   class="btn btn-outline-success w-100 m-auto mt-2">update</button>
        </ul>
    </div>
    </div>  
    `
    }

    document.getElementById("row").innerHTML = cartona
}

function clearinput() {

    product.value = "";
    carogry.value = "";
    price.value = "";
    description.value = "";
    // IMG.files[0].value="";

}

function save() {
    localStorage.setItem("all product", JSON.stringify(productscontainer))
}


    if (localStorage.getItem("all product") != null) {
        productscontainer = JSON.parse(localStorage.getItem("all product"))
        display();
    }



function deleteitem(index) {
    productscontainer.splice(index, 1);
    save()
    display();
    
}
function updateitem(index) {
    g_update=index;
    
    product.value = productscontainer[index].Name;
    carogry.value = productscontainer[index].carogry;
    price.value = productscontainer[index].Price;
    description.value = productscontainer[index].Description;
    btn_add .classList.add("d-none");
    btn_update.classList.remove("d-none");
}

function add_update(){
    productscontainer[g_update].Name=product.value;
    productscontainer[g_update].carogry=carogry.value;
    productscontainer[g_update].Price=price.value;
    productscontainer[g_update].Description=description.value;  
    btn_add.classList.remove("d-none");
    btn_update.classList.add("d-none");
    display()
    save()
    clearinput()
}

function searchproduat(){
    let term=search.value;
    let cartona = ``;
    for (let i = 0; i < productscontainer.length; i += 1) {
        if (productscontainer[i].Name.toLowerCase().includes(term.toLowerCase()) ==true) {
            
            // console.log([i])
            cartona += `
            <div class="col-md-3">
            <div class="card" style="width: 18rem;">
            <img src=${productscontainer[i].IMG} class="card-img-top rounded" alt="...">
            <div class="card-body">
            <h5 class="card-title">Name : ${productscontainer[i].Name}</h5>
            <p class="card-text">carogry : ${productscontainer[i].carogry}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Price : ${productscontainer[i].Price}</li>
            <li class="list-group-item">Description : ${productscontainer[i].Description}</li>
            <button onclick="deleteitem(${i})"  class="btn btn-outline-danger w-100 m-auto mt-2">Delete</button>
            <button  onclick="updateitem(${i})"   class="btn btn-outline-success w-100 m-auto mt-2">update</button>
            </ul>
            </div>
            </div>`
             }
            document.getElementById("row").innerHTML = cartona
             }
            //  if(term==""){
            //      display()
            //  }
}

