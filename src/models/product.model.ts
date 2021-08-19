import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';
import { Category } from './category.model';
import { Store } from './store.model';
@ObjectType()
export class Product extends BaseModel {
  name: string;
  description: string;
  price: number;
  discount: number;
  mediaUrl: string[];
  store: Store;
  category: Category;
}
