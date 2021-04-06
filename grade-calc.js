//  students score, total possible score
// 15/20 -> you got a C (75%)
// A 90 - 100. B 80 - 89, C 70 - 79, D 60 - 69, F 0 - 59

let score = 78
const gradeCalculator = (score, maxScore) => {
    let percent = (score / maxScore) * 100
    let gradeLetter = ''
    if (percent >= 90) {
        gradeLetter = 'A'
    } else if (percent >= 80) {
        gradeLetter = 'B'
    } else if (percent >= 70) {
        gradeLetter = 'C'
    } else if (percent >= 60){
        gradeLetter = 'D'
    } else {
        gradeLetter = 'F'
    }
    return `You got a ${gradeLetter} / ${percent}%`
}

console.log(gradeCalculator(9, 20))
