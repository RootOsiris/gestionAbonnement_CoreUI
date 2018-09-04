import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStructureComponent } from './add-structure/add-structure.component';
import { ListStructureComponent } from './list-structure/list-structure.component';
import { StructuresRoutingModule } from './structures-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StructuresRoutingModule
  ],
  declarations: [AddStructureComponent, ListStructureComponent]
})
export class StructuresModule { }
