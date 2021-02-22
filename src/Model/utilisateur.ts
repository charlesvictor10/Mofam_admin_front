import {Prestataire} from "./prestataire";

export class Utilisateur {
  id:number;
  email:string;
  prenom:string;
  nom:string;
  password:string;
  actived:boolean;
  prestataire:Prestataire;
}
