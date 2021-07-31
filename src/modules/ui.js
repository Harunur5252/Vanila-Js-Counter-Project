import data from "./data"

class UI{
    selectors(){
        const numberElm = document.querySelector('.number')
        const decreaseBtnElm = document.querySelector('.dBtn')
        const resetBtnElm = document.querySelector('.rBtn')
        const increaseBtnElm = document.querySelector('.iBtn')
        return {
            numberElm,decreaseBtnElm,resetBtnElm,increaseBtnElm
        }
    }
    getIncreaseValue(){
        const {numberElm} = this.selectors()
        data.increase++
        // console.log(data.increase)
        numberElm.textContent=data.increase
        if(data.increase===0){
            numberElm.style.color='black'
        }else if(data.increase>0){
            numberElm.style.color='green'
        }
        else if(data.increase<0){
            numberElm.style.color='red'
        }
    }
    getDecreaseValue(){
        const {numberElm} = this.selectors()
        data.increase--
        numberElm.textContent=data.increase
       if(data.increase<0){
         numberElm.style.color='red'
       }
       if(data.increase===0){
        numberElm.style.color='black'
      }
    }
    resetValue(){
        const {numberElm} = this.selectors()
        data.increase = 0
        numberElm.textContent=data.increase
        numberElm.style.color='black'
    }
    loadAllEventListener(){
        const {increaseBtnElm,decreaseBtnElm,resetBtnElm} = this.selectors()
        increaseBtnElm.addEventListener('click',()=>this.getIncreaseValue())
        decreaseBtnElm.addEventListener('click',()=>this.getDecreaseValue())
        resetBtnElm.addEventListener('click',()=>this.resetValue())
    }
}
const ui = new UI()
export default ui