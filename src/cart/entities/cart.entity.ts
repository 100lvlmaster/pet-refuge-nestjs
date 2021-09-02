import { ObjectType } from '@nestjs/graphql';
import { User } from 'src/models/user.model';
import { BaseModel } from '../../models/base.model';
import { Product } from '../../product/entities/product.entity';
@ObjectType()
export class Cart extends BaseModel {
  product: Product;
  user: User;
}

@ObjectType()
export class Category extends BaseModel {
  name: string;
  description: string;
  mediaUrl: string[];
  products?: Product[];
}
