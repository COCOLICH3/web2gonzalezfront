import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }


  login() {
    this.userService.loginUser(this.model)
      .subscribe(data => {
        const user = data as User;
        if (user) {
          this.userService.loggedUser = user;
          localStorage.setItem('isLoggedin', 'true');
          localStorage.setItem('loggedUser', JSON.stringify(user));
          if (user.is_admin) {

            this.router.navigate(['/dashboard-admin']);
          } else {
            this.router.navigate(['/dashboard']);

          }
        }
      }, error => console.log(error));

  }

}
