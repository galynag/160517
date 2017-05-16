window.onload = function() {
    document.getElementById("top").onclick = function() {
        window.scrollTo(0,0);
    }
}
window.onmousewheel = function(event) {
    event=event||window.event;
    console.log('wheel');
}
window.onscroll = function(event) {
    event=event||window.event;
    console.log(event);
}

