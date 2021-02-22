import {Produit} from './produit';
import {Commande} from './commande';

export class ProduitCommande {
  id:number;	
  quantite:number;
  commande:Commande;
  produit:Produit;
}
