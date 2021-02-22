import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Categorie} from "../../../Model/categorie";
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';
import {AuthentificationService} from '../../service/authentification.service';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.css']
})
export class ListeCategorieComponent implements OnInit {
  categories: Observable<Categorie[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getCategorieList()
      .subscribe(data=>{
        this.categories = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  add() {
    this.router.navigateByUrl("/admin/addCategorie");
  }

  edit(id:number) {
    this.router.navigateByUrl("/admin/editCategorie/"+id);
  }

  delete(c:Categorie) {
    let confirm=window.confirm('Ete vous sûre?');
    if(confirm==true){
      this.adminService.deleteCategorie(c.id_cat)
        .subscribe(data=>{
          this.router.navigateByUrl("/admin/listeCategorie");
        }, err=>{
          console.log(err);
        })
    }
  }
}
