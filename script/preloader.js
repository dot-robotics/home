document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById("preloader");
    var logo = document.querySelector(".logo");

    setTimeout(function () {
        preloader.style.opacity = 0;
        setTimeout(function () {
            preloader.style.display = "none";
            document.body.style.overflow = "visible"; // Show overflow after preloader is done
        }, 500); // Adjust timing to match the transition duration
    }, 2000); // Adjust the preloader duration (in milliseconds)

    // Fading out the logo during preloader
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var opacityValue = 1 - scrollPosition / 200;
        logo.style.opacity = opacityValue;
    });
});