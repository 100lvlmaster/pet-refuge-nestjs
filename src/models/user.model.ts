import { ObjectType, registerEnumType, HideField } from '@nestjs/graphql';
import { Post } from './post.model';
import { BaseModel } from './base.model';
import { Store } from 'src/store/entities/store.entity';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {
  email: string;
  firstname?: string;
  lastname?: string;
  role: Role;
  posts: Post[];
  store?: Store;
  @HideField()
  password: string;
}
