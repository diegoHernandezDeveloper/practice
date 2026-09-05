let add = (n1) => n1 + 7
let multiply = (n1,n2) => n1*n2
let capitalize = (str) => str.slice(0,1).toUpperCase() + str.slice(1, str.length).toLowerCase()
let lastLetter = (str) => str.slice((str.length - 1), str.length)


console.log(add(7), multiply(3,2), capitalize('abcd'), lastLetter("abcd"))