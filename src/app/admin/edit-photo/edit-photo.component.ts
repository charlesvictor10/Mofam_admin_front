import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../service/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css']
})
export class EditPhotoComponent implements OnInit {
  photo:object;
  idPhoto:number;
  selectedFiles:FileList;
  currentFileUpload:File;
  progress:number;

  constructor(private adminService: AdminService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.idPhoto = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getPhoto(this.idPhoto)
      .subscribe(data=>{
        this.photo = data;
      },err=>{
        console.log(err);
      })
  }

  onSelectedFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.adminService.uploadPhoto(this.currentFileUpload, this.idPhoto)
      .subscribe(event => {
        if(event.type == HttpEventType.UploadProgress){
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if(event instanceof HttpResponse){
          this.router.navigateByUrl("/admin/listePhotoProduits");
        }
    }, err=>{
      console.log(err);
    });
    this.selectedFiles = undefined
  }
}
