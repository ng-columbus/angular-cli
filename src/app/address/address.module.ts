import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { RouterModule } from '@angular/router'
import { PlacesService } from './places/places.service'
import { FormsModule } from '@angular/forms'

const routes = [
  {path: '', component: AddressComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddressComponent],
  providers: [PlacesService]
})
export default class AddressModule { }
