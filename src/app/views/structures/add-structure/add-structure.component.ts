import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalModule } from "ngx-bootstrap";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-add-structure',
  templateUrl: './add-structure.component.html'
})
export class AddStructureComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService) {}
  
  ngOnInit() {
  }

}
