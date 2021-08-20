import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/models/user.model';

@ObjectType()
export class Store extends BaseModel {
  name: string;
  description: string;
  address: string;
  staff: User[];
  product: Product[];
}
