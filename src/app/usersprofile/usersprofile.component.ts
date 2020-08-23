import { User } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-usersprofile',
  templateUrl: './usersprofile.component.html',
  styleUrls: ['./usersprofile.component.sass'],
})
export class UsersprofileComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  user: User;
  username = '';
  constructor(
    private userService: UserService,
    private router: ActivatedRoute
  ) {
    this.username = this.router.snapshot.paramMap.get('id');
    console.log('0');
    console.log(
      forkJoin(
        this.userService.getUser(this.username),
        this.userService.getUserRepos(this.username),
        this.userService.getUserFollowers(this.username)
      ).pipe(
        map((res) => {
          console.log('forkjoined', res);
        })
      )
    );

    forkJoin(
      this.userService.getUser(this.username),
      this.userService.getUserRepos(this.username),
      this.userService.getUserFollowers(this.username)
    ).subscribe((res) => {
      console.log('rz in fork', res);
      this.user = new User(
        res[0].id,
        res[0].login,
        res[0].avatar_url,
        res[0].email,
        res[0].company,
        res[1],
        res[2]
      );
      console.log('oz', this.user);
    });
  }

  ngOnInit(): void {
    // this.userService
    //   .getUser(this.router.snapshot.paramMap.get('id'))
    //   .subscribe((res) => {
    //     this.user = res;
    //   });
  }
}
