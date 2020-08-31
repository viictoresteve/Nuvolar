import { User } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-usersprofile',
  templateUrl: './usersprofile.component.html',
  styleUrls: ['./usersprofile.component.sass'],
})
export class UsersprofileComponent implements OnInit {
  user: User;
  username = '';
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.username = this.activatedRoute.snapshot.paramMap.get('id');
    // using forkJoin to subscribe to all Observables at once, so I only create user when I have all the information I need or want
    forkJoin(
      this.userService.getUser(this.username),
      this.userService.getUserRepos(this.username),
      this.userService.getUserFollowers(this.username)
    ).subscribe((user) => {
      this.user = new User(
        user[0].id,
        user[0].login,
        user[0].avatar_url,
        user[0].name,
        user[0].email,
        user[0].company,
        user[1],
        user[2],
        user[0].followers,
        user[0].public_repos
      );
    });
  }

  ngOnInit(): void {}

  goBack() {
    // simple back button
    this.router.navigate(['']);
  }
}
