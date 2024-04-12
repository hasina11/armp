import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FIndexComponent } from './f-index/f-index.component';
import { FEditComponent } from './f-edit/f-edit.component';
import { FAddComponent } from './f-add/f-add.component';
import { FDeleteComponent } from './f-delete/f-delete.component';

const routes: Routes = [

  { path: '', component: FIndexComponent },
  { path: 'edit/:id', component: FEditComponent },
  { path: 'add', component: FAddComponent },
  { path: 'delete/:id', component: FDeleteComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FicheRoutingModule { }
