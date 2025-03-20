let changeImg = document.querySelector("#Myimg");
let circle = document.querySelector("#circle1");
let spanText = document.querySelector("#span_text");
let btn= document.querySelector("#btn");

circle.addEventListener("click",()=>{
    console.log("clicked");
    changeImg.src = "purple.png"
    spanText.style.color="purple"
})

let circle2 = document.querySelector("#circle2");
circle2.addEventListener("click",()=>{
    changeImg.src = "2nd cane.png";
})

let circle3 = document.querySelector("#circle3");
circle3.addEventListener("click",()=>{
      changeImg.src = "3rd cane.png";
})

let circle4 = document.querySelector("#circle4");
circle4.addEventListener("click",()=>{
   changeImg.src = "4th cane.png";
})
