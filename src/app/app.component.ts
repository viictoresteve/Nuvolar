import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'nuvolar';

  usersList = [];
  constructor(private userService: UserService) {}
  findUsers($event) {
    console.log($event);

    if ($event.length > 0) {
      this.userService.getUsers($event).subscribe((res) => {
        this.usersList = res;
      });
    } else {
      this.usersList = [];
    }
  }
}
