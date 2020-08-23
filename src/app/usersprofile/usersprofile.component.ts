import { User } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usersprofile',
  templateUrl: './usersprofile.component.html',
  styleUrls: ['./usersprofile.component.sass'],
})
export class UsersprofileComponent implements OnInit {
  user: User;
  constructor(
    private userService: UserService,
    private router: ActivatedRoute
  ) {
    console.log('asd', this.userService.user);

    this.user = this.userService.user;
  }

  ngOnInit(): void {
    // this.user = this.userService.getUserData(this.router.snapshot.paramMap.get('id'))
    // this.userService
    //   .getUser(this.router.snapshot.paramMap.get('id'))
    //   .subscribe((res) => {
    //     this.user = res;
    //   });
  }
}
