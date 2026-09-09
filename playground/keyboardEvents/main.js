let btn = document.querySelector('button')
let ul = document.querySelector('ul')



btn.addEventListener('click', () => {
    console.log('hello')
    let input = document.querySelector('input')

    let li = document.createElement('li')
    let deleteBtn = document.createElement('button')

     li.id = input.value
    li.innerText = input.value
   
    deleteBtn.innerText = 'delete'

    deleteBtn.addEventListener('click',(e) => {
        e.target.parentNode.remove()
        //ul.removeChild(e.target.parentNode)
       // console.log(e.target.parentNode.parentNode.removeChild(e.target.parentNode))
    })

    
    li.appendChild(deleteBtn)
    ul.appendChild(li)



    
})