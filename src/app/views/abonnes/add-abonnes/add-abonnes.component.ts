import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgForm, FormGroup } from '@angular/forms';
import { AbonnesService } from '../../../services/abonnes.service';
import { Abonnes } from '../../../modeles/abonnes';
import { error } from 'util';
import { Route, Router } from '@angular/router';
import { Structures } from '../../../modeles/structures';
import { StructuresService } from '../../../services/structures.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-abonnes',
  templateUrl: './add-abonnes.component.html',
  styleUrls: ['./add-abonnes.component.scss']
})

export class AddAbonnesComponent implements OnInit {
  adisform: FormGroup;
  abonnes:Abonnes[];
  structures:Structures[];
  private page:number=0;
  private pages:Array<number>;
  public error=[];
  type: string ="Bonjour";
  message: string="Tout le monde";
  selected: number = 0;
  structure:Structures;
  
  constructor(public bsModalRef: BsModalRef, private  _abonnesService:AbonnesService, private  _router:Router, private _structureService:StructuresService, private notifier: NotifierService) {
    this.notifier = notifier;
  }

  ngOnInit() {
   this._structureService.getStructures().subscribe((structures)=>{
      this.structures=structures;
      console.log(structures); 
    },(error)=>{ 
      console.log(error);
    })

  
  }

  loadAbonne(){
  this._abonnesService.getPageAbonne(this.page).subscribe(data=>{
    this.abonnes=data['content'];
  this.pages= new Array(data['totalPages']);
  })

  }
  
  onSubmit(dataForm) {
    console.log(dataForm);
this._abonnesService.createAbonne(dataForm).subscribe(data =>
  {  
    console.log(dataForm);
    this.bsModalRef.hide();
    this.loadAbonne();
    this.notifier.notify( this.type, this.message);
    this._router.navigate(['/listabonne']);
    console.log("bien enregidtrer");
    console.log(dataForm);
 })

   // console.log(form.value['nom'])
   
}

getPageAbonne(){
    this._abonnesService.getPageAbonne(this.page).subscribe(data=>{
      this.abonnes=data['content'];
  this.pages= new Array(data['totalPages']);
    })
  }
structureChange(structure: any){
this.structures=structure.target.value;
}

 handleError(error){
   this.error= error.error.errors;

 }

 selectOption(id_structure=this.structure.id_Structure) {
  //getted from event
  console.log(id_structure);
  //getted from binding
  console.log()
}
}

