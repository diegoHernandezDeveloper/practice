let btn = document.querySelector('button')
let text = document.querySelector('p')

btn.addEventListener('click', countdown)
text.innerText = ''
function countdown() {
    for( let i = 10; i > 0 ; i--) {
        text.innerText += `${i} \n`
    }
    text.innerText += `BOOM!\n`
}

