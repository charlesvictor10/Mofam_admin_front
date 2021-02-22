import {SousCategorie} from "./sousCategorie";
import {Ville} from "./ville";
import {Photo} from './photo';

export class Produit {
  id_produit:number;
  designation:string;
  etat:number;
  prix:number;
  quantite:number;
  dateCommande:string;
  description:string;
  proprietaire:string;
  ville:Ville;
  sousCategorie:SousCategorie;
  photo:Photo;
}
