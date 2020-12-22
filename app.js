class Vehicule {

    constructor(Sacouleur, Sesroues, Samarque) {
        this.couleur = Sacouleur;
        this.roues = Sesroues;
        this.marque = Samarque;
    }

    demarrer() {
        console.log("La voiture démarre");
    };

    arreter() {
        console.log("La voiture s'arrête");
    }
}


class velo extends Vehicule {
    constructor(Sacouleur, Sesroues, Samarque, rayonRoues, typePeintures) {
        super(Sacouleur, Sesroues, Samarque);
        this.rayonRoue = rayonRoues;
        this.typePeinture = typePeintures;
    }
    monter() {
        console.log("Je monte sur mon vélo");
    };
}

class voiture extends Vehicule {
    constructor(Sacouleur, Sesroues, Samarque, SonAssurance, SonProprietaire) {
        super(Sacouleur, Sesroues, Samarque);
        this.assurance = SonAssurance;
        this.proprio = SonProprietaire;
    }

    passerAuCarWash() {
        console.log("Je vais laver la voiture");
    }
}

