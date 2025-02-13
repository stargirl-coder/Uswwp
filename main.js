const userAgent = navigator.userAgent;
const cover = document.getElementById("cover")
const body = document.querySelector("body")

if (userAgent.match(/Android/i)) {
    console.log("Device is a phone or tablet");
    cover.style.display = "block"
    body.style.display = "none"

} else if (userAgent.match(/iPad|iPhone|iPod/i)) {
    console.log("Device is an iPhone or iPad");
    cover.style.display = "block"
    body.style.display = "none"
} else if (userAgent.match(/Windows|Mac|Linux/i)) {
    console.log("Device is a computer");
    cover.style.display = "none"
} else {
    console.log("Device type is unknown or not detected");
    cover.style.display = "block"
    body.style.display = "none"
}
