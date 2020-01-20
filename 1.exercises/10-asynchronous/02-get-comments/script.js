/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

      function getCom(error, articles) {
            if (error) {
                  console.log(error);
            }
            else {
                  articles.forEach(el => {
                        window.lib.getComments(el.id, (error, allComs => { //Prends tous les commentaires
                              if (error) {
                                    console.log(error);
                              }
                              else {
                                    let array = allComs; //Ajoute le(s) commentaire(s) associé(s) à l'article
                                    el.comments = array;
                              }
                              console.log(el);
                        }));
                  });
            }
      }

      document.getElementById("run").addEventListener("click", () => {
            window.lib.getPosts(getCom);
      })
})();
