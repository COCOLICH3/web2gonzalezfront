import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Observable<User[]>;


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  deleteUsers() {
    this.userService.deleteAll()
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.users = this.userService.getUsersList();
  }


}
