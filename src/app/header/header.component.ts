import { Component } from '@angular/core';
import {AuthentificationService} from "../service/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  utilisateur:object;

  constructor(private authService: AuthentificationService, private router: Router) { }

  ngOnInit() {
    this.currentUser();
  }

  currentUser(){
    this.authService.currentUser()
      .subscribe(data=>{
        this.utilisateur = data;
      },err=>{
        console.log(err);
      })
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
