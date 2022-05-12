var images= [
    "images.jpg",
    "father-with-little-daughter-cartoon-clip-art-vector_csp71621764.jpg",
    "1d34c9b86f85e46f0c006e708d3b8178.jpg"
];
var i=0
function nextSlide(){

    document.getElementById("book").src=images[i];
    i++;
}
if(i==3)
{
    i=0;
}