import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAbonnesComponent } from './list-abonnes/list-abonnes/list-abonnes.component';
import { AddAbonnesComponent } from './add-abonnes/add-abonnes.component';
import { EditAbonnesComponent } from './edit-abonnes/edit-abonnes.component';
import { DeleteAbonneComponent } from './delete-abonne/delete-abonne.component';


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
      },
      {
        path: 'editabonnes/:id_abonne',
        component: EditAbonnesComponent,
        data: {
          title: 'Modifier Abonnes'
        }
      },
      {
        path: 'deleteabonnes/:id_abonne',
        component: DeleteAbonneComponent,
        data: {
          title: 'Modifier Abonnes'
        }
      },
      {
        path: 'recherche/:code',
        component:ListAbonnesComponent,
        data: {
          title: 'rechercher'
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
