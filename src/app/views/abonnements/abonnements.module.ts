import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { AbonnementsRoutingModule } from './abonnements-routing.module';
import { ListAbonnementsComponent } from './list-abonnements/list-abonnements.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    AbonnementsRoutingModule
  ],
  declarations: [ListAbonnementsComponent]
})
export class AbonnementsModule { }
