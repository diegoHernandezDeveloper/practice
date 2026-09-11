//Map to names
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let users01 = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 },
]

function getNames(arr) {
    //get names properties from an array of objects and return an array of names
    let names = arr.map(item => item.name)
    return names
}

//getNames(users01)

//Map to objects
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let users02 = [
    { name: "John", surname: "Smith", id: 1 },
    { name: "Pete", surname: "Hunt", id: 2 },
    { name: "Mary", surname: "Key", id: 3 },
]

function usersMapped(arr) {
    let result = arr.map(item => {
        return {'fullName': `${item.name} ${item.surname}`, 'id': `${item.id}`}
    })
    console.log(result)
    return result
} 

//usersMapped(users02)

//Sort users by age
//Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

let users03 = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 },
]

function sortByAge(arr) {
    let result = arr.sort((a,b) => a.age - b.age)
    console.log(result)
    return result
}

//sortByAge(users03)

// Get average age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N.

let users04 = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
]

function getAverageAge(arr) {
    let result = arr.reduce((acc, item) => acc + item.age, 0)/arr.length
    console.log(result)
    return result
}

//getAverageAge(users04)

// Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

let users05 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31}
]

function groupById(arr) {
   let result = {}

   arr.forEach(item => {
    result[item.id] = item
   })
    console.log(result)
    return result
}

//groupById(users05)