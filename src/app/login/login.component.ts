import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../service/authentification.service';
import {Router} from '@angular/router';
import {Utilisateur} from '../../Model/utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  utilisateur:Utilisateur = new Utilisateur();
  errorMessage:string;

  constructor(private authService:AuthentificationService, private router:Router) { }

  ngOnInit() {
  }

  onLogin(data){
    this.authService.login(data)
      .subscribe(resp=>{
        let jwt = resp.body['accessToken'];
        this.authService.saveToken(jwt);
        this.router.navigateByUrl("/admin/listeCategorie");
      }, err=>{
        this.errorMessage = 'Adresse email ou mot de passe incorrect';
      })
  }
}
