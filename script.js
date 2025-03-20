let changeImg = document.querySelector("#Myimg");
let circle = document.querySelector("#circle1");
let button = document.querySelector(".btn");
let text_span = document.querySelector(".campa");

circle.addEventListener("click",()=>{
    console.log("clicked");
    button.style.backgroundColor="blueviolet"
    text_span.style.color="blueviolet"
    changeImg.src = "purple.png"
})

let circle2 = document.querySelector("#circle2");
circle2.addEventListener("click",()=>{
    changeImg.src = "2nd cane.png";
    text_span.style.color="rgb(214, 176, 79)"
    button.style.backgroundColor="rgb(214, 176, 79)"
})

let circle3 = document.querySelector("#circle3");
circle3.addEventListener("click",()=>{
    changeImg.src = "3rd cane.png";
    text_span.style.color="rgb(219, 118, 35)"
    button.style.backgroundColor="rgb(219, 118, 35)"
})
let circle4 = document.querySelector("#circle4");
circle4.addEventListener("click",()=>{
    changeImg.src = "4th cane.png";
    text_span.style.color="rgb(164, 165, 167)"
    button.style.backgroundColor="rgba(139, 139, 139, 0.72)"
})
