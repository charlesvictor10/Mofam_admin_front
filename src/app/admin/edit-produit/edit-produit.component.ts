import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {SousCategorie} from "../../../Model/sousCategorie";
import {AdminService} from "../../service/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {API_BASE_URL} from "../../constants/constants";
import {Produit} from "../../../Model/produit";
import {Ville} from "../../../Model/ville";

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  produit:object;
  sousCategories:Observable<SousCategorie[]>;
  villes:Observable<Ville[]>;
  idProduit:number;

  constructor(private adminService: AdminService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.idProduit = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getProduit(this.idProduit)
      .subscribe(data=>{
        this.produit = data;
      }, err=>{
        console.log(err);
      });

    this.adminService.getSousCategorieList()
      .subscribe(data=>{
        this.sousCategories = data;
      },err=>{
        console.log(err);
      });

     this.adminService.getVilleList()
      .subscribe(data=>{
        this.villes = data;
      },err=>{
        console.log(err);
      }); 
  }

  updateProduit(produit:Produit) {
    let url = API_BASE_URL+"/admin/updateProduit/"+produit.id_produit;
    this.adminService.updateResource(url,produit)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listeProduit");
      },err=>{
        console.log(err);
      })
  }
}
