import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalModule } from "ngx-bootstrap";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { StructuresService } from '../../../services/structures.service';
import { Router } from '@angular/router';
import { Structures } from '../../../modeles/structures';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-structure',
  templateUrl: './add-structure.component.html',
  styleUrls: ['./add-structure.component.scss']
})
export class AddStructureComponent implements OnInit {

    private structure:Structures;
    adisform: FormGroup;
    private structures:Structures[];
  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService, private _structureService:StructuresService, private _router:Router) {}

  ngOnInit() {
    this.structure=this._structureService.getter();
  }

  
  
  onSubmit(dataform){
    console.log(dataform.code);
    this._structureService.createStructure(dataform).subscribe(data =>
      {  
        this.bsModalRef.hide();
        console.log("bien enregidtrer");
        console.log(dataform);
        alert("Vous avez bien ajouter une structure");
     })
    
  }

}
