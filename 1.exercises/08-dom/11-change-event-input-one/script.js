/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
      const pass = document.getElementById("pass-one");
      pass.setAttribute("maxlength", "10");
      const counter = document.getElementById("counter");
      pass.addEventListener("keyup", () => {
            counter.innerHTML = `${pass.value.length}/10`;
      });
})();
