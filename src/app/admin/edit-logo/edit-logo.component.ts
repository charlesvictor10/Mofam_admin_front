import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../service/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-edit-logo',
  templateUrl: './edit-logo.component.html',
  styleUrls: ['./edit-logo.component.css']
})
export class EditLogoComponent implements OnInit {
  logo:object;
  idLogo:number;
  selectedFiles:FileList;
  currentFileUpload:File;
  progress:number;

  constructor(private adminService: AdminService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.idLogo = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getLogo(this.idLogo)
      .subscribe(data=>{
        this.logo = data;
      },err=>{
        console.log(err);
      })
  }

  onSelectedFile(event) {
    this.selectedFiles = event.target.files;
  }

  uploadLogo() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.adminService.uploadLogo(this.currentFileUpload, this.idLogo)
      .subscribe(event => {
        if(event.type == HttpEventType.UploadProgress){
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if(event instanceof HttpResponse){
          this.router.navigateByUrl("/admin/listePhotoParteners");
        }
      }, err=>{
        console.log(err);
      });
    this.selectedFiles = undefined
  }
}
