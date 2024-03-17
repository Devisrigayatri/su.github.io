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

var lastTouchTime = 0;

function handleTouch() {
    var currentTime = new Date().getTime();
    var timeSinceLastTouch = currentTime - lastTouchTime;

    if (timeSinceLastTouch < 300) {
        // Double-tap detected
        openInNewPage();
    } else {
        // Single tap detected
        enlargeImage();
    }

    lastTouchTime = currentTime;
}

function enlargeImage() {
    var image = document.getElementById('enlargedImage');
    image.classList.toggle('enlarged');
}

function openInNewPage() {
    // Double-tap action (open in a new page)
    window.open("./pics/1.jpg", "_blank");
}
function openInNewPage2() {
    // Double-tap action (open in a new page)
    window.open("./pics/2.jpg", "_blank");
}

function openInNewPage3() {
    // Double-tap action (open in a new page)
    window.open("./pics/3.jpg", "_blank");
}
function openInNewPage4() {
    // Double-tap action (open in a new page)
    window.open("./pics/4.jpg", "_blank");
}

function openInNewPage5() {
    // Double-tap action (open in a new page)
    window.open("./pics/5.jpg", "_blank");
}
function openInNewPage6() {
    // Double-tap action (open in a new page)
    window.open("./pics/6.jpg", "_blank");
}
function openInNewPage7() {
    // Double-tap action (open in a new page)
    window.open("./pics/7.jpg", "_blank");
}
function openInNewPage8() {
    // Double-tap action (open in a new page)
    window.open("./pics/8.jpg", "_blank");
}
function openInNewPage9() {
    // Double-tap action (open in a new page)
    window.open("./pics/9.jpg", "_blank");
}
function openInNewPage10() {
    // Double-tap action (open in a new page)
    window.open("./pics/10.jpg", "_blank");
}
function openInNewPage11() {
    // Double-tap action (open in a new page)
    window.open("./pics/11.jpg", "_blank");
}
function openInNewPage12() {
    // Double-tap action (open in a new page)
    window.open("./pics/12.jpg", "_blank");
}