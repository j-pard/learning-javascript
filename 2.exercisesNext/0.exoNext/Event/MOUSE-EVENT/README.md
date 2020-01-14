# Mouse

## Évènements et callbacks

Dans le navigateur le code peut être exécuté selon des évènements.
L'écriture d’applications interactives en JavaScript consiste souvent à attendre pour réagir aux événements et pour modifier le comportement du navigateur.
Les évènements se produisent lorsque la page se charge, quand l'utilisateur interagit (clics, survols, fait des changements) et lors d'une myriade d'autres événements.
Ces évènements peuvent aussi être déclenchés manuellement.
Pour réagir à un événement, vous devez fournir une fonction qui sera appelée par le navigateur lorsque l'évènement se produit.
Cette fonction est appelée `“callback”`.

```javascript
 let handleClick = (event) => {
    // Faire quelque chose !
};

let bouton = document.querySelector('#big­button');
button.addEventListener ('click', handleClick);
```

`addEventListener` est une méthode qui agit sur tous les éléments DOM. 
Ici, il est appelé sur un élément enregistré dans la variable `button`. 
Le premier argument est une chaîne de caractères : le nom de l'événement à écouter. 
Le clic correspond à un clic de souris ou à une pression du doigt. 
Le second argument est la fonction de callback, ici c’est `handleClick`.
Malheureusement, Internet Explorer ne supporte pas `addEventListener` dans les versions antérieures a Internet Explorer 9.
Au lieu de `addEventListener` on doit utiliser attachEvent.

`button.attachEvent("onclick", handleClick);`

Notez que attachEvent demande `onclick`, pas seulement `click`. 
Il faut faire de même pour les autres éléments.
C’est ce genre de différences qui ont permis la création de bibliothèques comme jQuery.
Elle vous aide à ne pas vous occuper des différentes manières d'écouter les événements entre les navigateurs.

Voici l'event handleclick et les propriétés qui lui sont associées :

```javascript
{
    offsetX: 74,
    offsetY: 10,
    pageX: 154,
    pageY: 576,
    screenX: 154,
    screenY: 489,
    target: H2,
    timeStamp: 1363131952985,
    type: "click",
    x: 154,
    y: 395
}
```

### Les évènements de la souris

- click
- ctextmenu
- dblclick
- mousedown
- mouseenter
- mouseleave
- mousemove
- mouseover
- mouseout
- mouseup

### Timing 

voir :

```
setInterval(abc, tmp)
setTimeout(abc, tmp)

clearInterval(fn);
clearTiemout(fn);
```