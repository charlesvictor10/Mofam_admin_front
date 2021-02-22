import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Categorie} from "../../../Model/categorie";
import {API_BASE_URL} from "../../constants/constants";
import {SousCategorie} from "../../../Model/sousCategorie";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-sous-categorie',
  templateUrl: './edit-sous-categorie.component.html',
  styleUrls: ['./edit-sous-categorie.component.css']
})
export class EditSousCategorieComponent implements OnInit {
  sousCategorie:object;
  categories:Observable<Categorie[]>;
  currentCategorie:object;
  idSousCategorie:number;

  constructor(private adminService: AdminService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.idSousCategorie = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getSousCategorie(this.idSousCategorie)
      .subscribe(data=>{
        this.sousCategorie = data;
        this.currentCategorie = this.sousCategorie['categorie']['libelle'];
      }, err=>{
        console.log(err);
      });

    this.adminService.getCategorieList()
      .subscribe(data=>{
        this.categories = data;
      },err=>{
        console.log(err);
      })
  }

  updateSousCategorie(sousCategorie:SousCategorie) {
    let url = API_BASE_URL+"/admin/updateSousCategorie/"+sousCategorie.id_sous_cat;
    this.adminService.updateResource(url,sousCategorie)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listeSousCategorie");
      },err=>{
        console.log(err);
      })
  }
}
