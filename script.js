let changeImg = document.querySelector("#Myimg");
let circle = document.querySelector("#circle1");

circle.addEventListener("click",()=>{
    console.log("clicked");
    purple();
})
function purple (){
    changeImg.src = "purple.png"   
}

let circle2 = document.querySelector("#circle2");
circle2.addEventListener("click",()=>{
    twoCane();
})
function twoCane(){
    changeImg.src = "2nd cane.png";
}

let circle3 = document.querySelector("#circle3");
circle3.addEventListener("click",()=>{
    threeCane();
})
function threeCane(){
    changeImg.src = "3rd cane.png";
}
let circle4 = document.querySelector("#circle4");
circle4.addEventListener("click",()=>{
    fourCane();
})
function fourCane(){
    changeImg.src = "4th cane.png";
}