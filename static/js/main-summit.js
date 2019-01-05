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
    //Uncomment setimeout and function for a delay to test the loader
    // setTimeout(continueExecution, 1000);
    // function continueExecution(){
        document.getElementById("loader").style.display = "none";
        document.getElementById("page").style.display = "inherit";
        new Vivus('my-svg', {duration: 200, type: 'sync'}, afterKOSS);
        document.body.style.background = '#fff';
    // }
}

function afterKOSS() {
    
    const fadeOutKoss = new Promise(
        function fadeOutEffect(resolve, reject) {
            var el = document.getElementById("my-svg");
            el.style.opacity = 1;
            // el.style.display = display || "none";
        
            (function fadeOut() {
                var val = parseFloat(el.style.opacity);
                if (!((val -= .1) < 0)) {
                    el.style.opacity = val;
                    requestAnimationFrame(fadeOut);
                    // console.log("Opacify");
                    
                } else {
                    // console.log("Returning");
                    resolve();
                }
            })();
        }
    );

    fadeOutKoss.then(
        function FadeInOSS() {
            // console.log("This gets executed");
            document.getElementById("my-svg").style.display = "none";
            document.getElementById("after-text").style.display = "inherit";
            fadeIn(document.querySelector("#after-text"));
        }
    );
}
