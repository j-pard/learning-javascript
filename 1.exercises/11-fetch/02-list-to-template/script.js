/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
      const target = document.getElementById("target");
      const template = document.getElementById("tpl-hero");

      document.getElementById("run").addEventListener("click", () => {
            target.textContent = "";
            fetch("http://localhost:3000/heroes").then(
                  reponse => reponse.json().then(
                        heroes => heroes.forEach(hero => {
                              let newTemplate = document.importNode(template.content, true);
                              newTemplate.querySelector(".name").textContent = hero.name;
                              newTemplate.querySelector(".alter-ego").textContent = hero.alterEgo;
                              newTemplate.querySelector(".powers").textContent = hero.abilities;

                              target.appendChild(newTemplate);
                        })
                  )
            )
      });
})();
