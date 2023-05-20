
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

document.getElementById("l1").onclick = function () {
    console.log("helo")
    let light = document.getElementById("l1Light");
    light.style.display = "block";

    setTimeout(() => {
            light.style.display = "none";
    }, 3000); // change 5000 to the number of milliseconds you want to wait before hiding the label
}