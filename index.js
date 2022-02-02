const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const hideloader = document.querySelector(".preloader");

// We dont use toggle method on the switch because we want to add the functioning of playing and pausing the video in it as well
btn.addEventListener("click", function () {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause(); // because by default the video is playing and clicking the switch will make it move towards right which is pause
    }
    else {
        btn.classList.remove("slide");
        video.play();
    }
});

// hiding the preloader once the page content finishes loading
window.addEventListener("load",function(){
    hideloader.classList.add("hide-preloader");
});