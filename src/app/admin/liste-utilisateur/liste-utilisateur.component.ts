import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Utilisateur} from '../../../Model/utilisateur';
import {AdminService} from '../../service/admin.service';
import {AuthentificationService} from '../../service/authentification.service';
import {Router} from '@angular/router';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {
  utilisateurs: Observable<Utilisateur[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getUtilisateurList()
      .subscribe(data=>{
        this.utilisateurs = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  add() {
  	this.router.navigateByUrl("/admin/addUtilisateur");
  }
}
