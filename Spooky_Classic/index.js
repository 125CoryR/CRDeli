
var toppingChanges = {}
function Order(){

    if(document.getElementById("Ciabatta").checked){
        toppingChanges[toppingChanges.length]= "Ciabatta Roll";
    }
    if(document.getElementById("WholeWheat").checked){
        toppingChanges[toppingChanges.length]= "Whole Wheat Roll";
    }


}