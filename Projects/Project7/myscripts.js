// JavaScript Document
function preloadImages() {
    var images = [];
    images[0] = new Image();
    images[0].src = "Images/logo2.jpg";

    images[1] = new Image();
    images[1].src = "Images/Fullsize/pet1.jpg";

    images[2] = new Image();
    images[2].src = "Images/Fullsize/pet2.jpg";

    images[3] = new Image();
    images[3].src = "Images/Fullsize/pet3.jpg";

    images[4] = new Image();
    images[4].src = "Images/Fullsize/pet4.jpg";
}

function swapImage(newImage) {
    document.getElementById("fullsize").src = newImage;
}