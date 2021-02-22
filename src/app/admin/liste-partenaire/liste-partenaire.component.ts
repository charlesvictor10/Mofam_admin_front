import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Partenaire} from "../../../Model/partenaire";
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';
import {AuthentificationService} from '../../service/authentification.service';

@Component({
  selector: 'app-liste-partenaire',
  templateUrl: './liste-partenaire.component.html',
  styleUrls: ['./liste-partenaire.component.css']
})
export class ListePartenaireComponent implements OnInit {
  partenaires: Observable<Partenaire[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getPartenaireList()
      .subscribe(data=>{
        this.partenaires = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  add() {
    this.router.navigateByUrl("/admin/addPartenaire");
  }

  delete(p:Partenaire) {
    let confirm=window.confirm('Ete vous sûre?');
    if(confirm==true) {
      this.adminService.deletePartener(p.id_part)
        .subscribe(data => {
          this.router.navigateByUrl("/admin/listePartenaire");
        }, err => {
          console.log(err);
        })
    }
  }
}
