import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Departement} from "../../../Model/departement";
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";
import {AuthentificationService} from '../../service/authentification.service';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';

@Component({
  selector: 'app-liste-departement',
  templateUrl: './liste-departement.component.html',
  styleUrls: ['./liste-departement.component.css']
})
export class ListeDepartementComponent implements OnInit {
  departements: Observable<Departement[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getDepartementList()
      .subscribe(data=>{
        this.departements = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  add() {
    this.router.navigateByUrl("/admin/addDepartement");
  }

  edit(id:number) {
    this.router.navigateByUrl("/admin/editDepartement/"+id);
  }

  delete(d:Departement) {
    let confirm=window.confirm('Ete vous sûre?');
    if(confirm==true){
      this.adminService.deleteDepartement(d.id_departement)
        .subscribe(data=>{
          this.router.navigateByUrl("/admin/listeDepartement");
        }, err=>{
          console.log(err);
        })
    }
  }
}
