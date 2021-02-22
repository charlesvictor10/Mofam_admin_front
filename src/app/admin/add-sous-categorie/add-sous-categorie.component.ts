import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";
import {API_BASE_URL} from "../../constants/constants";
import {Observable} from "rxjs";
import {Categorie} from "../../../Model/categorie";
import {SousCategorie} from "../../../Model/sousCategorie";

@Component({
  selector: 'app-add-sous-categorie',
  templateUrl: './add-sous-categorie.component.html',
  styleUrls: ['./add-sous-categorie.component.css']
})
export class AddSousCategorieComponent implements OnInit {
  sousCategorie:SousCategorie = new SousCategorie();
  categories: Observable<Categorie[]>;
  errorMessage:string;

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getCategorieList()
      .subscribe(data=>{
        this.categories = data;
      },err=>{
        console.log(err);
      })
  }

  onSaveSousCategorie(data) {
    let url = API_BASE_URL+"/admin/newSousCategorie";
    this.adminService.postResource(url,data)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listeSousCategorie");
      },err=>{
        this.errorMessage = "Problème d'enregistrement ...";
      })
  }
}
