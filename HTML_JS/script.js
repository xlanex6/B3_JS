const listButtons = document.getElementById('listButtons');

let count = 40
// clickDisplay.innerHTML = count

for (let i = 0; i < 54; i++){
  let button =`
  <div class="center">
  <button id="counter-${i}" onclick="addOne(${i})">+1</button>
  <p>Nombre de clics: <span id="clickDisplay-${i}">0</span></p>
  </div>
  `
  listButtons.innerHTML += button
  
}

function addOne(i) {
  let clickDisplayI = document.getElementById(`clickDisplay-${i}`);
  clickDisplayI.innerHTML = parseInt(clickDisplayI.textContent) + 1
}
