/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
      function random(min, max) {
            return Math.floor(Math.random()*max)+min;
      }

      const target = document.getElementById("target");
      let str = target.innerHTML;
      let arr = str.split("");

      target.innerHTML = "";
 
      let k = 0;
      setInterval(() => {
            if (k < arr.length) {
                  let span = document.createElement("span");
                  span.innerHTML = arr[k];
                  target.appendChild(span);
                  k++;
            }
            else 
                  clearInterval();
      }, random(50, 500));
})();
