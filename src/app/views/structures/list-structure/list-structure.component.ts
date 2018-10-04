import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModalDirective, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from "ngx-bootstrap";
import { StructuresService } from '../../../services/structures.service';
import { ModalsComponent } from '../../notifications/modals.component';
import { AddStructureComponent } from '../add-structure/add-structure.component';
import { Structures } from '../../../modeles/structures';
import { EditAbonnesComponent } from '../../abonnes/edit-abonnes/edit-abonnes.component';
import { EditStructureComponent } from '../edit-structure/edit-structure.component';
import { DeleteAbonneComponent } from '../../abonnes/delete-abonne/delete-abonne.component';
import { DeleteStructureComponent } from '../delete-structure/delete-structure.component';

@Component({
  selector: 'app-list-structure',
  templateUrl: './list-structure.component.html',
  styleUrls: ['./list-structure.component.scss']
})
export class ListStructureComponent implements OnInit {

  private structures:Structures[];
  private structure:Structures;
  bsModalRef: BsModalRef;
  private page:number=0;
  private pages:Array<number>;
  code: String;
  denomination: String;
 
 
   constructor(private _structureService:StructuresService, private _router:Router, private modalService: BsModalService) { }

  ngOnInit() {
   /* this._structureService.getStructures().subscribe((structures)=>{
      this.structures=structures;
      console.log(structures); 
    },(error)=>{ 
      console.log(error);
})*/
this.getStrucutures();
  }

  getStrucutures(){
    this._structureService.getPageStructure(this.page).subscribe(data=>{
      this.structures=data['content'];
  this.pages= new Array(data['totalPages']);   
  })

  }

  deleteStructure(structure:Structures)
  {
    /*this._structureService.deleteStructure(structure.id_Structure).subscribe((data)=>{
          this.structures.splice(this.structures.indexOf(structure),1);
    },(error)=>{
      console.log(error);
    });
    */
   const config={
    initialState:{
    structure:structure,
      close:"Close"
    }
  }
this.bsModalRef = this.modalService.show(DeleteStructureComponent, config);
  this.modalService.onHidden.subscribe(data=>{
    this.getStrucutures();    
  })


  }  

  createStructure(){
    let structure = new Structures
    this._structureService.setter(this.structure);
    this._router.navigate(['/listStructure']);
  }

  updateStructure(){
      this._structureService.setter(this.structure);
      this._router.navigate(['/structures/listStructure']);
  }
 

  primaryModal() {
    this.bsModalRef = this.modalService.show(AddStructureComponent);
    this.modalService.onHidden.subscribe(data=>{
      this.getStrucutures();    
    })
    this.bsModalRef.content.closeBtnName = 'Close';
  }


  ModifierStrucutue(structure:Structures){
    const config={
      initialState:{
      structure:structure,
        close:"Close"
      }
    }
 this.bsModalRef = this.modalService.show(EditStructureComponent, config);
    this.modalService.onHidden.subscribe(data=>{
      this.getStrucutures();    
    })
  
  }


  doSearch(){
    this._structureService.getSearchStructure(this.code,this.denomination, this.page).subscribe(data=>{
      this.structures=data['content'];
       this.pages= new Array(data['totalPages']);
    })
    
  }
  Rechercher(){
    this.doSearch();
  }
 
  setPage(i, event:any){
    event.preventDefault();
    this.page=i;
    this.getStrucutures();
  }

}