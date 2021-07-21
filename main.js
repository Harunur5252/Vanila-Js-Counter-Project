const numberElm = document.querySelector('.number')
const decreaseBtnElm = document.querySelector('.dBtn')
const resetBtnElm = document.querySelector('.rBtn')
const increaseBtnElm = document.querySelector('.iBtn')

let increase = 0
increaseBtnElm.addEventListener('click',()=>{
    increase++
    numberElm.textContent=increase
    if(increase===0){
        numberElm.style.color='black'
    }else{
        numberElm.style.color='green'
    }
})

decreaseBtnElm.addEventListener('click',()=>{
    increase--
    numberElm.textContent=increase
   if(increase<0){
     numberElm.style.color='red'
   }
   if(increase===0){
    numberElm.style.color='black'
  }
})

resetBtnElm.addEventListener('click',()=>{
    increase = 0
    numberElm.textContent=increase
    numberElm.style.color='black'
})

