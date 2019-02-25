import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService, private listComponent: UsersListComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.userService.updateUser(this.user.id,
      { firstname: this.user.firstname, lastname: this.user.lastname, email: this.user.email })
      .subscribe(
        data => {
          this.user = data as User;
        },
        error => console.log(error));
  }

  deleteUser() {
    this.userService.deleteUser(this.user.id)
      .subscribe(
        data => {
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
