import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStructureComponent } from './add-structure/add-structure.component';
import { ListStructureComponent } from './list-structure/list-structure.component';
import { StructuresRoutingModule } from './structures-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { EditStructureComponent } from './edit-structure/edit-structure.component';
import { StructuresService } from '../../services/structures.service';
import { DeleteStructureComponent } from './delete-structure/delete-structure.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    StructuresRoutingModule
  ],
  entryComponents:[AddStructureComponent,EditStructureComponent, DeleteStructureComponent],
  providers:[StructuresService],
  declarations: [AddStructureComponent, ListStructureComponent, EditStructureComponent, DeleteStructureComponent]
})
export class StructuresModule { }
