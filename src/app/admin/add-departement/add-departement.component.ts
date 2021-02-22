import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";
import {API_BASE_URL} from "../../constants/constants";
import {Departement} from "../../../Model/departement";
import {Observable} from "rxjs";
import {Region} from "../../../Model/region";

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {
  departement:Departement = new Departement();
  regions: Observable<Region[]>;
  errorMessage:string;

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getRegionList()
      .subscribe(data=>{
        this.regions = data;
      },err=>{
        console.log(err);
      })
  }

  onSaveDepartement(data) {
    let url = API_BASE_URL+"/admin/newDepartement";
    this.adminService.postResource(url,data)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listeDepartement");
      },err=>{
        this.errorMessage = "Problème d'enregistrement ...";
      })
  }
}
