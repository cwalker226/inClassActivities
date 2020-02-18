// Create your HTML Page via DOM Methods here!
var h1Tag = document.createElement("h1");
var h2Tag = document.createElement("h2");
var imgTag = document.createElement("img");
var paraTag = document.createElement("p");
var listTag = document.createElement("ul");
var listItem1 = document.createElement("li");
var listItem2 = document.createElement("li");
var listItem3 = document.createElement("li");

h1Tag.textContent = "This is the title";
h2Tag.textContent = "This is the subtitle";
listTag.textContent = "My favorite fruit";
listItem1.textContent = "Apple";
listItem2.textContent = "Orange";
listItem3.textContent = "Pear";

listTag.appendChild(listItem1);
listTag.appendChild(listItem2);
listTag.appendChild(listItem3);

document.body.appendChild(h1Tag);
document.body.appendChild(h2Tag);
document.body.appendChild(imgTag);
document.body.appendChild(paraTag);
document.body.appendChild(listTag);

h1Tag.setAttribute("style", "text-align: center");
h2Tag.setAttribute("style", "text-align: center");

imgTag.setAttribute("src", "https://www.vitoshacademy.com/wp-content/uploads/2015/04/JS.png");
imgTag.setAttribute("style", "text-align: center");
paraTag.textContent = "Javascript Logo";
paraTag.setAttribute("style", "text-align: center");
