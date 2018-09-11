import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalModule } from "ngx-bootstrap";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Users } from '../../../modeles/users';
import { UsersService } from '../../../services/users.service';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  
  currentUser: Users;
  
  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService, private userService: UsersService) {
    
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(localStorage.getItem('currentUser'));
  }


  ngOnInit() {
  }

 

}
