import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Services'
    },
    children: [
      {
        path: 'listservices',
        //component: ,
        data: {
          title: 'Lister Services'
        }
      },
      {
        path: 'addservices',
        //component: ,
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
