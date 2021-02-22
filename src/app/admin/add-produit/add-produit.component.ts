import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";
import {Observable} from 'rxjs';
import {API_BASE_URL} from "../../constants/constants";
import {SousCategorie} from "../../../Model/sousCategorie";
import {Ville} from "../../../Model/ville";
import {Photo} from '../../../Model/photo';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  produit: object;
  photos: Observable<Photo[]>;
  sousCategories: Observable<SousCategorie[]>;
  villes: Observable<Ville[]>;

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getPhotoList()
      .subscribe(data=>{
        this.photos = data;
      },err=>{
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
      })
  }

  onSaveProduit(data) {
    let url = API_BASE_URL+"/admin/newProduit";
    this.adminService.postResource(url,data)
      .subscribe(data=>{
        this.produit = data;
        this.router.navigateByUrl("/admin/listeProduit");
      },err=>{
        console.log(err);
      })
  }
}
