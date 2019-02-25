import {Post} from './post';
import {Wall} from './Wall';

export class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  is_admin: boolean;
  posts: Wall[];
}
