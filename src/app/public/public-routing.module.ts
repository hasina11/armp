import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FicheComponent } from './fiche/fiche.component';
import { EnqueteComponent } from './enquete/enquete.component';
import { PlayoutComponent } from './playout/playout.component';

const routes: Routes = [

  {
    path: '', component: PlayoutComponent, children: [

        { path: '', redirectTo: 'home', pathMatch: 'full'},
      
        { path: 'home', component: HomeComponent },
        { path: 'fiche', component: FicheComponent },
        { path: 'enquete', component: EnqueteComponent  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
