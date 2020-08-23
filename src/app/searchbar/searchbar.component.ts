import { Component, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass'],
})
export class SearchbarComponent implements OnInit {
  searchValue = '';
  users = [];
  @Output() usersEmitter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    if (this.searchValue === '') {
      // emptying list if searchbar empty
      this.users = [];
    }
  }

  onKey(event: any) {

    // getting value of searchbar then emitting to parent to make request
    this.searchValue = event.target.value;
    this.usersEmitter.emit(this.searchValue);
  }
}
