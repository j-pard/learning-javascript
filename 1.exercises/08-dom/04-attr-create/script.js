/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
      const sourceAttr = document.getElementById("source").getAttribute("data-image");
      const target = document.getElementById("target");
      const image = document.createElement("img");
      image.setAttribute("alt", sourceAttr);
      target.appendChild(image);
      
      document.querySelector(".material").removeChild(document.querySelector("#source"));
})();
