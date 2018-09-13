import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModalDirective, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from "ngx-bootstrap";
import { AbonnesService } from '../../../../services/abonnes.service';
import { Abonnes } from '../../../../modeles/abonnes';
import { AddAbonnesComponent } from '../../add-abonnes/add-abonnes.component';


@Component({
  selector: 'app-list-abonnes',
  templateUrl: './list-abonnes.component.html',
  styleUrls: ['./list-abonnes.component.scss']
})
export class ListAbonnesComponent implements OnInit {
  bsModalRef: BsModalRef;
   abonnes: Abonnes[]=[{ id_abonne:1,
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

  constructor(private _abonnesService:AbonnesService, private _router:Router, private modalService: BsModalService) { }
  ngOnInit() {
  
  }

  primaryModal() {
    this.bsModalRef = this.modalService.show(AddAbonnesComponent);
    this.bsModalRef.content.closeBtnName = 'Close';

  }
}
