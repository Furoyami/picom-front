export class AnnonceModel {
    id: number;
    dateHeureCreation: Date;
    dateHeureDebut: Date;
    contenu: string;
    numeroCarte: string;
    anneeExpiration: number;
    moisExpiration: string;
    cryptogramme: string;
    montantRegleEnEuros: number;

    idClient: number;
    lstZones: number[];
    lstTrancheHoraire: number[];
}