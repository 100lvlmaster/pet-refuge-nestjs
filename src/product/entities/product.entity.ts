import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';
import { Category } from '../../models/category.model';
import { Store } from '../../models/store.model';
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
