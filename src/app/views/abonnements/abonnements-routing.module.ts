import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Abonnements'
    },
    children: [
      {
        path: 'listabonnements',
        //component: ,
        data: {
          title: 'Lister Abonnements'
        }
      },
      {
        path: 'addabonnements',
        //component: ,
        data: {
          title: 'Ajouter Abonnements'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AbonnementsRoutingModule {}
