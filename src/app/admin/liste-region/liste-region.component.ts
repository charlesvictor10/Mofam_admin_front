import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Region} from "../../../Model/region";
import {AuthentificationService} from '../../service/authentification.service';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';

@Component({
  selector: 'app-liste-region',
  templateUrl: './liste-region.component.html',
  styleUrls: ['./liste-region.component.css']
})
export class ListeRegionComponent implements OnInit {
  regions: Observable<Region[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getRegionList()
      .subscribe(data=>{
        this.regions = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  add() {
    this.router.navigateByUrl("/admin/addRegion");
  }

  edit(id:number) {
    this.router.navigateByUrl("/admin/editRegion/"+id);
  }

  delete(r:Region) {
    let confirm=window.confirm('Ete vous sûre?');
    if(confirm==true){
      this.adminService.deleteRegion(r.id_region)
        .subscribe(data=>{
          this.router.navigateByUrl("/admin/listeRegion");
        }, err=>{
          console.log(err);
        })
    }
  }
}
