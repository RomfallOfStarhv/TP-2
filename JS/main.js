/*
let stagiaire1 = ['Martin', 'DUPONT'];
let stagiaire2 = ['Vincent', 'MARTIN'];
let stagiaires = [stagiaire1, stagiaire2];
console.log(stagiaires);
console.log(stagiaires[1][0]);
*/

let stagiaireA = new Stagiaire();
stagiaireA.nom = "DUPONT";
stagiaireA.prenom = "Martin";

let stagiaireB = new Stagiaire();
stagiaireB.nom = "MARTIN";
stagiaireB.prenom = "Vincent";

let stagiaires = [stagiaireA, stagiaireB];
console.log(stagiaires);
console.log(stagiaires[1].prenom);
console.log(stagiaires[0].salutation());

let anotherStagiaire = new Stagiaire("Lucette","Anderson");
console.log(anotherStagiaire);

