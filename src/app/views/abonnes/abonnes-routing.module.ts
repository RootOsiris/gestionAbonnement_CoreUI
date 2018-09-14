import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAbonnesComponent } from './list-abonnes/list-abonnes/list-abonnes.component';
import { AddAbonnesComponent } from './add-abonnes/add-abonnes.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Abonnes'
    },
    children: [
      {
        path: 'listabonnes',
        component:ListAbonnesComponent,
        data: {
          title: 'Lister Abonnes'
        }
      },
      {
        path: 'addabonnes',
        component: AddAbonnesComponent ,
        data: {
          title: 'Ajouter Abonnes'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AbonnesRoutingModule {}
