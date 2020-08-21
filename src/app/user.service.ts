import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string;
  userList = [];
  constructor(private http: HttpClient) {
    this.url = '';
  }

  getUsers(username): Observable<any[]> {
    console.log('username', username);

    this.url = 'https://api.github.com/users';

    return this.http.get<[]>(this.url).pipe(map(res => {
      this.userList=[];
      res.forEach((user) => {
        if (user.login.includes(username)) {
          this.userList.push(user);
        }
      });
      return this.userList;
    }))

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
