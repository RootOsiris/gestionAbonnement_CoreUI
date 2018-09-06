import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModalDirective, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from "ngx-bootstrap";
import { StructuresService } from '../../../services/structures.service';
import { ModalsComponent } from '../../notifications/modals.component';
import { AddStructureComponent } from '../add-structure/add-structure.component';
import { Structures } from '../../../modeles/structures';

@Component({
  selector: 'app-list-structure',
  templateUrl: './list-structure.component.html',
  styleUrls: ['./list-structure.component.scss']
})
export class ListStructureComponent implements OnInit {

  private structures:Structures[];
  bsModalRef: BsModalRef;
 
 
   constructor(private _structureService:StructuresService, private _router:Router, private modalService: BsModalService) { }

  ngOnInit() {
    this._structureService.getStructures().subscribe((structures)=>{
      console.log(structures); 
    },(error)=>{ 
      console.log(error);
})
  }

  primaryModal() {
    this.bsModalRef = this.modalService.show(AddStructureComponent);
    this.bsModalRef.content.closeBtnName = 'Close';

  }
 
}