/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
      let again;
      while (!again) {
            let age = prompt("Quel est votre âge ?");
            let sexe = prompt("H / F ?");
            sexe = sexe.toUpperCase();
              let genderAlert; 
              if (sexe == "H")
                    genderAlert = "un homme, agé de ";
              else if (sexe == "F")
                    genderAlert = "une femme, agée de ";
              else
                    genderAlert = "quelque chose, agé de ";
            let ville = prompt("Où habitez-vous ?");
        
            again = confirm("Vous êtes " + genderAlert + age + " ans et vivant à " + ville + ".");
      }

})();
