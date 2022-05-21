
var SlideIndex= 1;
showSlides(SlideIndex);
function plusSlides(n){
    showSlides(SlideIndex +=n);  
}
function showSlides(n){
var i;
var Slides = document .getElementsByClassName("mySlides");
if (n > Slides.length){SlideIndex=1}
if (n <1) {SlideIndex = Slides.length}
for (i=0;i<Slides.length;i++){
    Slides[i].style.display="none";
}
Slides[SlideIndex-1].style.display="block";
}