import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ProduitCommande} from '../../../Model/produitCommande';
import {AdminService} from '../../service/admin.service';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../service/authentification.service';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';

@Component({
  selector: 'app-liste-produit-commande',
  templateUrl: './liste-produit-commande.component.html',
  styleUrls: ['./liste-produit-commande.component.css']
})
export class ListeProduitCommandeComponent implements OnInit {
  produitsCommandes:Observable<ProduitCommande[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getProduitsCommandeList()
      .subscribe(data=>{
        this.produitsCommandes = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }
}
