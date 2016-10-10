import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places/places.service'
import { Address } from './places/address'

@Component( {
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: [ './address.component.css' ]
} )
export class AddressComponent implements OnInit {

  address:Address

  constructor( private places: PlacesService ) {
    console.log( 'Constructing the Address component' )
    this.address = new Address()
  }

  ngOnInit() {
  }

  saveAddress() {
    console.log( 'Address', this.address )
    return false
  }
}
