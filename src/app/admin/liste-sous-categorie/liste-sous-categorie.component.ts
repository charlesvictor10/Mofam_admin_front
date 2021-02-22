import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {SousCategorie} from "../../../Model/sousCategorie";
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';
import {AuthentificationService} from '../../service/authentification.service';

@Component({
  selector: 'app-liste-sous-categorie',
  templateUrl: './liste-sous-categorie.component.html',
  styleUrls: ['./liste-sous-categorie.component.css']
})
export class ListeSousCategorieComponent implements OnInit {
  sousCategories: Observable<SousCategorie[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getSousCategorieList()
      .subscribe(data=>{
        this.sousCategories = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  add() {
    this.router.navigateByUrl("/admin/addSousCategorie")
  }

  edit(id:number) {
    this.router.navigateByUrl("/admin/editSousCategorie/"+id);
  }

  delete(sc:SousCategorie) {
    let confirm=window.confirm('Ete vous sûre?');
    if(confirm==true){
      this.adminService.deleteSousCategorie(sc.id_sous_cat)
        .subscribe(data=>{
          this.router.navigateByUrl("/admin/listeSousCategorie");
        }, err=>{
          console.log(err);
        })
    }
  }
}
