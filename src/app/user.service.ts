import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { User } from './user.model';
import { ParseError } from '@angular/compiler';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string;
  userList: User[];
  user: User;
  since = 0;
  reposUrl: string;
  followersUrl: string;
  constructor(private http: HttpClient) {
    this.url = '';
    this.userList = [];
  }

  getUserData(username) {
    const userInfo = this.getUser(username);
    const repos = this.getUserRepos(username);
    const followers = this.getUserFollowers(username);

    return forkJoin(userInfo, repos, followers).subscribe((user) => {
      console.log('res fork', user);

      this.user = new User(
        user[0].id,
        user[0].login,
        user[0].picture,
        user[0].email,
        user[0].company,
        user[1],
        user[2]
      );
    });
  }

  getUsers(username): Observable<User[]> {
    this.url = 'https://api.github.com/users?q=' + username + '+in:login ';

    return this.http.get<User[]>(this.url).pipe(
      map((res) => {
        this.userList = [];
        res.forEach((user) => {
          if (user.login.includes(username)) {
            this.userList.push(new User(user.id, user.login, user.avatar_url));
          }
        });

        return this.userList;
      })
    );
  }
  getUser(username): Observable<User> {
    this.url = 'https://api.github.com/users/' + username;

    // if (this.userList.length > 0) {
    //   this.userList.forEach((user) => {
    //     if (user.login == username) {
    //       console.log(user.login, username);

    //       return of(user);
    //     }
    //   });
    // } else {

    return this.http.get<User>(this.url).pipe(
      map((user) => {
        console.log('1');
        console.log('user after call', user);
        return user;
      })
    );
    // }
  }
  getUserRepos(username): Observable<any[]> {
    this.url = 'https://api.github.com/users/' + username + '/repos';

    return this.http.get<any[]>(this.url).pipe(
      map((res) => {
        console.log('2');
        return res;
      })
    );
  }
  getUserFollowers(username): Observable<any[]> {
    this.url = 'https://api.github.com/users/' + username + '/followers';

    return this.http.get<any[]>(this.url).pipe(
      map((res) => {
        console.log('3');
        return res;
      })
    );
  }
}
