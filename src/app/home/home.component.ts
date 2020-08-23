import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  usersList = [];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  findUsers($event) {
    if ($event.length > 0) {
      this.userService.getUsers($event).subscribe((res) => {
        this.usersList = res;
      });
    } else {
      this.usersList = [];
    }
  }

  navigate($event) {
    this.router.navigateByUrl($event);
  }
}
