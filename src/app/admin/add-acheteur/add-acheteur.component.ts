import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Ville} from '../../../Model/ville';
import {AdminService} from '../../service/admin.service';
import {Router} from '@angular/router';
import {API_BASE_URL} from '../../constants/constants';
import {Acheteur} from '../../../Model/acheteur';

@Component({
  selector: 'app-add-acheteur',
  templateUrl: './add-acheteur.component.html',
  styleUrls: ['./add-acheteur.component.css']
})
export class AddAcheteurComponent implements OnInit {
  acheteur:Acheteur = new Acheteur();
  villes:Observable<Ville[]>;
  errorMessage:string;

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
    this.relaodData();
  }

  relaodData(){
    this.adminService.getVilleList()
      .subscribe(data=>{
        this.villes = data;
      },err=>{
        console.log(err);
      })
  }

  onSaveAcheteur(data) {
    let url = API_BASE_URL+"/admin/newAcheteur";
    this.adminService.postResource(url,data)
      .subscribe(data=>{
        this.router.navigateByUrl("admin/listeAcheteur");
      },err=>{
        this.errorMessage = "Problème d'enregistrement ...";
      })
  }
}
