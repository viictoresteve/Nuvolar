import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.sass'],
})
export class UserslistComponent implements OnInit {
  @Input() usersList: User[];
  constructor(private router: Router) {
  }

  ngOnInit(): void {}

  goToProfile(login: string) {
    this.router.navigateByUrl('/' + login);
  }
}
