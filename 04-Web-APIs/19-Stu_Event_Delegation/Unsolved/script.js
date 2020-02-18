var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

var people = [{ name: "Bob" }];
var currentId = 0;

function addPersonToList(event) {
  event.preventDefault();
  if(nameEl.value.length > 0){
    var name = nameEl.value;
    var li = document.createElement("li");
    li.id = people.length;
    li.innerHTML = name + " <button>edit</button>";
    people.push({ name: name });
    peopleListEl.append(li);
    nameEl.value = "";
  }else{
    alert("Please enter some text!");
  }
}

function close() {
  modalEl.style.display = "none";
}

function handleClick(event) {
  // Use event delegation to handle when the user clicks "edit"\
  event.preventDefault();
  if(event.target.matches("button")){
    currentId = parseInt(event.target.parentElement.id);

    modalEl.style.display = "block";
    modalNameEl.textContent = people[currentId].name;
    
    if(people[currentId].description != undefined){
      descriptionEl.value = people[currentId].description;
    }else{
      descriptionEl.value = "";
    }
    
  }
}

function saveValues(event){
  event.preventDefault();
  people[currentId].description = descriptionEl.value;
  close();
}

saveBtn.addEventListener("click", saveValues);

closeEl.addEventListener("click", close);
addBtn.addEventListener("click", addPersonToList);
peopleListEl.addEventListener("click", handleClick);
