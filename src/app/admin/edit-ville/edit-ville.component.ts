import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Departement} from "../../../Model/departement";
import {AdminService} from "../../service/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {API_BASE_URL} from "../../constants/constants";
import {Ville} from "../../../Model/ville";

@Component({
  selector: 'app-edit-ville',
  templateUrl: './edit-ville.component.html',
  styleUrls: ['./edit-ville.component.css']
})
export class EditVilleComponent implements OnInit {
  ville:object;
  departements: Observable<Departement[]>;
  currentDepartement:object;
  idVille:number;

  constructor(private adminService: AdminService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.idVille = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getVille(this.idVille)
      .subscribe(data=>{
        this.ville = data;
        this.currentDepartement = this.ville['departement']['nom'];
        console.log(this.currentDepartement);
      }, err=>{
        console.log(err);
      });

    this.adminService.getDepartementList()
      .subscribe(data=>{
        this.departements = data;
      },err=>{
        console.log(err);
      })
  }

  updateVille(ville:Ville) {
    let url = API_BASE_URL+"/admin/modifierVille/"+ville.id_ville;
    this.adminService.updateResource(url,ville)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listeVille");
      },err=>{
        console.log(err);
      })
  }
}
