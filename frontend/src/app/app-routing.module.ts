import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'create',
     component: CreateComponent
  },
  {
    path:'read',
    component: ReadComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule, CommonModule]
})
export class MainRoutingModule { }
