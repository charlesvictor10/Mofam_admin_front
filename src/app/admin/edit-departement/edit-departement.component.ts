import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Region} from "../../../Model/region";
import {AdminService} from "../../service/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {API_BASE_URL} from "../../constants/constants";
import {Departement} from "../../../Model/departement";

@Component({
  selector: 'app-edit-departement',
  templateUrl: './edit-departement.component.html',
  styleUrls: ['./edit-departement.component.css']
})
export class EditDepartementComponent implements OnInit {
  departement:object;
  regions: Observable<Region[]>;
  currentRegion:object;
  idDepartement:number;

  constructor(private adminService: AdminService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.idDepartement = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getDepartement(this.idDepartement)
      .subscribe(data=>{
        this.departement = data;
        this.currentRegion = this.departement['region']['nom'];
      }, err=>{
        console.log(err);
      });

    this.adminService.getRegionList()
      .subscribe(data=>{
        this.regions = data;
      },err=>{
        console.log(err);
      })
  }

  updateDepartement(departement:Departement) {
    let url = API_BASE_URL+"/admin/modifierDepartement/"+departement.id_departement;
    this.adminService.updateResource(url,departement)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listeDepartement");
      },err=>{
        console.log(err);
      })
  }
}
