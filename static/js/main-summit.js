
// fade out

function fadeOut(el){
    el.style.opacity = 1;
  
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
}
  
// fade in
  
function fadeIn(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .05) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}
  

function myFunction() {
    setTimeout(continueExecution, 1000);
    function continueExecution(){
        new Vivus('my-svg', {duration: 200, type: 'sync'}, afterKOSS);
        document.body.style.background = '#fff';
        document.getElementById("loader").style.display = "none";
        document.getElementById("page").style.display = "inherit";
    }
}

function afterKOSS() {
    document.getElementById("my-svg").style.display = "none";
    document.getElementById("after-text").style.display = "inherit";
    fadeIn(document.querySelector("#after-text"));
}

