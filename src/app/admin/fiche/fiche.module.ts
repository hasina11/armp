import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FicheRoutingModule } from './fiche-routing.module';
import { FDeleteComponent } from './f-delete/f-delete.component';
import { FIndexComponent } from './f-index/f-index.component';
import { FEditComponent } from './f-edit/f-edit.component';
import { FAddComponent } from './f-add/f-add.component';


@NgModule({
  declarations: [
    FDeleteComponent,
    FIndexComponent,
    FEditComponent,
    FAddComponent
  ],
  imports: [
    CommonModule,
    FicheRoutingModule
  ]
})
export class FicheModule { }
