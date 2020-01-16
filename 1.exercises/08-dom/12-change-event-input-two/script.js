/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
      const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const pass = document.getElementById("pass-one");
      const valid = document.getElementById("validity");

      pass.addEventListener("keyup", () => {
            let numCount = 0;
            if (pass.value.length >= 8) {
                  Array.from(pass.value).forEach(char => {
                        if (num.includes(char))
                              numCount++;
                  });
                  if (numCount >= 2)
                        valid.innerHTML = "OK !";
                  else 
                        valid.innerHTML = "Pas assez de chiffre."
            }
            else 
                  valid.innerHTML = "Mot de passe trop court."
      });
})();
