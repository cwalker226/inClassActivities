var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

eventType.addEventListener("change", toggleDisplay);

function toggleDisplay(event = null) {
  var value = event === null ? "keydown":event.target.value;
  
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
    document.addEventListener("keydown", displayKey);
    document.removeEventListener("click", displayClick);
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
    document.removeEventListener("keydown", displayKey);
    document.addEventListener("click", displayClick);
  }
}

function displayKey(event){
  keyEventsEl.querySelector("#key").textContent = event.key;
  keyEventsEl.querySelector("#code").textContent = event.code;
  keyEventsEl.querySelector("#status").textContent = event.type;
}

function displayClick(event){
  mouseEventsEl.querySelector("#target").textContent = "";
  mouseEventsEl.querySelector("#target").textContent = event.target.textContent;
  mouseEventsEl.querySelector("#x").textContent = event.x;
  mouseEventsEl.querySelector("#y").textContent = event.y;
}

toggleDisplay();