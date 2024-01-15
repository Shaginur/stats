import { getNumberOfGrades, getFirstGrade, getLastGrade } from "./stats.js";

const gradesForm = document.querySelector("#grades-form");
const yourGrade = document.querySelector("#your-grade");

const grades = [14, 9, 13, 15, 18];

function render(grades) {
  const tbody = document.querySelector("#stats-table tbody");

  tbody.innerHTML = `<tr>
  <td>${getNumberOfGrades(grades)}</td>
  <td>${getFirstGrade(grades)}</td>
  <td>${getLastGrade(grades)}</td>
  </tr>`;
}

gradesForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newGrade = Number.parseInt(yourGrade.value, 10);

  grades.push(newGrade);
  yourGrade.value = "";
  render(grades);
});

render(grades);
