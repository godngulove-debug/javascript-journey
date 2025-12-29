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
*/

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
