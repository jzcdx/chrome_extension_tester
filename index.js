
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

let timeout = undefined;
let flashTimeout = undefined;
document.getElementById("l1").onclick = async function () {
    let light = document.getElementById("l1Light");
    if (light.style.display === "block"/* || light.style.display === ""*/) {
        light.style.display = "none";

        clearTimeout(flashTimeout);
        let flashPromise = new Promise(resolve => {
            flashTimeout = setTimeout(() => {
                light.style.display = "block";
                resolve()
            }, 50);
        }); 
        await flashPromise
    } else {
        light.style.display = "block";
    }
    light.style.display = "block";


    clearTimeout(timeout);
    timeout = setTimeout(() => {
        light.style.display = "none";
    }, 2000); // change 5000 to the number of milliseconds you want to wait before hiding the label
    //test
}