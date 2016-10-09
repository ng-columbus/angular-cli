import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.css' ]
} )
export class ProfileComponent implements OnInit {

  username: string
  firstname: string
  lastname: string

  constructor() {
    this.username = 'twinkletoes'
  }

  ngOnInit() {
  }

  saveProfile() {
    console.log( 'Profile', this )
  }
}
