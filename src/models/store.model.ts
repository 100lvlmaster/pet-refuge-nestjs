import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';
import { Product } from './product.model';
import { User } from './user.model';
@ObjectType()
export class Store extends BaseModel {
  name: string;
  description: string;
  address: string;
  products: Product[];
  staff: User[];
}
