# Exercice : jeu du pendu

- Durée : 1 jour
- Deadline : Vendredi 08/11/2019, 16h30
- Formulaire : [Form](https://docs.google.com/spreadsheets/d/1KLIZz_5032xxEhTIME6qObbI8jvUSP8oPVq9WerYS3Q/edit#gid=1079298716)

Utiliser la console **ou** les fonctions natives suivantes :

- window.prompt();
- window.alert();
- window.confirm();

Info : le nombre d'essais est illimité

* Créer un tableau pour contenir les lettres du mot : 'B','O','N','J','O','U','R', 
* Créer un autre tableau pour mettre les lettres devinées : '_','_','_','_','_','_','_'

* Écrivez une fonction appelée "guessLetter" cette fonction va
    - Itérer à travers les lettres
    - Voir si la lettre devinée se trouve dans le mot
    - Si oui changer le tableau des lettres devinées pour ajouter la nouvelle lettre
    - Afficher dans la console les lettres devinées
    - Le jeu doit savoir quand la partie est finie et féliciter le joueur


* Bonus : Se rapprocher du vrai pendu :
    - Garder en mémoire toutes les lettres devinées (bonnes et mauvaises) et seulement laisser l'utilisateur deviner une lettre une fois.
    - Si une lettre est entrée deux fois, ne rien faire.
    - Compter le nombre de tentatives ratées.
