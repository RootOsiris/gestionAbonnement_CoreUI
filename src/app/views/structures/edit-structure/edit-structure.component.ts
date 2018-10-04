import { Component, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { StructuresService } from '../../../services/structures.service';
import { Router } from '@angular/router';
import { Structures } from '../../../modeles/structures';

@Component({
  selector: 'app-edit-structure',
  templateUrl: './edit-structure.component.html',
  styleUrls: ['./edit-structure.component.scss']
})
export class EditStructureComponent implements OnInit {

  structures:Structures[];
  @Output() structure :Structures;
  selecteStructure:Structures = new Structures();
   

  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService, private _structureService:StructuresService, private _router:Router ) 
  { }

  ngOnInit() {
this.recuperer();
  }

recuperer(){
  console.log(this.structure);
    this._structureService.getStructure(this.structure.id_Structure).subscribe(data=>{
      console.log(data);
      this.selecteStructure=data;
      console.log(this.selecteStructure);
    }, (error)=>{
      console.log(error);
    });
   
  }

  onSubmit(dataform){
    this._structureService.updateStructure(dataform).subscribe(data =>
      {  
        this.bsModalRef.hide();
        console.log("bien enregidtrer");
        console.log(dataform);
     })
    
  }
}
