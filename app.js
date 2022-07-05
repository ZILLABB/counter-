let header = document.querySelector('h1')
let dec = document.querySelector('.dec')
let res = document.querySelector('.res')
let inc = document.querySelector('.inc')
let container=document.querySelector('.container')
let bgr=document.body
// decrease
function decrease() {
    header.textContent--
    if (header.textContent <0) {
        bgr.style.backgroundColor='purple'
    }

}
dec.addEventListener('click', decrease)

function increase() {
    header.textContent++
     if (header.textContent > 0) {
        bgr.style.backgroundColor='red'
    }
}
inc.addEventListener('click', increase);

let reset=() =>{
    header.textContent = 0
     if (header.textContent == 0) {
        bgr.style.backgroundColor='pink' 
    }
}
res.addEventListener('click', reset)



