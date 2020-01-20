/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
      const template = document.getElementById("tpl-hero");
      const target = document.getElementById("target");

      document.getElementById("run").addEventListener("click", () => {
            target.textContent = "";
            const heroId = document.getElementById("hero-id").value;
            fetch("http://localhost:3000/heroes").then(
                  reponse => reponse.json().then(
                        (heroes) => {
                              const hero = heroes[heroId-1];
                              
                              let newTemplate = document.importNode(template.content, true);
                              newTemplate.querySelector(".name").textContent = hero.name;
                              newTemplate.querySelector(".alter-ego").textContent = hero.alterEgo;
                              newTemplate.querySelector(".powers").textContent = hero.abilities;

                              target.appendChild(newTemplate);
                        }
                  )
            )
      });
})();
