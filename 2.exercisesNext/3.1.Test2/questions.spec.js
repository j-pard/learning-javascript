'use strict';

describe("", () => {
  it('Créer un tableau "langages" contenant "Html", "CSS", "Java", "PHP"',  () => {
      let langages = CreationTableauLangages();
      expect(langages).toEqual(["Html","CSS","Java","PHP"]);
  });
  it('Créer un tableau "nombres" contenant les nombres de 0 à 5',  () => {
      let nombres = CreationTableauNombres();
      expect(nombres).toEqual([0,1,2,3,4,5]);
  });
  it('Remplacer le troisième élément du tableau par "Javascript"',  () => {
      let langages = ["Html","CSS","Java","PHP"];
      langages = RemplacementElement(langages);
      expect(langages).toEqual(['Html', 'CSS', 'Javascript', 'PHP']);
  });
  it('Ajouter "Ruby" et "Python" à la fin du tableau',  () => {
      let langages = ['Html', 'CSS', 'Javascript', 'PHP'];
      langages = AjoutElementLangages(langages);
      expect(langages).toEqual(['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python']);
  });
  it('Ajouter "-2" et "-1" au début du tableau nombres',  () => {
      let nombres = [0,1,2,3,4,5];
      nombres = AjoutElementNombres(nombres);
      expect(nombres).toEqual([-2,-1,0,1,2,3,4,5]);
  });
  it('Supprimer le premier élément du tableau langages',  () => {
      let langages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
      langages = SuppressionPremierElement(langages);
      expect(langages).toEqual(['CSS', 'Javascript', 'PHP', 'Ruby', 'Python']);
  });
  it('Supprimer le dernier élément du tableau langages',  () => {
      let langages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
      langages = SuppressionDernierElement(langages);
      expect(langages).toEqual(['CSS', 'Javascript', 'PHP', 'Ruby']);
  });
  it('Faire de la chaîne "reseaux_sociaux_chaine" un tableau "reseaux_sociaux"',  () => {
      let reseaux_sociaux_chaine = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
      let reseaux_sociaux = ConversionChaineTableau(reseaux_sociaux_chaine);
      expect(reseaux_sociaux).toEqual(['Facebook','Twitter', 'Google +','Viadeo','LinkedIn']);
  });
  it('Faire du tableau "langages" une chaîne "langages_chaine". Séparer les langages par une virgule',  () => {
      let langages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
      let langages_chaine = ConversionTableauChaine(langages);
      expect(langages_chaine).toEqual("CSS,Javascript,PHP,Ruby");
  });
  it('Trier le tableau "reseaux_sociaux"',  () => {
      let reseaux_sociaux = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
      reseaux_sociaux = TriTableau(reseaux_sociaux);
      expect(reseaux_sociaux).toEqual(['Facebook','Google +','LinkedIn','Twitter','Viadeo']);
  });
  it('Bonus : Inverser le tableau "langages"',  () => {
      let langages = ['CSS','Javascript','PHP','Ruby'];
      langages = InversionTableau(langages);
      expect(langages).toEqual(["Ruby", "PHP", "Javascript", "CSS"]);
  });
});
