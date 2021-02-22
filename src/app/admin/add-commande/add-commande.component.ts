import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../service/admin.service';
import {Router} from '@angular/router';
import {API_BASE_URL} from '../../constants/constants';
import {Observable} from 'rxjs';
import {Acheteur} from '../../../Model/acheteur';
import {Produit} from '../../../Model/produit';
import {AuthentificationService} from '../../service/authentification.service';
import {CommandePrestataire} from '../../../Model/commandePrestataire';
import {Utilisateur} from '../../../Model/utilisateur';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent implements OnInit {
  selectedItems = [];
  dropdownSettings = {};

  commandePretataire:CommandePrestataire = new CommandePrestataire();
  acheteurs:Observable<Acheteur[]>;
  produits:Observable<Produit[]>;
  utilisateurs:Observable<Utilisateur[]>;
  errorMessage:string;

  constructor(private adminService: AdminService, private authService: AuthentificationService, private router:Router) { }

  ngOnInit() {
    this.relaodData();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id_produit',
      textField: 'designation',
      selectAllText: 'select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };
  }

  relaodData(){
    this.adminService.getAcheteurList()
      .subscribe(data=>{
        this.acheteurs = data;
      },err=>{
        console.log(err);
      });

    this.adminService.getProduitList()
      .subscribe(data=>{
        this.produits = data;
      },err=>{
        console.log(err);
      });

    this.adminService.getPrestataireList()
      .subscribe(data=>{
        this.utilisateurs = data;
      },err=>{
        console.log(err);
      });

    this.selectedItems = [
    ];
  }

  onItemSelect(item: any){
    console.log(item);
  }

  onSelectAll(items: any){
    console.log(items);
  }

  onSaveCommande(data) {
    let url = API_BASE_URL+'/admin/newCommande';
    this.adminService.postResource(url,data)
      .subscribe(data=>{
        console.log(data);
        this.router.navigateByUrl('admin/listeCommandePrestataire');
      },err=>{
        this.errorMessage = 'Problème d\'enregistrement ...';
      });
  }
}
