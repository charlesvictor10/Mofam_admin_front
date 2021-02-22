import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "./service/authentification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Mofam';
  bodyClasses = 'skin-blue sidebar-mini';
  bodyLog = "login-page";
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(private authService:AuthentificationService){
  }

  ngOnInit() {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
    this.body.classList.add('login-page');
    this.authService.loadToken();
  }

  isAuthenticated(){
     return this.authService.isAuthenticated();
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

  isPrestataire(){
    return this.authService.isPrestataire();
  }
}
