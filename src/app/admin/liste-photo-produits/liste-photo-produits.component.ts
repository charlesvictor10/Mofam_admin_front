import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Photo} from '../../../Model/photo';
import {AdminService} from '../../service/admin.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import {AuthentificationService} from '../../service/authentification.service';

@Component({
  selector: 'app-liste-photo-produits',
  templateUrl: './liste-photo-produits.component.html',
  styleUrls: ['./liste-photo-produits.component.css']
})
export class ListePhotoProduitsComponent implements OnInit {
  photos:Observable<Photo[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getPhotoList()
      .subscribe(data=>{
        this.photos = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  add() {
    this.router.navigateByUrl("/admin/addPhoto");
  }

  edit(id:number) {
    this.router.navigateByUrl("/admin/editerPhoto/"+id);
  }

  delete(p:Photo) {
    let confirm=window.confirm('Ete vous sûre?');
    if(confirm==true) {
      this.adminService.deletePhoto(p.id_photo)
        .subscribe(data => {
          this.router.navigateByUrl("/admin/listePhoto");
        }, err => {
          console.log(err);
        })
    }
  }
}
