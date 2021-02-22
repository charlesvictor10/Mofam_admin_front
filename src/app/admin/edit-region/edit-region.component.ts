import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {API_BASE_URL} from "../../constants/constants";
import {Region} from "../../../Model/region";

@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.css']
})
export class EditRegionComponent implements OnInit {
  region:object;
  idRegion: number;

  constructor(private adminService: AdminService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.idRegion = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getRegion(this.idRegion)
      .subscribe(data=>{
        this.region = data;
      }, err=>{
        console.log(err);
      });
  }

  updateRegion(region:Region) {
    let url = API_BASE_URL+"/admin/modifierRegion/"+region.id_region;
    this.adminService.updateResource(url,region)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listeRegion");
      },err=>{
        console.log(err);
      })
  }
}
