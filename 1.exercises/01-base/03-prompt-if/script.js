/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let a = "Voulez-vous du gâteau ?"
    let r = prompt(a);

    if (r == "oui")
      alert("Que c'est bon !");
    else
      alert("Ca ne se refuse pas !");

})();
