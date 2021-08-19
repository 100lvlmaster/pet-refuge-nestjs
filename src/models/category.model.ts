import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';
import { Product } from './product.model';
@ObjectType()
export class Category extends BaseModel {
  name: string;
  description: string;
  mediaUrl: string[];
  products: Product[];
}
