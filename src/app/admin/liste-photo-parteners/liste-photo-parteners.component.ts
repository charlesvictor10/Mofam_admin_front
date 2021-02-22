import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AdminService} from '../../service/admin.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import {Logo} from '../../../Model/logo';
import {AuthentificationService} from '../../service/authentification.service';

@Component({
  selector: 'app-liste-photo-parteners',
  templateUrl: './liste-photo-parteners.component.html',
  styleUrls: ['./liste-photo-parteners.component.css']
})
export class ListePhotoPartenersComponent implements OnInit {
  logos:Observable<Logo[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getLogoList()
      .subscribe(data=>{
        this.logos = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  add() {
    this.router.navigateByUrl("/admin/addLogo");
  }

  edit(id:number) {
    this.router.navigateByUrl("/admin/editerLogo/"+id);
  }

  delete(l:Logo) {
    let confirm=window.confirm('Ete vous sûre?');
    if(confirm==true) {
      this.adminService.deleteLogo(l.id_logo)
        .subscribe(data => {
          this.router.navigateByUrl("/admin/listeLogo");
        }, err => {
          console.log(err);
        })
    }
  }
}
