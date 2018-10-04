import { Component, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { StructuresService } from '../../../services/structures.service';
import { Router } from '@angular/router';
import { Structures } from '../../../modeles/structures';

@Component({
  selector: 'app-delete-structure',
  templateUrl: './delete-structure.component.html',
  styleUrls: ['./delete-structure.component.scss']
})
export class DeleteStructureComponent implements OnInit {
  @Output() structure :Structures;

  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService, private _structureService:StructuresService, private _router:Router) { }

  ngOnInit() {
  }

  supprimerAbonne(){
    this._structureService.deleteStructure(this.structure.id_Structure).subscribe(data =>
      {
        this.bsModalRef.hide();
        console.log("bien enregidtrer");
     });
  
    }
  }

  
