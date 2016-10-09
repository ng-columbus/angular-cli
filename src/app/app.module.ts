import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import appRoutes from './app.routes';
import { AddressModule } from './address/address.module'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    AddressModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
