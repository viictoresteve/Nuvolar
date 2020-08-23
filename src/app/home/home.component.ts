import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  usersList = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  findUsers($event) {
    if ($event.length > 0) {
      this.userService.getUsers($event).subscribe((res) => {
        console.log('rrr', res);

        this.usersList = res;
      });
    } else {
      this.usersList = [];
    }
  }
}
