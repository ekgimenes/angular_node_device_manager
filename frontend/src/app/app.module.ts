import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { MainRoutingModule } from './app-routing.module';
import { CreatecategoryComponent } from './views/createcategory/createcategory.component';
import { ReadcategoryComponent } from './views/readcategory/readcategory.component';
import { ReaddeviceComponent } from './views/readdevice/readdevice.component';
import { DeviceComponent } from './views/device/device.component';
import { CategoryComponent } from './views/category/category.component';
import { CreatedeviceComponent } from './views/createdevice/createdevice.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    CreatecategoryComponent,
    ReadcategoryComponent,
    CreatedeviceComponent,
    ReaddeviceComponent,
    DeviceComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatButtonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  exports: [
    RouterModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
