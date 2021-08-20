import { ObjectType } from '@nestjs/graphql';
import { User } from '../../models/user.model';
import { Token } from '../../models/token.model';

@ObjectType()
export class Auth extends Token {
  user: User;
}
