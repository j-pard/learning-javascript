/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
      class Person {
            constructor(firstname, lastname) {
                  this.firstname = firstname;
                  this.lastname = lastname;
            }

            get name() {
                  return this.firstname + " " + this.lastname;
            }

            set name(str) {
                  let splitedStr = str.split(" ");;
                  this.firstname = splitedStr[0];
                  this.lastname = splitedStr[1];
            }
      }

      document.getElementById("run").addEventListener("click", () => {
            let duCon = new Person("Kevin", "Ducon");
            console.log(duCon.name); // Etat de départ
            duCon.name = "Gerard LePoireau"; // Assigne nouveau nom
            console.log(duCon.name); // Affiche les nouvelles valeurs
            console.log(duCon); // Affiche l'instance
      });
})();
