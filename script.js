let changeImg = document.querySelector("#Myimg");
let circle = document.querySelector("#circle1");
let spanText = document.querySelector("#span_text");
let btn= document.querySelector("#btn");

circle.addEventListener("click",()=>{
    console.log("clicked");
    changeImg.src = "purple.png"
    spanText.style.color="bluevoilet"
    btn.style.background="bluevoilet"
})

let circle2 = document.querySelector("#circle2");
circle2.addEventListener("click",()=>{
    changeImg.src = "2nd cane.png";
    spanText.style.color="rgb(214, 176, 79)"
    btn.style.background=" rgb(214, 176, 79)"
})

let circle3 = document.querySelector("#circle3");
circle3.addEventListener("click",()=>{
      changeImg.src = "3rd cane.png";
     spanText.style.color="rgb(219, 118, 35)"
    btn.style.background=" rgb(219, 118, 35)"
})

let circle4 = document.querySelector("#circle4");
circle4.addEventListener("click",()=>{
   changeImg.src = "4th cane.png";
     spanText.style.color="rgb(187, 189, 191)"
    btn.style.background=" rgb(187, 189, 191)"
})
