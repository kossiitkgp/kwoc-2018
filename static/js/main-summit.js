
function myFunction() {
    setTimeout(continueExecution, 1000);
    function continueExecution(){
        document.body.style.background = '#fff';
        document.getElementById("loader").style.display = "none";
        document.getElementById("page").style.display = "block";
    }
}
