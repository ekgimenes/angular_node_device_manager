import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import {MatButtonModule} from '@angular/material/button';
import { MainRoutingModule } from './app-routing.module';
import { CreatecategoryComponent } from './views/createcategory/createcategory.component';
import { ReadcategoryComponent } from './views/readcategory/readcategory.component';
import { ReaddeviceComponent } from './views/readdevice/readdevice.component';
import { DeviceComponent } from './views/device/device.component';
import { CategoryComponent } from './views/category/category.component';
import { CreatedeviceComponent } from './views/createdevice/createdevice.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    CreatecategoryComponent,
    ReadcategoryComponent,
    CreatedeviceComponent,
    ReaddeviceComponent,
    DeviceComponent,
    CategoryComponent,
    ServiceComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatButtonModule,
    MainRoutingModule,
    MatToolbarModule,
  ],
  exports: [
    RouterModule,
    MatButtonModule,
    BrowserModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
