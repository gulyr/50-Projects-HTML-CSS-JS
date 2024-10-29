const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => highlightCups(index))
})
const highlightCups = (index) => {
  if (
    smallCups[index].classList.contains('full') &&
    !smallCups[index].nextElementSibling.classList.contains('full')
  ) {
    idx--
  }

  smallCups.forEach((cup, idx) => {
    if (idx <= index) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
}
