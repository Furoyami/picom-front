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

    client: number;
    lstZones: number[];
    lstTrancheHoraires: number[];
}