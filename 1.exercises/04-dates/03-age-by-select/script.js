/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

      const btn = document.getElementById("run");  
      let alive = true;

      let today = new Date;
      let todayDay = today.getDate();
      let todayMonth = today.getMonth() +1;
      let todayYear = today.getFullYear();

      btn.addEventListener("click", () => {
            let dobDay = document.getElementById("dob-day").value;
            let dobMonth = document.getElementById("dob-month").value;
            let dobYear = document.getElementById("dob-year").value;

            console.log("TODAY = " + todayDay + "-" + todayMonth + "-" + todayYear);
            console.log("BIRTHDAY = " + dobDay + "-" + dobMonth + "-" + dobYear);

            let diffYear = todayYear - dobYear;
            let diffMonth = todayMonth - dobMonth;
            let diffDay = todayDay - dobDay;

            console.log("DIFF1 = " + diffDay + "-" + diffMonth + "-" + diffYear);

            if (diffDay < 0) {
                  diffDay = 0;
                  diffMonth--;
            }
            if (diffMonth < 0) {
                  diffMonth = 0;
                  diffYear--;
            }
                  
            if (diffYear < 0) {
                  diffYear = 0;
                  console.log("Tu n'es pas encore né(e) !");
            }
            
            let age = diffYear;

            console.log("DIFF2 = " + diffDay + "-" + diffMonth + "-" + diffYear);
            console.log(age);
            return age;
      });
})();
