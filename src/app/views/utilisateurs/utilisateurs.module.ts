import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import { ModalModule } from 'ngx-bootstrap';
import { UsersService } from '../../services/users.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    UtilisateursRoutingModule
  ],
  entryComponents:[AddUserComponent],
  providers:[UsersService],
  declarations: [ListUserComponent,AddUserComponent]
})
export class UtilisateursModule { }
