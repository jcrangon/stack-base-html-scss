export default class Person
{
  constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }

  direBonjour() {
    console.log(`Bonjour, je m'appelle ${this.nom} ${this.prenom}`);
  }
}