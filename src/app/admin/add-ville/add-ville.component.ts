import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";
import {API_BASE_URL} from "../../constants/constants";
import {Ville} from "../../../Model/ville";
import {Observable} from "rxjs";
import {Departement} from "../../../Model/departement";

@Component({
  selector: 'app-add-ville',
  templateUrl: './add-ville.component.html',
  styleUrls: ['./add-ville.component.css']
})
export class AddVilleComponent implements OnInit {
  ville:Ville = new Ville();
  departements: Observable<Departement[]>;
  errorMessage:string;

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getDepartementList()
      .subscribe(data=>{
        this.departements = data;
      },err=>{
        console.log(err);
      })
  }

  onSaveVille(data) {
    let url = API_BASE_URL+"/admin/newVille";
    this.adminService.postResource(url,data)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listeVille");
      },err=>{
        this.errorMessage = "Problème d'enregistrement ...";
      })
  }
}
