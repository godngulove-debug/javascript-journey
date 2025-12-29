// John Information
const johnMass = 92
const johnHeight = 1.95
const johnBMI = johnMass / johnHeight ** 2

// Mark Information
const markMass = 78
const markheight = 1.69
const markBMI = markMass / markheight ** 2

const markHigherBMI = markBMI > johnBMI

console.log('Is mark has higher BMI:', markHigherBMI)
console.log('Mark BMI: ', markBMI)
console.log('John BMI: ', johnBMI)
