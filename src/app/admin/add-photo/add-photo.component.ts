import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";
import {API_BASE_URL} from '../../constants/constants';
import {Observable} from 'rxjs';
import {Produit} from '../../../Model/produit';
import {Photo} from '../../../Model/photo';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  photo:Photo = new Photo();
  selectedFiles: FileList;
  currentFile: File;
  produits: Observable<Produit[]>;

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getProduitList()
      .subscribe(data=>{
        this.produits = data;
      },err=>{
        console.log(err);
      })
  }

  onSavePhoto(data){
    let url = API_BASE_URL+"/admin/newPhoto";
    this.adminService.postResource(url,data)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listePhotoProduits");
      },err=>{
        console.log(err);
      })
  }
}
