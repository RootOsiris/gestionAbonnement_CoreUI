import { Component, OnInit, Output, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgForm, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AbonnesService } from '../../../services/abonnes.service';
import { Abonnes } from '../../../modeles/abonnes';
import { error } from 'util';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Structures } from '../../../modeles/structures';
import { StructuresService } from '../../../services/structures.service';


@Component({
  selector: 'app-edit-abonnes',
  templateUrl: './edit-abonnes.component.html',
  styleUrls: ['./edit-abonnes.component.scss']
})
export class EditAbonnesComponent implements OnInit {
  @Output() abonne :Abonnes;
  structures:Structures[];
  abonnes:Abonnes[];
  abonneForm: FormGroup;
  selecteAbonne:Abonnes = new Abonnes();
   

  constructor(public bsModalRef: BsModalRef, private  _abonnesService:AbonnesService, private  _router:Router, private _structureService:StructuresService, private routeActive:ActivatedRoute ){


  }

  ngOnInit() {
      this._structureService.getStructures().subscribe((structures)=>{
      this.structures=structures;
    },(error)=>{ 
      console.log(error);
    });
   // console.log(this.id_abonne)

    this.recuperer();
   
  }

  
  recuperer(){
    console.log(this.abonne);
    this._abonnesService.getAbonne(this.abonne.id_Abonne).subscribe(data=>{
      console.log(data);
      this.selecteAbonne=data;
      console.log(this.selecteAbonne);
    }, (error)=>{
      console.log(error);
    });
   
  }
  
  onSubmit(dataForm) {
    this._abonnesService.updateAbonne(dataForm).subscribe(data =>
      {
        this.bsModalRef.hide();
        console.log("bien enregistrer");
        console.log(dataForm);
     })
    
    }
    
  initAbonnee(){
   
  }

onSubmitForm(){
  console.log(this.abonne);
}

}
