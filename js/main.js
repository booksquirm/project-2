const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselPrev = carousel.querySelector('.carousel-control-prev');
const carouselNext = carousel.querySelector('.carousel-control-next');

// The 12 images I'm using in this carousel. This is an array.
const images = [
  'halloween-image1.jpg',
  'halloween-image2.jpg',
  'halloween-image3.jpg',
  'halloween-image4.jpg',
  'halloween-image5.jpg',
  'halloween-image6.jpg',
  'halloween-image7.jpg',
  'halloween-image8.jpg',
  'halloween-image9.jpg',
  'halloween-image10.jpg',
  'halloween-image11.jpg',
  'halloween-image12.jpg',
];

// Starting with the current image 1 (also known as 0).
let currentImageIndex = 0;

// Showing the current image.
function displayCurrentImage() {
  carouselInner.children[currentImageIndex].style.display = 'block';
  for (let i = 0; i < carouselInner.children.length; i++) {
    if (i !== currentImageIndex) {
      carouselInner.children[i].style.display = 'none';
    }
  }
}

// Shows the current image on page load.
displayCurrentImage();

// Listener events for button clicks.
carouselPrev.addEventListener('click', function() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  displayCurrentImage();
});

carouselNext.addEventListener('click', function() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  displayCurrentImage();
});

// Cursor
document.addEventListener("mousemove", function(event) {
  var cursor = document.querySelector(".cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});