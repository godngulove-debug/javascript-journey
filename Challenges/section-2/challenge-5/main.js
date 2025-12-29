// Calculate Average scores of each team
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// Check winner
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
  } else {
    return `No team wins!`
  }
}

const scoreDolphins = calcAverage(85, 54, 41)
const scoreKoalas = calcAverage(23, 34, 27)

console.log(checkWinner(scoreDolphins, scoreKoalas))
