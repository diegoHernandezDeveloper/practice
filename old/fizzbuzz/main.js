/* pseducode
1.get the value
2.loop starting from 1 to the value given
2.if the the remainder of the current number is 0 with 5 and 3, display fizzbuzz
3.else if the the remainder of the current number is zero when divide with 3, display fizz
4. else if the remainder of the current number is 0 when divide by 5, display buzz
5. else display current number
6. return the results to display */


let btn = document.querySelector('button')

btn.addEventListener('click', ()=> {
    let num = document.querySelector('input').value
    
    for(let i = 1 ; i <= num ; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz")
        } else if (i % 3 == 0) {
            console.log("fizz")
        } else if (i % 5 == 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }
})