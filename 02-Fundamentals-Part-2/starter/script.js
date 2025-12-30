'use strict'
/*
let hasDriversLicence = false
const isPassedTest = true

if (isPassedTest) hasDriversLicence = true
if (hasDriversLicence) console.log('You can drive')


function logger() {
  console.log('My name is Amin')
}

logger() // Invoking, Running, Calling Function

logger()
logger()

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges)
  const juice = `Juice with ${apples} apples 🍎 and ${oranges} oranges 🍊.`
  return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)


// Function declarartion
function calcAge1(currentYear, birthYear) {
  return currentYear - birthYear
}

const age = calcAge1(2025, 1999)
console.log(`You are ${age} years old.`)

// Function Expression
const calcAge2 = function (currentYear, birthYear) {
  return currentYear - birthYear
}

console.log(`You're ${calcAge2(2025, 1999)} years old.`)


// Arrow function

const calcAge3 = (birthyear, currentYear) => currentYear - birthyear
console.log(calcAge3(1999, 2025))

const yearsUntilRetirement = (birthYear, currentYear, retirementAge) => {
  const age = currentYear - birthYear
  const retirement = retirementAge - age
  return retirement
}

console.log(`${yearsUntilRetirement(1999, 2025, 75)} years left until retirement.`)

function cutFruitPieces(fruit) {
  return fruit * 4
}
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges)
  const juice = `Juice with ${cutFruitPieces(apples)} apples 🍎 and ${cutFruitPieces(
    oranges
  )} oranges 🍊.`
  return juice
}

console.log(fruitProcessor(4, 5))


const calcAge = function (currentYear, birthYear) {
  return currentYear - birthYear
}

const yearsUntilRetirement = function (birthYear, currentYear, retirementAge) {
  const age = calcAge(currentYear, birthYear)
  const retirement = retirementAge - age
  //   if (retirement > 0) {
  //     return retirement
  //   } else if (retirement <= 0) {
  //     return `has been retired for ${retirement} years`
  //   }
  return retirement > 0 ? retirement : `has been retired for ${-retirement} years`
}

console.log(yearsUntilRetirement(1950, 2025, 65))


// Array

const calcAge = function (currentYear, birthYear) {
  return currentYear - birthYear
}
//Literal syntaxx
const friends = ['Amir', 'Mohammad', 'Arman']
console.log(friends)

// const years = new Array(1991, 1984, 2008, 2025)

console.log(friends[0])

console.log(friends.length)

console.log(friends[friends.length - 1])

friends[2] = 'hamid'
console.log(friends)

const amin = ['amin', 'gharibshah', calcAge(2025, 1999), friends]
console.log(amin)

const years = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])

const ages = [calcAge(years[0]), calcAge(years[1]), age3]

const friends = ['Amir', 'Mohammad', 'Arman']
// Add item at the end of an array
friends.push('Hamid')
console.log(friends.push('Hamid'))

console.log(friends)

// Add item to the begining of an array
friends.unshift('Silva')

// Remove elements
// Remove the last element of an array
console.log(friends.pop())

// Remove element from the begining of an array
console.log(friends)
friends.shift()
console.log(friends)

console.log(friends.indexOf('jack'))
console.log(friends.includes('Daniel'))

friends.push(23)
console.log(friends.indexOf('23'))

if (friends.includes('Amir')) {
  console.log('Amir find')
}

const aminArray = ['amin', 'gharib', 'student', 1999, 6000000, 'SA34567']

const amin = {
  firstName: 'amin',
  lastName: 'gharib',
  job: 'student',
  birthYear: 1999,
  salary: 6000000,
  studentID: 'SA34567',
}


*/

const amin = {
  firstName: 'amin',
  lastName: 'gharib',
  job: 'student',
  birthYear: 1999,
  salary: 6000000,
  studentID: 'SA34567',
  friends: ['Amir', 'Mohammad', 'Arman'],
}

console.log(amin.lastName)
console.log(amin['lastName'])

const nameKey = 'Name'

console.log(amin[`first${nameKey}`])
console.log(amin[`last${nameKey}`])
