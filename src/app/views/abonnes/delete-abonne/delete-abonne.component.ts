import { Component, OnInit, Input, Output } from '@angular/core';
import { StructuresService } from '../../../services/structures.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';
import { AbonnesService } from '../../../services/abonnes.service';
import { Abonnes } from '../../../modeles/abonnes';

@Component({
  selector: 'app-delete-abonne',
  templateUrl: './delete-abonne.component.html',
  styleUrls: ['./delete-abonne.component.scss']
})
export class DeleteAbonneComponent implements OnInit {
  @Output() abonne :Abonnes;
  id_abonne: number=1;
  abonnes: Abonnes[];
  private page:number=0;
  private pages:Array<number>;

  constructor(public bsModalRef: BsModalRef, private  _abonnesService:AbonnesService, private _structureService:StructuresService, private  _router:Router, private routeActive:ActivatedRoute) { 
     
  }

  ngOnInit() {
    this.getPageAbonne();
  }
  
supprimerAbonne(){
  console.log(this.abonne.id_Abonne);
  this._abonnesService.deleteAbonne(this.abonne.id_Abonne).subscribe(data =>
    {
      this.bsModalRef.hide();
      this._router.navigate(['/listabonnes']);
      console.log("bien enregidtrer");
      this.getPageAbonne();
      this.notify();       
   });

}

getPageAbonne(){ 
  this._abonnesService.getPageAbonne(this.page).subscribe(data=>{
    this.abonnes=data['content'];
this.pages= new Array(data['totalPages']);
  })
}

notify(){
  let data: Array < any >= [];
  data.push({
      'title': 'teste',
      'alertContent': 'This is First Alert -- By Debasis Saha'
  });
}

}
