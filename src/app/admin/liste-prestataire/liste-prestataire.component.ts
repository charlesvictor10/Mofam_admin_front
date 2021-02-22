import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Prestataire} from '../../../Model/prestataire';
import {AdminService} from '../../service/admin.service';
import {AuthentificationService} from '../../service/authentification.service';
import {Router} from '@angular/router';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';

@Component({
  selector: 'app-liste-prestataire',
  templateUrl: './liste-prestataire.component.html',
  styleUrls: ['./liste-prestataire.component.css']
})
export class ListePrestataireComponent implements OnInit {
  prestataires:Observable<Prestataire[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getPrestataireList()
      .subscribe(data=>{
        this.prestataires = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  add() {
    this.router.navigateByUrl("/admin/addPrestataire");
  }

  delete(p:Prestataire) {
    let confirm=window.confirm('Ete vous sûre?');
    if(confirm==true){
      this.adminService.deletePrestataire(p.id)
        .subscribe(data=>{
          this.router.navigateByUrl("/admin/listePrestataire");
        }, err=>{
          console.log(err);
        })
    }
  }
}
