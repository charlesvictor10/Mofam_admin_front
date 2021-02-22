import {Acheteur} from './acheteur';
import {Utilisateur} from './utilisateur';
import {Produit} from './produit';

export class CommandePrestataire {
  code:string;
  date_commande:Date;
  etat:string;
  quantite:number;
  acheteur:Acheteur;
  utilisateur:Utilisateur;
  produit:Produit;
}
