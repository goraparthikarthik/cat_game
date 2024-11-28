let bulbImage = document.getElementById("bulbimage");
let catImage = document.getElementById("catimage");
let switchStatus = document.getElementById("switchstatus");
let offbutton = document.getElementById("switchOff");
let onbutton = document.getElementById("switchOn");

function switchoff() {
    bulbImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchStatus.textContent = "Switched Off";
    offbutton.style.backgroundColor = "#cbd2d9";
    onbutton.style.backgroundColor = "#22c55e";
    
}

function switchon() {
    bulbImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchStatus.textContent = "Switched On";
    offbutton.style.backgroundColor = "#e12d39";
    onbutton.style.backgroundColor =  "#cbd2d9";
}