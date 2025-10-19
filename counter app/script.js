let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

document.getElementById("increment-btn").addEventListener("click", function() {
  count++;
  countEl.textContent = count;
});

document.getElementById("save-btn").addEventListener("click", function() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = count;
});