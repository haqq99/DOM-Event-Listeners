var headOne = document.querySelector("#one");
var headTwo = document.querySelector("#two");
var headThree = document.querySelector("#three");

headOne.addEventListener("mouseover",function(){
    headOne.textContent = "Thanks for Hovering";
    headOne.style.color = "red";
})

headOne.addEventListener("mouseout",function(){
    headOne.textContent = "Hover Over Me";
    headOne.style.color = "black";
})

headTwo.addEventListener("click",function(){
    headTwo.textContent = "Thanks for Clicking";
    headTwo.style.color = "blue";
})

headThree.addEventListener("dblclick",function(){
    headThree.textContent = "Thanks for Double Clicking";
    headThree.style.color = "green";
})
