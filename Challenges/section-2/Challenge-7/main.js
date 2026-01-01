const compareBMI = function (person1, person2) {
  const bmi1 = person1.calcbmi()
  const bmi2 = person2.calcbmi()

  if (bmi1 > bmi2) {
    return `${person1.fullName}'s BMI (${person1.bmi}) is higher than ${person2.fullName}'s (${person2.bmi})`
  } else {
    return `${person2.fullName}'s BMI (${person2.bmi}) is higher than ${person1.fullName}'s (${person1.bmi})`
  }
}

const mark = {
  fullName: 'mark',
  mass: 78,
  height: 1.69,

  calcbmi: function () {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  },
}

const john = {
  fullName: 'john',
  mass: 92,
  height: 1.95,

  calcbmi: function () {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  },
}

console.log(compareBMI(john, mark))
