let div = document.querySelector('div')
let p = document.querySelector('p')


div.addEventListener('mousemove', (e) => {
    console.log('hello')
    p.innerText = `The cordinades are:  ${e.screenX} and ${e.screenY}`
    console.log(` ${e.screenX} and ${e.screenY}` )
     
})