let divs = ["botao", "gameflix", "fashion", "strata", "darkmode", "respon"];
let elements = []
let delay = 10500
for(i=0;i<divs.length;i++){
    elements[i]= document.getElementById(divs[i]);
}

setTimeout(()=>{
    elements[5].classList.remove("order1")
    elements[0].classList.add("order1")
    ;}, 1)
    

setTimeout(()=>{
    elements[0].classList.remove("order1")
    elements[1].classList.add("order1")
    ;}, delay)
    
setTimeout(()=>{
    elements[1].classList.remove("order1")
    elements[2].classList.add("order1")
    ;}, delay*2)

setTimeout(()=>{
    elements[2].classList.remove("order1")
    elements[3].classList.add("order1")
    ;}, delay*3)

setTimeout(()=>{
    elements[3].classList.remove("order1")
    elements[4].classList.add("order1")
    ;}, delay*4)
setTimeout(()=>{
    elements[4].classList.remove("order1")
    elements[5].classList.add("order1")
    ;}, delay*5)
    

