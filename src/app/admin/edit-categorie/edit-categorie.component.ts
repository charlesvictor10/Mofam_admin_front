import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Categorie} from "../../../Model/categorie";
import {API_BASE_URL} from "../../constants/constants";

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {
  categorie:object;
  idCategorie: number;

  constructor(private adminService: AdminService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.idCategorie = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getCategorie(this.idCategorie)
      .subscribe(data=>{
        this.categorie = data;
      }, err=>{
        console.log(err);
      });
  }

  updateCategorie(categorie:Categorie) {
    let url = API_BASE_URL+"/admin/updateCategorie/"+categorie.id_cat;
    console.log(categorie);
    this.adminService.updateResource(url,categorie)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listeCategorie");
      },err=>{
        console.log(err);
      })
  }
}
