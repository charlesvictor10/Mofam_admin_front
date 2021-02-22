import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";
import {API_BASE_URL} from "../../constants/constants";
import {Partenaire} from "../../../Model/partenaire";

@Component({
  selector: 'app-add-partenaire',
  templateUrl: './add-partenaire.component.html',
  styleUrls: ['./add-partenaire.component.css']
})
export class AddPartenaireComponent implements OnInit {
  partenaire:Partenaire = new Partenaire();
  errorMessage:string;

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
  }

  onSavePartenaire(data) {
    let url = API_BASE_URL+"/admin/newPartener";
    this.adminService.postResource(url,data)
      .subscribe(data=>{
        this.router.navigateByUrl("admin/listePartenaire");
      },err=>{
        this.errorMessage = "Problème d'enregistrement ...";
      })
  }
}
