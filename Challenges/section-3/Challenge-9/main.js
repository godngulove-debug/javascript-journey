'use strict'

const printForecast = function (arr) {
  let forecastMessage = '...'

  for (let i = 0; i < arr.length; i++) {
    forecastMessage += ` ${arr[i]}C in ${i + 1} days ... `
  }

  console.log(forecastMessage)
}

printForecast([17, 21, 23])
