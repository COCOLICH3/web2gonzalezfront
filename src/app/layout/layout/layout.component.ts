import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {ConfigService} from '../../services/config.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private router: Router, public configService: ConfigService) {
  }

  ngOnInit() {
    if (localStorage.getItem('isLoggedin')) {
      const jsonUser = localStorage.getItem('loggedUser');
      this.user = JSON.parse(jsonUser)as User;
    } else {
      this.router.navigate(['/login']);
    }
  }

  onExit() {
    localStorage.setItem('isLoggedin', 'false');
    localStorage.removeItem('loggedUser');
  }
}
