var images = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/201",
    "https://picsum.photos/300/202",
    "https://picsum.photos/300/203"
];
var nextBtn = document.querySelector(".next");
var previousBtn = document.querySelector(".prev");
var box = document.querySelector(".carouselbox");
var imgCnt = 0;

nextBtn.addEventListener("click", function(event){
    event.stopPropagation();
    console.log(imgCnt);
    box.style.backgroundImage = "url('" + images[imgCnt] + "')";
    imgCnt++;
});

previousBtn.addEventListener("click", function(){
    event.stopPropagation();
    console.log(imgCnt);
    box.style.backgroundImage = "url('" + images[imgCnt] + "')";
    imgCnt--;
})