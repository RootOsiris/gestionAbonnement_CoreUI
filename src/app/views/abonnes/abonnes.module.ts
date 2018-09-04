import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { AbonnesRoutingModule } from './abonnes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    AbonnesRoutingModule
  ],
  declarations: []
})
export class AbonnesModule { }
