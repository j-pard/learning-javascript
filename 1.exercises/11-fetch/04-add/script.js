/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

      const inputs = [
            document.getElementById("hero-name"),
            document.getElementById("hero-alter-ego"),
            document.getElementById("hero-powers")
      ];

      document.getElementById("run").addEventListener("click", () => {
            if (!inputs[0].value || !inputs[1].value || !inputs[2].value) {
                  alert("All inputs must be completed !");
            }

            else {
                  let newHero = {};

                  fetch("http://localhost:3000/heroes").then(  //Reprise de l'objet JSON pour dernier index
                        reponse => reponse.json().then(
                              (heroes) => {
                                    let heroesArr = heroes;
                                    let length = heroesArr[heroesArr.length];
                                    newHero.id = length+1;                                
                              }
                        )
                  );

                  newHero.name = inputs[0].value;
                  newHero.alterEgo = inputs[1].value;
                  newHero.abilities = inputs[2].value.split(", ");

                  fetch(`http://localhost:3000/heroes/`, {
                        method: "post",
                        headers : { "Content-type" : "application/json"},
                        body: JSON.stringify(newHero)
                  });

            }

      });
})();
