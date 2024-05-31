var main = document.querySelector(".main")
var on = document.querySelector("#on")
var off = document.querySelector("#off")

on.addEventListener("click",function(){
    main.style.backgroundColor = "red"
})
off.addEventListener("click",function(){
    main.style.backgroundColor = "lightseagreen"
})