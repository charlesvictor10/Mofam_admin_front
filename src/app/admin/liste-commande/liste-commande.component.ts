import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Commande} from "../../../Model/commande";
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";
import {AuthentificationService} from '../../service/authentification.service';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit {
  commandes: Observable<Commande[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getCommandeList()
      .subscribe(data=>{
        this.commandes = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  edit(code:string) {
    this.router.navigateByUrl("/admin/editCommande/"+code);
  }

  delete(c:Commande) {
    let confirm=window.confirm('Ete vous sûre?');
    if(confirm==true) {
      this.adminService.deleteCommande(c.code)
        .subscribe(data => {
          this.router.navigateByUrl("/admin/listeCommande");
        }, err => {
          console.log(err);
        })
    }
  }
}
