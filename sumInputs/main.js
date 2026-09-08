let arr = []



while (true) {
    let input = +prompt('give me a number!')
    console.log(typeof(input), input)
     if( input == '') break;
     arr.push(input)

}

let result = arr.reduce((total, num) => {
    return total + num
}, 0)
console.log(result)