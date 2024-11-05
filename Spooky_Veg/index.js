
var currentCart = [];
var sandwich = "Spooky Veg";


function Order(){
    var price = 0;
    var toppingChanges = [sandwich, price]

    if(document.getElementById("Mini").checked){
        toppingChanges[toppingChanges.length] = "Mini";
        price += 4.75;
    }
    if(document.getElementById("Regular").checked){
        toppingChanges[toppingChanges.length] = "Regular";
        price += 6.75;
    }
    if(document.getElementById("Large").checked){
        toppingChanges[toppingChanges.length] = "Large";
        price += 8.75;
    }
    if(document.getElementById("Rye").checked){
        toppingChanges[toppingChanges.length] = "Rye";
    }
    if(document.getElementById("WholeWheat").checked){
        toppingChanges[toppingChanges.length] = "Whole Wheat Roll";
    }
    if(document.getElementById("Toasted").checked){
        toppingChanges[toppingChanges.length] = "Toasted";
    }
    if(document.getElementById("Not Toasted").checked){
        toppingChanges[toppingChanges.length] = "Not Toasted";
    }


    toppingChanges[1] = price;

    if(currentCart === null)
        currentCart[0] = toppingChanges;
    else
        currentCart[currentCart.length] = toppingChanges;

    localStorage.setItem("cart", JSON.stringify(currentCart));
    UpdateCart();

}
function Reload(){
    if(JSON.parse(localStorage.getItem("cart")) === null)
        currentCart = [];
    else
        currentCart = JSON.parse(localStorage.getItem("cart"));
    UpdateCart();

}
function UpdateCart(){
    var parentDiv = document.getElementById("itemsDiv");
    document.getElementById("items").innerHTML = "Items: " + currentCart.length;
    var totalPrice = 0;
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.lastChild);
    }

    for(var i = 0; i < currentCart.length; i++)
    {
        var div = document.createElement("div");
        div.style.display = "flex";
        div.style.backgroundColor= "lightgray";
        div.style.width = "100%";

        var info = div.appendChild(document.createElement("div"));
        info.style.width = "60%";

        var sandwichName = info.appendChild(document.createElement("h4"));
        sandwichName.innerHTML = currentCart[i][0];

        var toppings = info.appendChild(document.createElement("p"));
        var toppingsString = "";

        for(var z = 2; z < currentCart[i].length; z++)
        {
            if (z !== 2)
            {
                toppingsString = toppingsString + ", ";
            }
            toppingsString = toppingsString + currentCart[i][z];
        }
        toppings.innerHTML = toppingsString;

        sandwichName.style.margin = "0px";
        toppings.style.margin = "0px";
        var price = div.appendChild(document.createElement("h4"));
        price.innerHTML = "$" + currentCart[i][1];
        price.style.width = "20%";
        price.style.margin = "0px";
        price.style.fontSize = "1.5vw" ;
        totalPrice += currentCart[i][1];



        var deleteButton = div.appendChild(document.createElement("button"));
        deleteButton.style.width = "20%";
        deleteButton.onclick = function(){DeleteItem(currentCart[i])};
        deleteButton.addEventListener("click", function(){DeleteItem(currentCart[i])})
        parentDiv.appendChild(div);
    }
    document.getElementById("price").innerHTML = "Total: $" + (new Intl.NumberFormat().format(totalPrice));

}
function DeleteItem(toppingChanges){

    currentCart.splice(currentCart.indexOf(toppingChanges),1);
    Reload();
    UpdateCart();

}
function DeleteAll(){

    localStorage.clear();
    Reload();
    UpdateCart();

}
function checkOut(){
    window.location.href = "../Cart";
}
function HomePage(){
    window.location.href = "..";
}