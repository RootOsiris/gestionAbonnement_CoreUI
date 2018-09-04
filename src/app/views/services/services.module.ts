import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { ServicesRoutingModule } from "./services-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    ServicesRoutingModule
  ],
  declarations: []
})
export class ServicesModule { }
