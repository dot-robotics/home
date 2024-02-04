// Side Bar Toggle
const sidebar = document.querySelector('.sidebar');
var menu = document.getElementById("menu");

menu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Changing Background Video
function changeVideo(name) {
    const bgVideoList = document.querySelectorAll('.bg-video');
    const models = document.querySelectorAll('.model');
    // mapping video
    bgVideoList.forEach(video => {
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
        }
    });
    // mapping name
    models.forEach(model => {
        model.classList.remove('active');
        if (model.classList.contains(name)) {
            model.classList.add('active');
        }
    });
}