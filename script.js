//---------------DOM-------------------------

// 1--> selection html-----
//  document.querySelector("h1")

// // 2--> selection html-----
// var a = document.querySelector ("h1")
// a.innerHTML = "change anything who write in html"

// // 3--> selection css------
// var a = document.querySelector("h1")
// a.style.color = "red"
// a.style.fontSize = "100px"
// a.style.backgroundColor = "violet"

// // 4--> event listner-------------------------

// var a = document.querySelector("h1")
// a.addEventListener("click",function(){
//     console.log ("heyyyyyy")
// })


// var a = document.querySelector("h1")
// a.addEventListener("mouseenter",function(){
//    alert("heyy you!  please off this function CLICK OK")
// })

// var a = document.querySelector("h1")
// a.addEventListener("mouseenter",function(){
//     a.innerHTML = "leave kr"
//     a.style.backgroundColor = "black"
//     a.style.color = "yellow"
//     a.style.fontSize = "100px"
// })


// var a = document.querySelector("h1")
// a.addEventListener("mouseleave",function(){
//     a.innerHTML = "rishabh srivastava"
//     a.style.backgroundColor = "black"
//     a.style.color = "yellow"
//     a.style.fontSize = "100px"
// })


var bulb = document.querySelector(".bulb")
var btn = document.querySelector("button")
var flag = 0
btn.addEventListener("click",function(){
    if(flag ==0 ){
        bulb.style.backgroundColor = "yellow"
        flag = 1
    }
    else{
        bulb.style.backgroundColor = "transparent"
        flag = 0
    }
})