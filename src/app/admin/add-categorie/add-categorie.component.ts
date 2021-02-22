import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";
import {API_BASE_URL} from "../../constants/constants";
import {Categorie} from "../../../Model/categorie";

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  categorie:Categorie = new Categorie();
  errorMessage:string;

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
  }

  onSaveCategorie(data) {
    let url = API_BASE_URL+"/admin/newCategorie";
    this.adminService.postResource(url,data)
      .subscribe(data=>{
        this.router.navigateByUrl("admin/listeCategorie");
      },err=>{
        this.errorMessage = "Problème d'enregistrement ...";
      })
  }
}
