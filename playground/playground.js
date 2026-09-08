function isPrime(num) {
    for(let i = 2; i<num ; i++) {
        if(num % i == 0) return false
    }
    return true
}

console.log('hello world!')

function findPrimes(num) {
    for(let i = 2; i<num ; i++) {
        if(isPrime(i)) console.log(i)
    }
}