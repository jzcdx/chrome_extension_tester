
let clickDiv = document.getElementById("clickLocation")
let clickLabel = document.getElementById("clLabel")
document.body.addEventListener('click', function(event) {
    //console.log(clickDiv.style.display)
    if (clickDiv.style.display === "none") {
        clickDiv.style.display === "block"
    }

    const x = event.clientX;
    const y = event.clientY;
    //console.log("clicked at " , x , y)
    //console.log(typeof x);

    clickDiv.style.top = (y - 10).toString() + "px";
    clickDiv.style.left = (x - 10).toString() + "px";
    clickLabel.innerHTML = "Click Location: (" + x.toString() + ", " + y.toString() + ")";
});