import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModalDirective, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from "ngx-bootstrap";
import { ServicesService } from '../../../services/services.service';
import { ModalsComponent } from '../../notifications/modals.component';
import { AddServiceComponent } from '../add-service/add-service.component';
import { Services } from '../../../modeles/services';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent implements OnInit {

  private services: Services[];
  private service: Services;
  bsModalRef: BsModalRef;


  constructor(private _serviceService: ServicesService, private _router: Router, private modalService: BsModalService) { }

  ngOnInit() {
    this._serviceService.getServices().subscribe((services) => {
      this.services = services;
      console.log(services);
    }, (error) => {
      console.log(error);
    })
  }

  deleteService(service) {
    this._serviceService.deleteService(service.id_Service).subscribe((data) => {
      this.services.splice(this.services.indexOf(service), 1);
    }, (error) => {
      console.log(error);
    });
  }

  createService() {
    let service = new Services
    this._serviceService.setter(this.service);
    this._router.navigate(['/listStructure']);
  }

  updateStructure() {
    this._serviceService.setter(this.service);
    this._router.navigate(['/structures/listStructure']);
  }


  primaryModal() {
    const bsModalRef = this.modalService.show(AddServiceComponent);
    //this.bsModalRef.content.closeBtnName = 'Close';
    (<AddServiceComponent>bsModalRef.content).onClose.subscribe(result => {
    });
  }

}