import {Acheteur} from './acheteur';
import {Utilisateur} from './utilisateur';

export class Commande {
  code:string;
  date_commande:Date;
  etat:string;
  montant:number;
  acheteur:Acheteur;
}
