/*
let js = 'amazing'
console.log(40 + 8 + 23 - 10)

console.log('NASIM')
console.log(23)

// Declaring a variable
let firstName = 'Amin'
console.log(firstName)
console.log(firstName)
console.log(firstName)

// Descriptive variable name
let myFirstJob = 'programmer'
let myCurrentJob = 'Job'


let javascriptIsFun = true
console.log(javascriptIsFun)

console.log(typeof true)
console.log(typeof javascriptIsFun)
console.log(typeof 23)
console.log(typeof 'javascriptIsFun')


let age = 30
age = 45

const birthYear = 1999


// Arthmetic operators
const currentYear = 2037

const ageAmin = currentYear - 1999
const ageSara = currentYear - 2005
console.log(ageAmin, ageSara)

console.log(ageAmin * 2, ageSara / 2, ageAmin / 2, 2 ** 3)
// 2 ** 3 means 2 to the power of 3

const firstName = 'amin'
const lastName = 'gharib'
console.log(firstName + ' ' + lastName)

// Assigments operators
let x = 10 + 5

x += 10 // x = x + 10
x *= 4
x++ // x = x + 1
x--
console.log(x)

// Comparison operators (We use them to produce BOOLEAN values)
const fullAge = 18
console.log(ageAmin > ageSara)
console.log(ageSara >= fullAge)

const isFullAge = ageSara >= fullAge
console.log(isFullAge)



const currentYear = 2037

const ageAmin = currentYear - 1999
const ageSara = currentYear - 2005

console.log(currentYear - 1999 > currentYear - 2005)

let x, y
x = y = 25 - 10
console.log(x, y)

const averageAge = (ageAmin + ageSara) / 2

console.log('ageAmin: ', ageAmin, 'ageSara: ', ageSara)
console.log(averageAge)



// Template Literals
const firstName = 'Amin'
const job = 'Student'
const birthYear = 1999
const currentYear = 2025

const amin = 'I`m ' + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!'
console.log(amin)

const aminNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`
console.log(aminNew)

console.log('Strting with \nmultiple \nlines')
console.log(`Hello 
world`)


const age = 15
// const isOldEnough = age >= 18

if (age >= 18) {
  console.log('You can start driving license 🌝')
} else {
  const yearLeft = 18 - age
  console.log(`You are too young. 🌚 Wait another ${yearLeft} years :)`)
}

const birthYear = 1999
let century
if (birthYear <= 2000) {
  century = 20
} else {
  century = 21
}

console.log(century)


// Type conversion and Type coercion
let inputYear = '1991'
console.log(Number(inputYear))

console.log(Number(inputYear) + 18)

const firstName = 'amin'
console.log(typeof undefined)

console.log(String(23498))
let x = 2
inputYear--
console.log(inputYear)


console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('0'))
console.log(Boolean({}))

const money = 0
if (money) {
  console.log("Don't spend it all;")
} else {
  console.log('You should get a job!')
}


const age = 18
if (age === 18) console.log('You just became an adult')

const user_favorite_number = Number(prompt('What is your favorite number ?'))
console.log(user_favorite_number)

if (user_favorite_number === 23) {
  console.log(`Cool! ${user_favorite_number} is an amazing number!`)
} else if (user_favorite_number === 7) {
  console.log(`Cool! ${user_favorite_number} also a cool number`)
} else {
  console.log('Your number is interesting!')
}

if (user_favorite_number !== 23) {
  console.log('How about 23')
}



const hasDriversLicense = true
const hasGoodVision = true

console.log(hasDriversLicense || hasGoodVision)
console.log(hasDriversLicense && hasGoodVision)
console.log(!hasDriversLicense)

const shouldDrive = hasDriversLicense && hasGoodVision

// if (shouldDrive) {
//   console.log('You able to Drive!')
// } else {
//   console.log('You can not!')
// }

const isTired = false

if (hasDriversLicense && hasGoodVision && !isTired) console.log('You able to Drive!')
else console.log('You can not!')


const day = 'monday'

switch (day) {
  case 'monday': // day === monday
    console.log('Plan course structure')
    console.log('Go to coding meetup')
    break

  case 'tuesday':
    console.log('Prepare theory videos')
    break

  case 'wednesday':
  case 'thursday':
    console.log('Write code examples')
    break
  case 'friday':
    console.log('Record videos')
    break
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend')
    break
  default:
    console.log('Invalid Day')
}

// IF-ELSE statement equivalent of above code

if (day === 'monday') {
  console.log(`Plan course structure
Go to coding meetup`)
} else if (day === tuesday) {
  console.log('Prepare theory videos')
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples')
} else if (day === 'friday') {
  console.log('Record videos')
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend')
} else {
  console.log('Invalid Day')
}
*/

// Conditional(Ternery) operator

const age = 12
age >= 18 ? console.log('I like to drink coffe') : console.log('I like to drink water')

const drink = age >= 18 ? 'coffe' : 'water'

let drink2
if (age >= 18) {
  drink2 = 'coffe'
} else {
  drink2 = 'water'
}

console.log(`I like to drink ${age >= 18 ? 'coffe' : 'water'}`)
