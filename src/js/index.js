import { getNumberOfGrades, getFirstGrade, getLastGrade, getAverageGrade } from './stats.js'

const gradesForm = document.querySelector('#grades-form')
const yourGrade = document.querySelector('#your-grade')
const sortSelect = document.querySelector('#sort')

const grades = [14, 9, 13, 15, 18]

function render(grades) {
  const tbody = document.querySelector('#stats-table tbody')
  const gradeList = document.querySelector('#grade-list')
  if (tbody && gradeList) {
    tbody.innerHTML = `<tr>
  <td>${getNumberOfGrades(grades) ?? 'No data'}</td>
  <td>${getFirstGrade(grades) ?? 'No data'}</td>
  <td>${getLastGrade(grades) ?? 'No data'}</td>
  <td>${getAverageGrade(grades) ?? 'No data'}</td>
  </tr>`

    gradeList.innerHTML = ''
    grades.forEach((grade, index) => {
      const li = document.createElement('Li')
      li.innerHTML = `
      <span class="grade">${grade}</span>
        <i class="fas fa-trash delete-icon" data-index="${index}"></i>
    `
      gradeList.appendChild(li)
    })
  }
}

const gradeList = document.querySelector('#grade-list')
if (gradeList) {
  gradeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-icon')) {
      const indexToDelete = event.target.getAttribute('data-index')
      if (indexToDelete !== null) {
        grades.splice(indexToDelete, 1)
        showNotification('Grade deleted successfully')
        render(grades)
      }
    }
  })
}
if (gradesForm) {
  gradesForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let newGrade = Number.parseInt(yourGrade.value, 10)
    grades.push(newGrade)
    yourGrade.value = ''
    showNotification('Grade added successfully')
    render(grades)
  })
}

export function showNotification(message) {
  const notification = document.querySelector('#notification')
  if (notification) {
    notification.textContent = message
    notification.style.display = 'block'
    setTimeout(() => {
      notification.style.display = 'none'
    }, 1500)
  }
}

render(grades)
