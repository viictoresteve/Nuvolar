import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.sass'],
})
export class UserslistComponent implements OnInit {
  @Input() usersList: User[];
  @Output() routerEmitter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {

  }

  goToProfile(login: string) {

    // emitting on user click
    this.routerEmitter.emit(login);
  }
}
