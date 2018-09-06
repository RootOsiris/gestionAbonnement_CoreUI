import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModalDirective, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from "ngx-bootstrap";
import { Users } from '../../../modeles/users';
import { UsersService } from '../../../services/users.service';
import { ModalsComponent } from '../../notifications/modals.component';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html'
})
export class ListUserComponent implements OnInit {

  users: Users[];
  bsModalRef: BsModalRef;


  constructor(private _userService: UsersService,
    private _router: Router, private modalService: BsModalService) { }

  ngOnInit() {
   

    this._userService.getUsers().subscribe(
      data =>{
        console.log(data);
      this.users = data;
    },
    error=> console.error(error)
    );
  }

  primaryModal() {
    this.bsModalRef = this.modalService.show(AddUserComponent);
    this.bsModalRef.content.closeBtnName = 'Close';

  }

}
