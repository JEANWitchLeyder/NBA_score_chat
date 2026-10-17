/*
const btn = document.querySelector('#btn');
const p = document.getElementById('interaction-status');


btn.addEventListener('click',()=>{
console.log(btn.classList.contains('consult-btn'));
console.log(btn.classList.replace('consult-btn','highlighted'));
console.log(btn.classList.contains('consult-btn'));
});


btn.addEventListener("pointerdown", () => {
  p.textContent = "Bouton pressé";
});

btn.addEventListener("pointerup", () => {
  p.textContent = "Bouton relâché";
});
*/

const keyboardInput = document.getElementById("keyboard-input");
const keyboardStatus = document.getElementById("keyboard-status");

keyboardInput.addEventListener("keydown", function (event) {
    keyboardStatus.textContent = "Touche : " + event.target.value;
  });

