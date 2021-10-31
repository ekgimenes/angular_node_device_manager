import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { ServiceComponent } from './service/service.component';
import {MatButtonModule} from '@angular/material/button';
import { MainRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    ServiceComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatButtonModule,
    MainRoutingModule
  ],
  exports: [
    RouterModule,
    MatButtonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
