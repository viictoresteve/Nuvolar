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
    // using forkJoin to subscribe to all Observables at once, so I only create user when I have all the information I need
    forkJoin(
      this.userService.getUser(this.username),
      this.userService.getUserRepos(this.username),
      this.userService.getUserFollowers(this.username)
    ).subscribe((res) => {
      this.user = new User(
        res[0].id,
        res[0].login,
        res[0].avatar_url,
        res[0].name,
        res[0].email,
        res[0].company,
        res[1],
        res[2],
        res[0].followers,
        res[0].public_repos
      );
    });
  }

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['']);
  }
}
