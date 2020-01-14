/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
      let bg = document.querySelector("body");
      const btn = document.getElementById("run");

      btn.addEventListener("click", () => bg.style.backgroundColor = randomColor());

      function randomColor() {
            let color1 = Math.floor(Math.random() * 256);
            let color2 = Math.floor(Math.random() * 256);
            let color3 = Math.floor(Math.random() * 256);
            let color = "rgb(" + color1 + ", " + color2 + ", " + color3 + ")";
            console.log(color);
            return color;
      }

})();
