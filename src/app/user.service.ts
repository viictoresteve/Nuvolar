import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from './user.model';

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

    this.url = 'https://api.github.com/users?q=' +username+ '+in:login ';

    return this.http.get<User[]>(this.url).pipe(
      map((res) => {
        this.userList = [];
        res.forEach((user) => {
          if (user.login.includes(username)) {
            this.userList.push(new User(user));
          }
        });


        return this.userList;
      })
    );

    // return this.http.get<[]>(this.url).subscribe((res) => {
    //   res.forEach((user) => {
    //     if (user.login.includes(username)) {
    //       this.userList.push(user);
    //     }
    //   });
    //   return this.userList;
    // });
  }
}
