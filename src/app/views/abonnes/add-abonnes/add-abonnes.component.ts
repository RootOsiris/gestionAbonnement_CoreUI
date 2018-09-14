import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-abonnes',
  templateUrl: './add-abonnes.component.html',
  styleUrls: ['./add-abonnes.component.scss']
})
export class AddAbonnesComponent implements OnInit {
  //form: FormGroup;
  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService) {}

  ngOnInit() {
  
  }
  
  onSubmit(form: NgForm) {
    console.log(form.value);

}
}
