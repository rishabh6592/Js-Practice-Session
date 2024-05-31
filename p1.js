var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var flag = 0

btn.addEventListener("click",function(){
    if(flag ==0 ){
        istatus.innerHTML = "friends"
        istatus.style.color = "green"
        flag = 1
        btn.innerHTML = "remove"
    }
    else{
        istatus.innerHTML = "removed"
        istatus.style.color = "red"
        flag = 0
        btn.innerHTML = "add friends"
    }
    alert("friend ban gyi ye ladki")
})


// var istatus = document.querySelector("h5")
// remove.addEventListener("click",function(){
//     istatus.innerHTML = "removed"
//     istatus.style.color = "red"
// })