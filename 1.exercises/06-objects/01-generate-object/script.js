/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

      const person = {
            lastname: 'Pardons',
            firstname: "Jonathan",
            age: 28,
            city: "Pont-à-Celles",
            country: "Belgium",
            bio: function() {
                  console.log(`Hello World, ${this.firstname} ${this.lastname}, ${this.age} old, at your service ! I am from ${this.city} in ${this.country} .`);
            }
      };

      document.getElementById("run").addEventListener("click", () => {
            person.bio();
      });
})();
