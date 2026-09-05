let btn = document.querySelector('button')
let paragraphElement = document.querySelector('p')
let input = document.querySelector('input')

btn.addEventListener('click', findPrimes)

function findPrimes() {
    let nums = +(input.value)
    let primes = []
    let nnn
    //prime number = number that cannot be divided without a remainder by anything except 1 and itself.
   for(let i = 2 ; i < nums ; i ++ ) {
    if(isItPrime(i)) primes.push(i)
   }
   paragraphElement.innerText = primes.join(', ')
   input.value = ''

}

function isItPrime (num) {
    for (let i = 2 ; i < num ; i++) {
        if(num % i == 0) return false
    }
    return true
        
}

