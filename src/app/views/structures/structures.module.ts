import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStructureComponent } from './add-structure/add-structure.component';
import { ListStructureComponent } from './list-structure/list-structure.component';
import { StructuresRoutingModule } from './structures-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { StructuresService } from '../../../../angular/app/services/structures.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { EditStructureComponent } from './edit-structure/edit-structure.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    StructuresRoutingModule
  ],
  entryComponents:[AddStructureComponent],
  providers:[StructuresService],
  declarations: [AddStructureComponent, ListStructureComponent, EditStructureComponent]
})
export class StructuresModule { }
