/* ==================================================
# Carousel - image slider
===================================================*/
const carousel = document.querySelector(".carousel");

let isDragging = false;

const dragStart = () => {
    isDragging = true;
    carousel.classList.add("dragging");  
}

const dragging = (e) => {
    carousel.scrollLeft = e.pageX;
    console.log(e.pageX);
}

carousel.addEventListener("mousemove", dragging);

// carousel.addEventListener("mousemove", (e) => {
//     carousel.scrollLeft = e.pageX;
// });