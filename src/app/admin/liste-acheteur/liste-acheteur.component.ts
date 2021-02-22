import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Acheteur} from '../../../Model/acheteur';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';
import {AdminService} from '../../service/admin.service';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../service/authentification.service';

@Component({
  selector: 'app-liste-acheteur',
  templateUrl: './liste-acheteur.component.html',
  styleUrls: ['./liste-acheteur.component.css']
})
export class ListeAcheteurComponent implements OnInit {
  acheteurs:Observable<Acheteur[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getAcheteurList()
      .subscribe(data=>{
        this.acheteurs = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  add(){
    this.router.navigateByUrl("/admin/addAcheteur");
  }

  delete(a:Acheteur) {
    let confirm=window.confirm('Ete vous sûre?');
    if(confirm==true) {
      this.adminService.deleteAcheteur(a.id_acheteur)
        .subscribe(data => {
          this.router.navigateByUrl("/admin/listeAcheteur");
        }, err => {
          console.log(err);
        })
    }
  }
}
