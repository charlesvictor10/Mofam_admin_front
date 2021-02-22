import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";
import {Ville} from "../../../Model/ville";

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';
import {AuthentificationService} from '../../service/authentification.service';

@Component({
  selector: 'app-liste-ville',
  templateUrl: './liste-ville.component.html',
  styleUrls: ['./liste-ville.component.css']
})
export class ListeVilleComponent implements OnInit {
  villes: Observable<Ville[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getVilleList()
      .subscribe(data=>{
        this.villes = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  add() {
    this.router.navigateByUrl("/admin/addVille");
  }

  edit(id:number) {
    this.router.navigateByUrl("/admin/editVille/"+id);
  }

  delete(v:Ville) {
    let confirm=window.confirm('Ete vous sûre?');
    if(confirm==true){
      this.adminService.deleteVille(v.id_ville)
        .subscribe(data=>{
          this.router.navigateByUrl("/admin/listeVille");
        }, err=>{
          console.log(err);
        })
    }
  }
}
