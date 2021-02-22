import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";
import {Produit} from "../../../Model/produit";

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';
import {AuthentificationService} from '../../service/authentification.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  produits: Observable<Produit[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getProduitList()
      .subscribe(data=>{
        this.produits = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  add() {
    this.router.navigateByUrl("/admin/addProduit")
  }

  edit(id:number) {
    this.router.navigateByUrl("/admin/editProduit/"+id);
  }

  delete(p:Produit) {
    let confirm=window.confirm('Ete vous sûre?');
    if(confirm==true){
      this.adminService.deleteProduit(p.id_produit)
        .subscribe(data=>{
          this.router.navigateByUrl("/admin/listeProduit");
        }, err=>{
          console.log(err);
        })
    }
  }
}
