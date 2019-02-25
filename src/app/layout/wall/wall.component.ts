import {Component, Input, OnInit} from '@angular/core';
import {Wall} from '../../models/Wall';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {
  @Input() wall: Wall;

  constructor(private modalService: NgbModal, private userService: UserService, private postService: PostService) {
  }

  ngOnInit() {
  }

  onShare(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

  onShareClick(user: User) {
    console.log(user);
    this.userService.sharePost(user, this.wall).subscribe(response => {
      alert('Compartido');

    }, error2 => {

      alert('Error');
    });
  }

  onDeletePost() {
    this.postService.deleteUser(this.wall.post.id).subscribe(response => {
      alert('Borrado exitoso');
    });

  }
}
