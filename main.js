let days = document.querySelector(".d");
let hours = document.querySelector(".h");
let minutes = document.querySelector(".m");
let seconds = document.querySelector(".s");





let count = new Date("Dec 31, 2025 23:59:59").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let diffrence = count - now;

let days= Math.floor(diffrence / (1000 * 60 * 60 * 24));

document.querySelector(".d").innerHTML = days;
 ;
    document.querySelector(".h").innerHTML = Math.floor((diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector(".m").innerHTML = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector(".s").innerHTML = Math.floor((diffrence % (1000 * 60)) / 1000);

    let hours = Math.floor((diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diffrence % (1000 * 60)) / 1000);



}, 1000);