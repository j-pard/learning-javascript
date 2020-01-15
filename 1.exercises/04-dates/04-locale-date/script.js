/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

      let date = new Date;
      let dayName = date.getDay();
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      let hours = date.getHours();
      let mins = date.getMinutes();

      let now = ["jour", "date", "mois", "année", "heures", "minutes"];
    
      switch (dayName) {
            case 0:
                  now[0] = "Dimanche";
                  break;
            case 1:
                  now[0] = "Lundi";
                  break;
            case 2:
                  now[0] = "Mardi";
                  break;
            case 3:
                  now[0] = "Mercredi";
                  break;
            case 4:
                  now[0] = "Jeudi";
                  break;
            case 5:
                  now[0] = "Vendredi";
                  break;
            case 6:
                  now[0] = "Samedi";
                  break;
      }

      now[1] = day;

      switch (month) {
            case 0:
                  now[2] = "janvier";
                  break;
            case 1:
                  now[2] = "février";
                  break;
            case 2:
                  now[2] = "mars";
                  break;
            case 3:
                  now[2] = "avril";
                  break;
            case 4:
                  now[2] = "mai";
                  break;
            case 5:
                  now[2] = "juin";
                  break;
            case 6:
                  now[2] = "juillet";
                  break;
            case 7:
                  now[2] = "août";
                  break;
            case 8:
                  now[2] = "septembre";
                  break;
            case 9:
                  now[2] = "octobre";
                  break;
            case 10:
                  now[2] = "novembre";
                  break;
            case 11:
                  now[2] = "décembre";
                  break;
      }

      now[3] = year;
      now[4] = hours;
      now[5] = mins;
     
      document.getElementById("target").innerHTML = now[0] + " " + now[1] + " " + now[2] + " " + now[3] + " " + now[4] + "H" + now[5];
})();
