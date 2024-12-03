
const name1 = document.getElementById("name")
const start = document.getElementById("start")
const viewscore = document.getElementById("viewscore")

let i = 0
function randam(){
    let names = ["arav","rav","kkk","asdf"]
    name1.value = names[i]
    if(i < 2){
        i++
    }
    else{
        i=0
    }
}

start.addEventListener("click",() => {
    if(name1.value === ""){
        alert("Before start enter the name")
    }
    else{
        location.href= "index2.html"
    }
})
