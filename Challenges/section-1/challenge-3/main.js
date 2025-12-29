const minimumScore = 100
const scoreDolphins = (96 + 108 + 89) / 3
const scoreKoalas = (88 + 91 + 110) / 3

console.log(`scoreDolphins: ${scoreDolphins}
scoreKoalas: ${scoreKoalas}`)

if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore) {
  console.log('Dolphins win the trophy')
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= minimumScore) {
  console.log('Koalas win the trophy')
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= minimumScore &&
  scoreKoalas >= minimumScore
) {
  console.log('Both win the trophy')
} else {
  console.log('No team wins the trophy.')
}
