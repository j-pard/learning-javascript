/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
      // your code here
      let bg = document.querySelector("body");
      const btnRed = document.getElementById("red");
      const btnGreen = document.getElementById("green");
      const btnYellow = document.getElementById("yellow");
      const btnBlue = document.getElementById("blue");

      btnRed.addEventListener('click', () => bg.style.backgroundColor = "red");
      btnGreen.addEventListener('click', () => bg.style.backgroundColor = "green");
      btnYellow.addEventListener('click', () => bg.style.backgroundColor = "yellow");
      btnBlue.addEventListener('click', () => bg.style.backgroundColor = "blue");
  })();
  