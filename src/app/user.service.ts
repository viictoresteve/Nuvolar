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

  getUsers(username): Observable<User[]> {
    this.url = 'https://api.github.com/users?q=' + username + '+in:login ';

    return this.http.get<User[]>(this.url).pipe(
      map((res) => {
        this.userList = [];

        res.forEach((user) => {
          if (user.login.includes(username)) {
            this.userList.push(
              new User(user.id, user.login, user.avatar_url)
            );
          }
        });

        return this.userList;
      })
    );
  }
  getUser(username): Observable<User> {
    this.url = 'https://api.github.com/users/' + username;

    return this.http.get<User>(this.url).pipe(
      map((user) => {

        return user;
      })
    );
  }
  getUserRepos(username): Observable<any[]> {
    this.url = 'https://api.github.com/users/' + username + '/repos';

    return this.http.get<any[]>(this.url).pipe(
      map((res) => {
        return res;
      })
    );
  }
  getUserFollowers(username): Observable<any[]> {
    this.url = 'https://api.github.com/users/' + username + '/followers';

    return this.http.get<any[]>(this.url).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
