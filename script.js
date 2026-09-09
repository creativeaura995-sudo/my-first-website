// =========================
// HAMBURGER MENU
// =========================

const menuButton = document.querySelector("#menuButton");

const navLinks = document.querySelector("#navLinks");


menuButton.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a link

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


// =========================
// GALLERY LIGHTBOX
// =========================

const galleryImages =
    document.querySelectorAll(".gallery-item img");

const lightbox =
    document.querySelector("#lightbox");

const lightboxImage =
    document.querySelector("#lightboxImage");

const closeLightbox =
    document.querySelector("#closeLightbox");


galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        lightboxImage.src = image.src;

        lightbox.style.display = "flex";

    });

});


closeLightbox.addEventListener("click", function() {

    lightbox.style.display = "none";

});


lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});


// =========================
// APPOINTMENT FORM
// =========================

const bookingForm =
    document.querySelector("#bookingForm");


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.querySelector("#customerName").value;

    const phone =
        document.querySelector("#customerPhone").value;

    const date =
        document.querySelector("#appointmentDate").value;

    const time =
        document.querySelector("#appointmentTime").value;

    const message =
        document.querySelector("#customerMessage").value;


    const phoneNumber = "919876543210";


    const whatsappMessage =
        "Hello! I would like to book an appointment.%0A%0A" +

        "Name: " +
        encodeURIComponent(name) +
        "%0A" +

        "Phone: " +
        encodeURIComponent(phone) +
        "%0A" +

        "Date: " +
        encodeURIComponent(date) +
        "%0A" +

        "Time: " +
        encodeURIComponent(time) +
        "%0A" +

        "Requirement: " +
        encodeURIComponent(message);


    const whatsappURL =
        "https://web.whatsapp.com/send?phone=" +
        phoneNumber +
        "&text=" +
        whatsappMessage;


    window.location.href = whatsappURL;

});


// =========================
// CONTACT WHATSAPP
// =========================

const contactButton =
    document.querySelector("#contactButton");


contactButton.addEventListener("click", function() {

    const phoneNumber = "919876543210";

    const message =
        "Hello! I am interested in your website services.";


    const whatsappURL =
        "https://web.whatsapp.com/send?phone=" +
        phoneNumber +
        "&text=" +
        encodeURIComponent(message);


    window.location.href = whatsappURL;

});
