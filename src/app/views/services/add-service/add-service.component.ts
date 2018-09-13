import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalModule } from "ngx-bootstrap";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { ServicesService } from '../../../services/services.service';
import { Services } from '../../../modeles/services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {

  currentService: Services;
  service = new Services();
  registerForm: FormGroup;
  submitted = false;
  public onClose: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef, private formBuilder: FormBuilder, private modalService: BsModalService, private _serviceService: ServicesService, private _router: Router) {
    this.currentService = JSON.parse(localStorage.getItem('currentService'));
    console.log(localStorage.getItem('currentService'));
  }

  ngOnInit() {
    this.onClose = new Subject();
    this.registerForm = this.formBuilder.group({
      denomination: ['', Validators.required],
      adresse: ['', Validators.required],
      decription: ['', Validators.required],
      statut: [''],
      logo: ['']
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.service = this.registerForm.value;
    this.service.id_Structure = this.currentService.id_Structure;
  this.service.etat = true;


    this._serviceService.createService(this.service).subscribe((service) => {
      this.bsModalRef.hide();
    }, (error) => {
      console.log(error);
    });
  }
}
