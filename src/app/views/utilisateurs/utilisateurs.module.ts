import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import { ModalModule } from 'ngx-bootstrap';
import { UsersService } from '../../../../angular/app/services/users.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
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
