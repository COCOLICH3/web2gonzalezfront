import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {
  @Output() onShare = new EventEmitter<User>();
  email: string;
  users: User[];

  constructor(private dataService: UserService) {
  }

  ngOnInit() {
    this.email = '';
  }

  private searchUsers() {
    this.dataService.getUsersByEmail(this.email)
      .subscribe(users => this.users = users);
  }

  onSubmit() {
    this.searchUsers();
  }

  onClickShare(user: User) {
    this.onShare.emit(user);
  }
}
