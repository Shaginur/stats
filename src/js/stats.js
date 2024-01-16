/*
 * @param {array} grades
 */
export function getNumberOfGrades(grades) {
  const nomberLeng = grades.length || 0
  return nomberLeng
}

/*
 * @param {array} grades
 */
export function getFirstGrade(grades) {
  const nomberFirst = grades[0]
  return nomberFirst || 0
}

/*
 * @param {array} grades
 */
export function getLastGrade(grades) {
  const nomberLast = grades.at(-1)
  return nomberLast || 0
}

export function getAverageGrade(grades) {
  const [a, b, c, d, f] = grades
  const average = (a + b + c + d + f) / grades.length
  return average || 0
}

// Домашку зделала сам и пкрвое дополнительное задания
//Остольное копировал кусками у вас так чтобы понять что для чего и как работает
