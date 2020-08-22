import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.sass'],
})
export class UserslistComponent implements OnInit {
  @Input() usersList: User[];
  constructor() {}

  ngOnInit(): void {}
}
