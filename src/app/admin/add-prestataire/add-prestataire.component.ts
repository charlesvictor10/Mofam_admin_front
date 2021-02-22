import { Component, OnInit } from '@angular/core';
import {Prestataire} from '../../../Model/prestataire';
import {AuthentificationService} from '../../service/authentification.service';
import {Router} from '@angular/router';
import {API_BASE_URL} from "../../constants/constants";
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-add-prestataire',
  templateUrl: './add-prestataire.component.html',
  styleUrls: ['./add-prestataire.component.css']
})
export class AddPrestataireComponent implements OnInit {
  prestataire:Prestataire = new Prestataire();
  errorMessage:string;

  constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit() {
  }

  onSavePrestataire(data){
    let url = API_BASE_URL+"/admin/newPrestataire";
    this.adminService.postResource(url,data)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listePrestataire");
      }, err=>{
        this.errorMessage = "Problème d'enregistrement d'un prestataire";
      })
  }
}
