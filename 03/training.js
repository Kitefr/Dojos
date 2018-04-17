// demander à l'utilisateur une entrée
// const stdin = process.openStdin();

// console.log("Ma question préférée?");

// // ecouter l'entrée utilisateur
// stdin.addListener("data", answer => {
//   let reponse = answer.toString();
//   console.log(reponse);
// });

// pusher dans un tableau

let tableau = [1, 2, 3];
console.log(tableau);
tableau.push(4);
console.log(tableau);

// chaine de caractère => tableau
let chaine = "Vincent";
console.log(chaine[0]);

// Création d'objet  dynamique: et de clef de propriétés

let obj = {};

obj.phrase = "coucou";
console.log(obj);

chaine = "matiere";

obj[chaine] = "Français";

//
let chaineTwo = "langue";

obj[chaineTwo] = "Anglais";

console.log(obj);
