let btn = document.querySelector('button')
let ul = document.querySelector('ul')



btn.addEventListener('click', () => {
    console.log('hello')
    let input = document.querySelector('input')

    let li = document.createElement('li')
    let deleteBtn = document.createElement('button')
     let check = document.createElement('input')
     let div = document.createElement('div')
     

     li.id = input.value
    li.innerText = input.value
    check.type = 'checkbox'
   
    deleteBtn.innerText = 'delete'


    check.addEventListener('click', (e) => {
        console.log(e.target)
        e.target.parentNode.parentNode.classList.toggle('checked')
    })
    deleteBtn.addEventListener('click',(e) => {
        e.target.parentNode.parentNode.remove()
        //ul.removeChild(e.target.parentNode)
       // console.log(e.target.parentNode.parentNode.removeChild(e.target.parentNode))
    })

    div.appendChild(check)
    div.appendChild(deleteBtn)
    li.appendChild(div)
    ul.appendChild(li)


})