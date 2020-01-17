/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
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

      const str = document.getElementById("target").innerHTML;
      document.getElementById("target").innerHTML = "";
      let arr = str.split("");

      //Static Wave
      // arr.forEach(el => {
      //       let span = document.createElement("span");
      //       span.innerHTML = el;
      //       let size = 1 + (random(0, 6)/10) + "em";
      //       span.style.fontSize = size;
      //       document.getElementById("target").appendChild(span);
      // });

      //Dynamic Wave
      setInterval( () => {
            document.getElementById("target").innerHTML = "";
            arr.forEach(el => {
                  let span = document.createElement("span");
                  span.innerHTML = el;
                  let size = 1 + (random(0, 6)/10) + "em";
                  span.style.fontSize = size;
                  document.getElementById("target").appendChild(span);
            });
      },200);
})();
