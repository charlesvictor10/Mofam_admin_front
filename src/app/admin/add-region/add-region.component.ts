import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";
import {API_BASE_URL} from "../../constants/constants";
import {Region} from "../../../Model/region";

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {
  region:Region = new Region();
  errorMessage:string;

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
  }

  onSaveRegion(data) {
    let url = API_BASE_URL+"/admin/newRegion";
    this.adminService.postResource(url,data)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listeRegion");
      },err=>{
        this.errorMessage = "Problème d'enregistrement ...";
      })
  }
}
