import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../service/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Produit} from '../../../Model/produit';
import {Commande} from '../../../Model/commande';
import {API_BASE_URL} from '../../constants/constants';

@Component({
  selector: 'app-edit-commande',
  templateUrl: './edit-commande.component.html',
  styleUrls: ['./edit-commande.component.css']
})
export class EditCommandeComponent implements OnInit {
  commande:object;
  codeCommande:string;
  produits:Observable<Produit[]>;

  constructor(private adminService: AdminService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.codeCommande = activatedRoute.snapshot.paramMap.get('code');
  }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getCommande(this.codeCommande)
      .subscribe(data=>{
        this.commande = data;
      }, err=>{
        console.log(err);
      });

    this.adminService.getProduitList()
      .subscribe(data=>{
        this.produits = data;
      },err=>{
        console.log(err);
      })
  }

  updateCommande(commande:Commande){
    let url = API_BASE_URL+"/admin/updateCommande/"+commande.code;
    this.adminService.updateResource(url,commande)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listeCommande");
      },err=>{
        console.log(err);
      })
  }

}
