import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { RouterModule } from '@angular/router'

const routes = [
  {path: '', component: AddressComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddressComponent]
})
export default class AddressModule { }
