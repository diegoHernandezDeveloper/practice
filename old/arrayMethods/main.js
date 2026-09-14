//camelize App

let camelizeBtn = document.querySelector('.camelize button')
let camelizeInput = document.querySelector('.camelize input')
let camelizeSpan = document.querySelector('.camelize span')

camelizeBtn.addEventListener('click', camelizeWord)




function capitalizeWord(word) {
    let result = word.split('').map((item, index) => {
        if(index == 0) {
            return item.toUpperCase()     
        } else {
            return item.toLowerCase()
                }
        }).join('')
    return result
}

//===================================================================================
//Filter Range App
//App that take the paramters, an array, number a, and number b, looks for elements with values higher or equal to 'a' and lower or equal to 'b' and return a result as an array
let arrOne = [5, 3, 8, 1];
function filterRange(arr, a, b) {
    let result = arr.filter((item) => item >= a && item <= b)
    return result
}

//==================================================================================
//Sort in reverse App
let arrTwo = [5, 2, 1, -10, 8]

function sortInReverse(arr) {
    return arr.sort((a,b) => b - a)
}

//===================================================================================
//Copy and sort array
let arrThree = ["HTML", "JavaScript", "CSS"];

function copyAndSortArr (arr) {
    return arr.map(item => item).sort()
}

//===================================================================================
//Calculator + and - with a string 
let stringFour = "1 + 2"

function calculate(str) {
    let result = str.split(' ')
    return result[1] == '+' ? +result[0] + +result[2] : +result[0] - +result[2]
}

//===================================================================================
//map names

let users = [{ name: "John", age: 25 }, { name: "Pete", age: 30 }, { name: "Mary", age: 28 }]

function mapNames(arr) {
    return  arr.map(item => item.name)

}

//===================================================================================
//mapped full names
let usersTwo = [{ name: "John", surname: "Smith", id: 1 },
{ name: "Pete", surname: "Hunt", id: 2 },
{ name: "Mary", surname: "Key", id: 3 }]

function mapFullNames(arr) {
    return  arr.map(item => {
        return ({'fullName': `${item.name} ${item.surname}`,
                'id': `${item.id}`        
        })
    })
}

//===================================================================================
//sortByAge
let usersThree = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
]

function sortByAge(arr) {
    return arr.sort((a,b) => a.age - b.age)
}

//===================================================================================
//Get average age

let usersFour = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 }
]

function getAverageAge(arr) {

    return arr.reduce((acc, item) => acc + item.age, 0)/arr.length

}

//===================================================================================
//Filter repeated items

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function filterRepeated(arr) {
    let result = []
    arr.forEach(str => {
        if(!result.includes(str)) result.push(str)
    });
return result
}

//===================================================================================
//Create keyed object from array
let usersFive = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
]

function groupById(arr) {
    let result = {}
    arr.forEach(item => result[item.id] = item)
    return result
}
cod

