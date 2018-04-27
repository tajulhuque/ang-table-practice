
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  @Input() contacts: object[];

  constructor() { }

  ngOnInit() {
  }

  getSalutation(contact) {
    return contact.gender === 'M' ? 'Mr.' : 'Mrs.';
  }

}
