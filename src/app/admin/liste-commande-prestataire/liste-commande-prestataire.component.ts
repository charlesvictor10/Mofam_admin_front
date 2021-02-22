import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CommandePrestataire} from '../../../Model/commandePrestataire';
import {AdminService} from '../../service/admin.service';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../service/authentification.service';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';

@Component({
  selector: 'app-liste-commande-prestataire',
  templateUrl: './liste-commande-prestataire.component.html',
  styleUrls: ['./liste-commande-prestataire.component.css']
})
export class ListeCommandePrestataireComponent implements OnInit {
  commandesPrestataires: Observable<CommandePrestataire[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getCommandePrestataireList()
      .subscribe(data=>{
        this.commandesPrestataires = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  delete(commandePrestataire:CommandePrestataire){
    let confirm=window.confirm('Ete vous sûre?');
    if(confirm==true) {

    }
  }
}
