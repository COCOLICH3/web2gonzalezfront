import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: User = new User();

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }


  register() {
    this.userService.createUser(this.model)
      .subscribe(data => {
        localStorage.setItem('isLoggedin', 'true');
        this.userService.loggedUser = data as User
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('loggedUser', JSON.stringify(data));
        this.router.navigate(['/dashboard']);
      }, error => console.log(error));

  }
}
