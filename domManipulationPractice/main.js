let container = document.querySelector('#container')
let btn = [...document.querySelectorAll('button')]

btn.forEach((btn) => {
    btn.style.margin = '30px 0px'
    btn.style.padding = '10px 20px'
    btn.style.fontSize = '24px'
})


btn.forEach(btn => btn.addEventListener('click', (e) => {

e.target.classList.toggle('darkMode')

}))



function fullTheContainer() {
    let p = document.createElement('p')
    let h1 = document.createElement('h1')
    let h3 = document.createElement('h3')
    let div = document.createElement('div')
    let p2 = document.createElement('p')

    p.innerText = `Hey I'm red!`
    h3.innerText = `Hey I'm blue h3`
    p.style.background = 'red'
    h3.style.background = 'blue'
    div.setAttribute('style', 'border: 1px solid black; background: pink')
    h1.innerText = `I'm in a div`
    p2.innerText = `ME TOO!`
    div.appendChild(h1)
    div.appendChild(p2)
    container.appendChild(p)
    container.appendChild(h3)
    container.appendChild(div)
}
