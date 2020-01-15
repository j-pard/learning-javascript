/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
      let fridays13 = [];
      const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

      const run = document.getElementById("run");
      let date = new Date;

      run.addEventListener("click", () => {
            let target = document.getElementById("year").value;
            date.setFullYear(target);
            // L'année est fixée et retourne le jour correspondant cette année là

            for (i = 0; i < 12; i++) { // Fais le tour des 12 mois
                  date.setMonth(i);
                  date.setDate(13);
                  
                  let currentDay = date.getDay();
                  if (currentDay == 5){
                        let dateToPush = "Vendredi " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear(); // Ecrit la date au format "Jour Date Mois Année"
                        fridays13.push(dateToPush);
                  }
            }

            fridays13.forEach(friday => { 
                  console.log(friday);
            });
            
      });
})();
