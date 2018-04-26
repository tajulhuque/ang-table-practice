import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // declare AppComponent's properties here:

  public title: string;
  public myBooks: Array<string>;         // same as myBooks: string[];
  public myContacts: Array<any>;        // use any instead of object to avoid errors accessing properties

  // initialize AppComponent properties here:

  constructor() {
    this.title = 'An Angular Javascript Practice App';
    this.myBooks = ['Angular Pro', 'React Pro', 'Javascript ES6'];
    this.myContacts = [
      {
        firstname: 'Joe',
        lastname: 'Poppenhurst',
        gender: 'M',
        address: '357 Spring St',
        city: 'Cleveland',
        state: 'OH'
      },
      {
        firstname: 'Jane',
        lastname: 'Pringle',
        gender: 'F',
        address: '322 Main St',
        city: 'Philadelphia',
        state: 'PA'
      },
      {
        firstname: 'Jake',
        lastname: 'Palau',
        gender: 'M',
        address: '738 Indigo Ave',
        city: 'Silver Spring',
        state: 'MD'
      }
    ];

  }
}

