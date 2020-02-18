var mealTotal = document.getElementById("price");
var percent = document.getElementById("percent");

document.getElementById("submit").addEventListener("click", function (event){
    event.preventDefault();
    document.getElementById("tip-amount").textContent = (parseFloat(mealTotal.value) * (parseFloat(percent.value)/100)).toString();
    document.getElementById("new-total").textContent = (parseFloat(mealTotal.value) + (parseFloat(mealTotal.value) * (parseFloat(percent.value)/100))).toString();
});