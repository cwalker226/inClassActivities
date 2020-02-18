var counter = document.getElementById("count");
var increment = document.getElementById("increment");
var decrement = document.getElementById("decrement");

increment.addEventListener("click", function(){
    var currentVal = parseInt(counter.textContent);
    counter.textContent = currentVal + 1;
    if(parseInt(counter.textContent) > 0){
        decrement.style.backgroundColor = "#247BA0";
        decrement.addEventListener("click", decrementFunc);
    }
});

// decrement.addEventListener("click", decrementFunc);

function decrementFunc(){
    var currentVal = parseInt(counter.textContent);
    counter.textContent = currentVal - 1;
    if(parseInt(counter.textContent) === 0){
        decrement.style.backgroundColor = "gray";
        decrement.removeEventListener("click", decrementFunc);
    }
}