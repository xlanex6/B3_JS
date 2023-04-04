const counter = document.getElementById('counter');
const clickDisplay = document.getElementById('clickDisplay');

let count = 40
clickDisplay.innerHTML = count

counter.addEventListener('click', () => {
  count++
  clickDisplay.innerHTML = count
})
