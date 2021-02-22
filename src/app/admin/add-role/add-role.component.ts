import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {Router} from "@angular/router";
import {API_BASE_URL} from "../../constants/constants";
import {Role} from "../../../Model/role";

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
role:Role = new Role();
  errorMessage:string;

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
  }

  onSaveRole(data) {
    let url = API_BASE_URL+"/admin/newRole";
    this.adminService.postResource(url,data)
      .subscribe(data=>{
        this.router.navigateByUrl("/admin/listeRole");
      },err=>{
        this.errorMessage = "Problème d'enregistrement ...";
      })
  }
}
