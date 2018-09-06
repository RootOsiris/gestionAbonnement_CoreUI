import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Utilisateurs'
    },
    children: [
      {
        path: 'listUser',
        component: ListUserComponent,
        data: {
          title: 'Lister Utilisateurs'
        }
      },
      {
        path: 'addUser',
        component: AddUserComponent,
        data: {
          title: 'Ajouter Utilisateur'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UtilisateursRoutingModule {}
