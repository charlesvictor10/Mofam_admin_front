import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CommandePrestataire} from '../../../Model/commandePrestataire';
import {Utilisateur} from '../../../Model/utilisateur';
import {AdminService} from '../../service/admin.service';
import {AuthentificationService} from '../../service/authentification.service';
import {Router} from '@angular/router';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';

@Component({
  selector: 'app-liste-commande-par-prestataire',
  templateUrl: './liste-commande-par-prestataire.component.html',
  styleUrls: ['./liste-commande-par-prestataire.component.css']
})
export class ListeCommandeParPrestataireComponent implements OnInit {
  commandesParPrestataire: Observable<CommandePrestataire[]>;
  prestataire: Utilisateur;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.authService.currentUser()
      .subscribe(data=>{
        this.prestataire = data['id'];
        this.adminService.getCommandesParPrestataireList(this.prestataire)
          .subscribe(data=>{
            this.commandesParPrestataire = data;
            this.chRef.detectChanges();
            const table:any = $('table');
            this.dataTable = table.DataTable();
          },err=>{
            console.log(err);
          })
      },err=>{
        console.log(err);
      })
  }

  add() {
    this.router.navigateByUrl("/admin/addCommande");
  }

  edit(code:string){

  }
}
