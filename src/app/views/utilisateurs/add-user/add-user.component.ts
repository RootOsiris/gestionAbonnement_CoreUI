import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ModalModule } from "ngx-bootstrap";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Users } from '../../../modeles/users';
import { UsersService } from '../../../services/users.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  currentUser: Users;
  user = new Users();
  registerForm: FormGroup;
  submitted = false;  
  public onClose: Subject<boolean>;

  constructor(private _router: Router, public bsModalRef: BsModalRef, private formBuilder: FormBuilder, private modalService: BsModalService, private userService: UsersService) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(localStorage.getItem('currentUser'));
  }


  ngOnInit() {
    this.onClose = new Subject();
    this.registerForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      login: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      mdp: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]],
      id_profile: [''],
      file: ['']
    });
    
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.user=this.registerForm.value; 
    this.user.id_CreateUser = this.currentUser.id_User;
    this.user.etat = true;
     
    this.userService.createUser(this.user).subscribe((user) => {
      this.bsModalRef.hide();
    }, (error) => {
      console.log(error); 
    });
  }

}
