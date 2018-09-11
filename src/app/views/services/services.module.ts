import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { ServicesRoutingModule } from "./services-routing.module";
import { AddServiceComponent } from './add-service/add-service.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { ServicesService } from '../../services/services.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    ServicesRoutingModule
  ],
  entryComponents:[AddServiceComponent],
  providers:[ServicesService],
  declarations: [AddServiceComponent, ListServiceComponent]
})
export class ServicesModule { }
