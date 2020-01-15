/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

      let positions = [];

      for (i=0; i<10; i++) {
            positions[i] = document.getElementById(`n-${i+1}`);
      }

      const min = document.getElementById("min");
      const max = document.getElementById("max");
      const sum = document.getElementById("sum");
      const ave = document.getElementById("average");

      let randomNumbers = [];

      document.getElementById("run").addEventListener("click", () => {
            let total = 0;
            for (j=0; j<10; j++) { // Random numbers + mise en tableau + mise en place + sum
                  randomNumbers[j] = Math.floor(Math.random() * 101) +1;
                  positions[j].innerHTML = randomNumbers[j];
                  total = total + randomNumbers[j];
            }


            min.innerHTML = Math.min(...randomNumbers);
            max.innerHTML = Math.max(...randomNumbers);
            sum.innerHTML = total;
            ave.innerHTML = total/randomNumbers.length;
      });
})();
