import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Produit} from '../../../Model/produit';
import {Partenaire} from '../../../Model/partenaire';
import {AdminService} from '../../service/admin.service';
import {Router} from '@angular/router';
import {API_BASE_URL} from '../../constants/constants';

@Component({
  selector: 'app-add-logo',
  templateUrl: './add-logo.component.html',
  styleUrls: ['./add-logo.component.css']
})
export class AddLogoComponent implements OnInit {
  selectedFiles:FileList;
  currentFile:File;
  file:File;
  progress=0;
  message='';
  partenaires: Observable<Partenaire[]>;

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getPartenaireList()
      .subscribe(data=>{
        this.partenaires = data;
      },err=>{
        console.log(err);
      })
  }

  selectFile(event){
    this.selectedFiles = event.target.files;
  }

  onSavePhoto(data){
    let url = API_BASE_URL+"/admin/newLogo";
    this.adminService.postResource(url,data)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listePhotoParteners");
      },err=>{
        console.log(err);
      });
  }
}
