// Update the progress bar height based on the scroll position
window.addEventListener('scroll', function () {
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPosition = window.scrollY;
    var progressHeight = (scrollPosition / docHeight) * 100;
    document.getElementById('progress').style.height = progressHeight + '%';
});
