var randomImage = function(src, name) {
    this.src = src;
    this.points = 0;
    this.name = name;
}

var totalClicks = 0

var imageOptions = [
    new randomImage("images/bag.jpg", "Star Wars Suitcase"),
    new randomImage("images/banana.jpg", "Banana Slicer"),
    new randomImage("images/boots.jpg", "Yellow Useless Boots"),
    new randomImage("images/chair.jpg", "Uncomfortable Chair"),
    new randomImage("images/cthulhu.jpg", "Cthulu Actuon Figure"),
    new randomImage("images/dragon.jpg", "Canned Dragon Meat"),
    new randomImage("images/pen.jpg", "Bic Cutlery"),
    new randomImage("images/scissors.jpg", "Pizza Scissors"),
    new randomImage("images/shark.jpg", "Shark Sleeping Bag"),
    new randomImage("images/sweep.jpg", "Cleaning Toddler Outfit"),
    new randomImage("images/unicorn.jpg", "Unicorn Meat"),
    new randomImage("images/usb.jpg", "Tentacale USB"),
    new randomImage("images/water_can.jpg", "Futile Watering Can"),
    new randomImage("images/wine_glass.jpg", "Speed Drinking Wine Glass"),
]

var pickedImage = [];
document.getElementById("image-container").addEventListener("click", recordClick)


function getImages() {
    pickedImage = [];
    for (var imageID = 1; imageID <= 3; imageID++) {
        do {
            var index = Math.floor(Math.random() * 14);
            if (pickedImage.indexOf(index) >= 0) {
                console.log("Duplicate! " + imageOptions[index].name)
            }
        }
        while (pickedImage.indexOf(index) >= 0);
        var source = imageOptions[index].src;
        document.getElementById("image" + imageID).src = source;
        pickedImage.push(index);

    }
}

function recordClick(event) {
  totalClicks++
    var clickedImage = event.target;
    console.log(clickedImage);
    var imageSource = clickedImage.src;
    for (var index = 0; index < imageOptions.length; index++) {
        if (imageSource.indexOf(imageOptions[index].src) >= 0) {
            imageOptions[index].points++;
            console.log(imageOptions[index].name);
        }
    }
}

window.onload(getImages())



// ONCE CLICKED, REFRESH -- in that function, you want a "progress bar" - ref to the unused voting results trable
// Progress +totalClicks+ of 15
// take away each sentence after u write it, otherwise infinte
// a global scope object that exists outside the click event that traces clicks
