import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModalDirective, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from "ngx-bootstrap";
import { AbonnesService } from '../../../../services/abonnes.service';
import { Abonnes } from '../../../../modeles/abonnes';
import { AddAbonnesComponent } from '../../add-abonnes/add-abonnes.component';
import { Structures } from '../../../../modeles/structures';
import { StructuresService } from '../../../../services/structures.service';
import { EditAbonnesComponent } from '../../edit-abonnes/edit-abonnes.component';
import { DeleteAbonneComponent } from '../../delete-abonne/delete-abonne.component';

@Component({
  selector: 'app-list-abonnes, ngbd-dropdown-basic',
  templateUrl: './list-abonnes.component.html',
  styleUrls: ['./list-abonnes.component.scss']
})
export class ListAbonnesComponent implements OnInit {

  abonnes: Abonnes[];
  bsModalRef: BsModalRef;
  private page:number=0;
  private pages:Array<number>;
  selectedAbonne: Abonnes;
  structure:string="";
  code:string="";
  id_Stucture:number;
  structures:Structures[];
 
  //structures:Structures;
 /*abonnes: Abonnes[]=[{ id_abonne:1,
    adresse: 'Mboumba',
    code: 'ok',
    created_at: 'ok',
    deleted_at: 'ok',
    email: 'sowadama291@gmail.com',
    etat: 'ok',
    id_structure:2,
    nom: 'sow',
    prenom: 'Adama',
    telephone: 222222222,
    update_at:'ok' },
    { id_abonne:1,
      adresse: 'Mboumba',
      code: 'ok',
      created_at: 'ok',
      deleted_at: 'ok',
      email: 'sowadama291@gmail',
      etat: 'ok',
      id_structure:2,
      nom: 'sow',
      prenom: 'Adama',
      telephone: 222222222,
      update_at:'ok' },
      { id_abonne:1,
        adresse: 'Mboumba',
        code: 'ok',
        created_at: 'ok',
        deleted_at: 'ok',
        email: 'sowadama291@gmail',
        etat: 'ok',
        id_structure:2,
        nom: 'sow',
        prenom: 'Adama',
        telephone: 222222222,
        update_at:'ok' }
    ];

*/

  constructor(private  _abonnesService:AbonnesService, private  _router:Router, private modalService: BsModalService, private _structureService:StructuresService) { }
  ngOnInit(){
this._structureService.getStructures().subscribe((structures)=>{
  this.structures=structures;
  console.log(structures); 
},(error)=>{ 
  console.log(error);
})


this.getPageAbonne();
this.initAbonne();
}

getPageAbonne(){
  this._abonnesService.getPageAbonne(this.page).subscribe(data=>{
    this.abonnes=data['content'];
    console.log(data); 
this.pages= new Array(data['totalPages']); 
console.log(this.pages.length);
})
}
  

  primaryModal() { 
    this.bsModalRef = this.modalService.show(AddAbonnesComponent);
    this.modalService.onHidden.subscribe(data=>{
      this.getPageAbonne();  
      this.notify();
    })
    this.bsModalRef.content.closeBtnName = 'Close';

  }
  
  
  modifierModal(abonne: Abonnes){
    const config={
      initialState:{
      abonne:abonne,
        close:"Close"
      }
    }
    this.bsModalRef = this.modalService.show(EditAbonnesComponent, config);
    this.modalService.onHidden.subscribe(data=>{
      this.getPageAbonne();  
    })
   // this.bsModalRef.content.closeBtnName = 'Close';

  }


recuperer(id_abonne:number=1){
    this._abonnesService.getAbonne(id_abonne).subscribe(data=>{
    console.log(data);
    this.selectedAbonne=data;
    console.log("fghjfjjfjfjfjfjfjfj");
    console.log(this.selectedAbonne);
    console.log("nnnnnnnnnnnnn");
  }, (error)=>{
    console.log(error);
  });
 
}

initAbonne(){
  this.selectedAbonne= new Abonnes();
}

  setPage(i, event:any){
    event.preventDefault();
    this.page=i;
    this.getPageAbonne();
  }
 
  setPagePrev(i, event:any){
    event.preventDefault();
    this.page=i-1;
    this.getPageAbonne();
  }
  setPageNext(i, event:any){
    event.preventDefault();
    this.page=i+1;
    this.getPageAbonne();
  }
  deleteModal(abonne:Abonnes){
    console.log(abonne);
    const config={
      initialState:{
      abonne:abonne,
        close:"Close"
      }
    }

    this.bsModalRef = this.modalService.show(DeleteAbonneComponent,config);
    this.modalService.onHidden.subscribe(data=>{
      this.getPageAbonne();  
    })
   
  }

doSearch(){
  this._abonnesService.getSearchAbonne(this.code,this.id_Stucture, this.page).subscribe(data=>{
    this.abonnes=data['content'];
     this.pages= new Array(data['totalPages']);
  })
  
}


  Rechercher(){
    this.doSearch();
  }


  notify(){
    let data: Array < any >= [];
    data.push({
        'title': 'teste',
        'alertContent': 'This is First Alert -- By Debasis Saha'
    });
  }
  

}
