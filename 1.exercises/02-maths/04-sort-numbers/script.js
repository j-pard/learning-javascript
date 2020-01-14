/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let numbers = document.getElementById("numbers").value;
    let arr = numbers.split(", ");

    for (i=0; i<arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }

    document.getElementById("run").addEventListener("click", () => {
        arr.sort((a, b) => a - b); //Fonction de tri
        console.log(arr);
        
    });
})();
