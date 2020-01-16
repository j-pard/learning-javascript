/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
      const target = document.getElementById("target");
      let table = document.createElement("table");

      for (let i=1; i<11; i++) {
            let column = document.createElement("td");
            for (let k=1; k<11; k++) {
                  let row = document.createElement("tr");
                  row.innerHTML = `${i}*${k}=${i*k}`;
                  column.appendChild(row);
            }
            table.appendChild(column);
      }
      

      target.appendChild(table);
})();
