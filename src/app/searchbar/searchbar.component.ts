import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass'],
})
export class SearchbarComponent implements OnInit {
  searchValue = '';
  users = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (this.searchValue === '') {
      this.users = [];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('cg', changes);
  }

  // getUsers() {
  //   this.userService.getUsers().subscribe((res) => {
  //     console.log(res);
  //     this.users.push(res);
  //     console.log(this.users);

  //   });
  // }

  onKey(event: any) {
    // without type info
    this.searchValue = event.target.value;

    if (this.searchValue.length > 0) {
      this.userService.getUsers(this.searchValue).subscribe((res) => {
        this.users = res;
      });
    } else {
      this.users = [];
    }
  }
}
