const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const calcAverage = function (arr) {
  let sum = 0
  const arrayLength = arr.length
  for (let i = 0; i < arrayLength; i++) {
    sum += arr[i]
  }
  return sum / arrayLength
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

// Filling the tips[] and the totals[] array
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]))
  totals.push(bills[i] + tips[i])
}

console.log(`bills: [${bills}]
tips: [${tips}]
totals: [${totals}]`)
