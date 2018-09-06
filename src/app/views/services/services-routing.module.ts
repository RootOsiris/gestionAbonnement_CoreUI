import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListServiceComponent } from './list-service/list-service.component';
import { AddServiceComponent } from '../services/add-service/add-service.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Services'
    },
    children: [
      {
        path: 'listservice',
        component: ListServiceComponent,
        data: {
          title: 'Lister Services'
        }
      },
      {
        path: 'addservice',
        component: AddServiceComponent,
        data: {
          title: 'Ajouter Services'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServicesRoutingModule {}
