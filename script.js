// Add your existing JavaScript code here

// Testimonial Carousel Initialization
document.addEventListener('DOMContentLoaded', function () {
    var testimonialCarousel = new Glide('.testimonial-carousel', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
        gap: 20, // Adjust the gap as needed
    });

    testimonialCarousel.mount();

    // Navigation Button Event Listeners
    document.querySelector('.prev-btn').addEventListener('click', function () {
        testimonialCarousel.go('<');
    });

    document.querySelector('.next-btn').addEventListener('click', function () {
        testimonialCarousel.go('>');
    });
});

function enlargeImage() {
    // Get the original and enlarged image elements
    var originalImage = document.getElementById('oil-painting-image');
    var enlargedImage = document.getElementById('enlarged-oil-painting');

    // Set the source of the enlarged image to be the same as the original image
    enlargedImage.src = originalImage.src;

    // Display the enlarged image container
    document.getElementById('enlarged-image').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function(){
      document.getElementById('popup').style.display = 'block';
    }, 5000); // 5 seconds
  });
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  