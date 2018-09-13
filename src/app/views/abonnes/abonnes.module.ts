import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { AbonnesRoutingModule } from './abonnes-routing.module';
import { ListAbonnesComponent } from './list-abonnes/list-abonnes/list-abonnes.component';
import { AddAbonnesComponent } from './add-abonnes/add-abonnes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    AbonnesRoutingModule
  ],
  declarations: [ListAbonnesComponent, AddAbonnesComponent]
})
export class AbonnesModule { }
