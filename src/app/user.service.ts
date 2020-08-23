import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Observable } from 'rxjs';
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
  since = 0;
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
            this.userList.push(new User(user.id, user.login, user.avatar_url));
          }
        });

        return this.userList;
      })
    );
  }
  getUser(username): Observable<User> {
    this.url = 'https://api.github.com/users/' + username;

    if (this.userList.length > 0) {
      this.userList.forEach((user) => {
        if (user.login == username) {
          return of(user);
        }
      });
    } else {
      // this.reposUrl = 'https://api.github.com/users/' + username + '/repos';
      // this.followersUrl =
      //   'https://api.github.com/users/' + username + '/followers';

      return this.http.get<User>(this.url).pipe(
        map((user) => {

          return new User(user.id, user.login, user.picture);
        })
      );
    }
  }
}
