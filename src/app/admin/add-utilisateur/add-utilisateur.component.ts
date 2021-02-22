import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AdminService} from '../../service/admin.service';
import {Router} from '@angular/router';
import {API_BASE_URL} from '../../constants/constants';
import {Utilisateur} from '../../../Model/utilisateur';
import {Prestataire} from "../../../Model/prestataire";

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {
  utilisateur:Utilisateur = new Utilisateur();
  prestataires:Observable<Prestataire[]>;
  errorMessage:string;

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {}

  onSaveUtilisateur(data) {
  	this.adminService.register(data)
      .subscribe(data=>{
        this.router.navigateByUrl("admin/listeUtilisateur");
      },err=>{
        this.errorMessage = "Problème d'enregistrement ...";
      })
  }  
}
