var imgTags = document.querySelectorAll("img");
var srcArry = ["https://www.vitoshacademy.com/wp-content/uploads/2015/04/JS.png",
                "https://d2h0cx97tjks2p.cloudfront.net/blogs/wp-content/uploads/sites/2/2019/07/Ways-of-Using-JavaScript-Events.png",
                "https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png"];
var altArry = ["Javascript Logo", "Ways of using Javascript events", "HTML + CSS3 + Javascript"];
var aTags = document.querySelectorAll("a");
var hrefArray = ["https://www.vitoshacademy.com", "https://www.w3schools.com/", "https://google.com"];

for (var i = 0; i < imgTags.length; i++){
    imgTags[i].setAttribute("src", srcArry[i]);
    imgTags[i].setAttribute("alt", altArry[i]);
}

for (var j = 0; j < aTags.length; j++){
    aTags[j].setAttribute("href", hrefArray[j]);
}