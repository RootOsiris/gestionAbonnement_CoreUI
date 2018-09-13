import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalModule } from "ngx-bootstrap";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { StructuresService } from '../../../services/structures.service';
import { Router } from '@angular/router';
import { Structures } from '../../../modeles/structures';
import { Users } from '../../../modeles/users';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-structure',
  templateUrl: './add-structure.component.html',
  styleUrls: ['./add-structure.component.scss']
})
export class AddStructureComponent implements OnInit {
  currentStructure: Structures;
  currentUser: Users;
  structure = new Structures();
  registerForm: FormGroup;
  submitted = false;
  public onClose: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef, private formBuilder: FormBuilder, private modalService: BsModalService, private _structureService: StructuresService, private _router: Router) {
    this.currentStructure = JSON.parse(localStorage.getItem('currentStructure'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(localStorage.getItem('currentStructure'));
  }

  ngOnInit() {
    this.onClose = new Subject();
    this.registerForm = this.formBuilder.group({
      denomination: ['', Validators.required],
      adresse: ['', Validators.required],
      description: ['', Validators.required],
      statut: [''],
      logo: ['']
    });
  }
  
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.structure=this.registerForm.value; 
    this.structure.id_CreateUser = this.currentUser.id_User;
    this.structure.etat = true;
     
    this._structureService.createStructure(this.structure).subscribe((structure) => {
      this.bsModalRef.hide();
    }, (error) => {
      console.log(error); 
    });
  }
}
