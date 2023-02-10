ctorAll('.button_one');
let btnn = document.querySelectorAll('.button_two');
let nums = document.querySelector('.num')
let num = 0;

for (let elem of btn) {
    elem.addEventListener('click', (e) => {
        num++
        nums.innerHTML= num
    })
}
for (let elem of btnn) {
    elem.addEventListener('click', (e) => {
        num--
        nums.innerHTML= num
    })
}
  