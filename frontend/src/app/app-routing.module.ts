import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreatecategoryComponent } from './views/createcategory/createcategory.component';
import { ReadcategoryComponent } from './views/readcategory/readcategory.component';
import { ReaddeviceComponent } from './views/readdevice/readdevice.component';
import { CreatedeviceComponent } from './views/createdevice/createdevice.component';
import { CategoryComponent } from './views/category/category.component';
import { DeviceComponent } from './views/device/device.component';

const routes: Routes = [
  {
    path:'createcategory',
     component: CreatecategoryComponent
  },
  {
    path:'readcategory',
    component: ReadcategoryComponent
  },
  {
    path:'createdevice',
    component: CreatedeviceComponent
  },
  {
    path:'readdevice',
    component: ReaddeviceComponent
  },
  {
    path:'device',
    component: DeviceComponent
  },
  {
    path:'category',
    component: CategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule, CommonModule]
})
export class MainRoutingModule { }
