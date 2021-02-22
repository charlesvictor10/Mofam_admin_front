import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../service/authentification.service";

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  constructor(private authService:AuthentificationService) { }

  ngOnInit() {
  }
}
