/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here   
      document.getElementById("run").addEventListener("click", () => {
            const promise1 = window.lib.getPosts();
            promise1.then(
                  (value => {
                        console.log(value); //Affiche la valeur si la promesse est tenue
                  }),
                  (error => {
                        console.error(error); //Affiche l'erreur si la promesse est rompue
            }));
      });
})();
