
const [decreaseBtn, resetBtn, insreaseBtn] = document.querySelectorAll('.decrease, .reset, .increase');
const countElement = document.querySelector('.count')
// console.log(decreaseBtn, resetBtn, insreaseBtn)

let count = 0

insreaseBtn.addEventListener('click', (e) => {
    e.stopPropagation()

    countElement.innerText = count++
    countElement.style.color = 'green'

})

resetBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    countElement.innerText = count = 0
    countElement.style.color = 'white'


})
decreaseBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    countElement.innerText = count--
    countElement.style.color = 'red'

})