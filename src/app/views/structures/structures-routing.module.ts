import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStructureComponent } from './list-structure/list-structure.component';
import { AddStructureComponent } from './add-structure/add-structure.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Structures'
    },
    children: [
      {
        path: 'listStructure',
        component: ListStructureComponent,
        data: {
          title: 'Lister Structures'
        }
      },
      {
        path: 'recherche/:code && :denomination',
        component: ListStructureComponent,
        data: {
          title: 'Recherche'
        }
      },
      {
        path: 'addStructure',
        component: AddStructureComponent,
        data: {
          title: 'Ajouter Strucutre'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StructuresRoutingModule {}
