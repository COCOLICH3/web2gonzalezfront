import {User} from './user';
import {Wall} from './Wall';

export class Post {
  id: number;
  text: string;
  image: Blob;
  creation_date: Date;
  user_creator: User;
  users: Wall[];
}
