// Scroll to right
//collect elements
let content = document.querySelector(".content")
let btnscrollright = document.querySelector(".btnscrollright")

btnscrollright.addEventListener("click", function(){
    window.scrollBy(1000,0)
})

//scrollable image gallery
// collect left and right buttons
let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")
let gallerycontainer = document.querySelector(".gallerycontainer")

//define one function for scroll left and scroll right
function scrollGallery(scrollpixels) {
    gallerycontainer.scrollBy({
        left:scrollpixels,
        behavior: "smooth"
    })

}

// add event to each button when its clicked
btnright.addEventListener("click", function(){
    scrollGallery(1000)
})
// add event to each button when its clicked
btnright.addEventListener("click", function(){
    scrollGallery(-1000)
})