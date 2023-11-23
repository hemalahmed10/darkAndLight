var board = document.querySelector(".board");
var turnOn = document.querySelector("#light");
var turnOf = document.querySelector("#dark");
var circle = document.querySelector(".circle");
var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var creator = document.querySelector(".creator");

board.addEventListener("mouseenter",function(){
    turnOn.style.display="block";
    circle.style.backgroundColor="red"
    p1.style.display="block"
    p2.style.display="none"
    creator.style.opacity="1"
    creator.style.scale="1"
});
board.addEventListener("mouseleave",function(){
    turnOn.style.display="none";
    circle.style.backgroundColor="transparent"
    p1.style.display="none"
    p2.style.display="block"
    creator.style.opacity="0"
    creator.style.scale="0"
});
