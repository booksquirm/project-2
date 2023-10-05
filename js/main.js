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

// Start with image 1 (which is at index 0).
let currentImageIndex = 0;

// Displays the current image and hide all other images.
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

// Listener event for button clicks for displaying previous image.
carouselPrev.addEventListener('click', function() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  displayCurrentImage();
});

// Listener event for button clicks for displaying next image.
carouselNext.addEventListener('click', function() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  displayCurrentImage();
});
