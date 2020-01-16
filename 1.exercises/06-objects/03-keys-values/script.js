/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here

    let properties = [];
    document.getElementById("run").addEventListener("click", () => {
        let properties = Object.getOwnPropertyNames(person);
        let values = Object.values(person);
        console.log("Liste des properties :");
        console.log(properties);
        console.log("Liste des valeurs :");
        console.log(values);
    });
})();

