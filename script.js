var bu=document.getElementById('bu') 
var p2=document.getElementById('p2')
var bd=document.getElementById('bd')
let rgb=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","f",]
function change2(){
    color=["#"]
    let a
    for (let i=0;i<6;i++){
        a=Math.floor(Math.random()*16)
        color=color+rgb[a]

    }
    bd.style.backgroundColor=color
    p2.innerHTML=color
}
bu.addEventListener('click',change2)