import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    ListComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
