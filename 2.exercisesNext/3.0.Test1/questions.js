/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
      return texte.length;
  }
  let remplaceECar = (texte) => {
      let a = texte.indexOf("e")
      let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
      return text;
  }
  let concatString = (texte1, texte2) => {
        return texte1.concat(texte2);
  
  }
  let afficherCar5 =  (texte) => {
        return texte.substr(4, 1);
  
  }
  let afficher9Car =  (texte) => {
        return texte.substr(0, 9);
  
  }
  let majusculeString =  (texte) => {
        return texte.toUpperCase();
  
  }
  let minusculeString =  (texte) => {
        return texte.toLowerCase();
  }
  let SupprEspaceString =  (texte) => {
        return texte.trim();
  }
  let IsString =  (texte) => {
        if (typeof texte == "string")
              return true;
  }
  
  let AfficherExtensionString =  (texte) => {
        let index = texte.indexOf(".");
        return texte.substr(index+1);
  }
  let NombreEspaceString =  (texte) => {
        let numOfSpace = 0;
        Array.from(texte).forEach(char => {
              if(char == " ")
                    numOfSpace++;
        })
        return numOfSpace;
  }
  let InverseString =  (texte) => {
        return texte.split("").reverse().join("");
  }
  
  
  /**
   * Exercices sur les nombres et les caluls mathématiques
   */
  let calculPuissance =  (x, y) => {
        return Math.pow(x, y);
  }
  let valeurAbsolue =  (nombre) => {
        return Math.abs(nombre);
  }
  let valeurAbsolueArray =  (array) => {
        for (let i=0; i<array.length; i++) {
              array[i] = Math.abs(array[i]);
        }
        return array;
  }
  let sufaceCercle =  (rayon) => {
      return Math.round(Math.PI * Math.pow(rayon, 2));
  }
  let hypothenuse =  (ab, ac) => {
      return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
  }
  let calculIMC =  (poids, taille) => {
      return parseFloat(((poids) / (Math.pow(taille, 2))).toFixed(2));
  }
  