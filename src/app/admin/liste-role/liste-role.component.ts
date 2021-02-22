import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Role} from '../../../Model/role';
import {AdminService} from '../../service/admin.service';
import {AuthentificationService} from '../../service/authentification.service';
import {Router} from '@angular/router';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';
import {Region} from '../../../Model/region';

@Component({
  selector: 'app-liste-role',
  templateUrl: './liste-role.component.html',
  styleUrls: ['./liste-role.component.css']
})
export class ListeRoleComponent implements OnInit {
  roles: Observable<Role[]>;
  dataTable: any;

  constructor(private adminService:AdminService, private authService:AuthentificationService, private router:Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.adminService.getRoleList()
      .subscribe(data=>{
        this.roles = data;
        this.chRef.detectChanges();
        const table:any = $('table');
        this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }

  add() {
    this.router.navigateByUrl("/admin/addRole");
  }

  delete(r:Role) {
    let confirm=window.confirm('Ete vous sûre?');
    if(confirm==true){
      this.adminService.deleteRole(r.id)
        .subscribe(data=>{
          this.router.navigateByUrl("/admin/listeRole");
        }, err=>{
          console.log(err);
        })
    }
  }
}
