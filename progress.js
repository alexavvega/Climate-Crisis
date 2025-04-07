//for the scroll bar
window.addEventListener('scroll', function () {
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPosition = window.scrollY;
    var progressHeight = (scrollPosition / docHeight) * 100;
    document.getElementById('progress').style.height = progressHeight + '%';
}); 

const progressMarkers = document.querySelectorAll('.progress-marker');
const imageContainers = document.querySelectorAll('.all-images > div');

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    imageContainers.forEach((container, index) => {
        const containerTop = container.getBoundingClientRect().top;

        if (containerTop >= 0 && containerTop <= windowHeight / 2) {
            progressMarkers.forEach(marker => marker.classList.remove('active'));
            progressMarkers[index].classList.add('active');
        }
    });
});
