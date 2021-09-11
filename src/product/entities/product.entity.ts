import { ObjectType, registerEnumType } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';
// import { Category } from '../../category/entities/category.entity';
import { Store } from 'src/store/entities/store.entity';
@ObjectType()
export class Product extends BaseModel {
  name: string;
  description: string;
  price: number;
  discount: number;
  mediaUrl: string[];
  store?: Store;
  category: Category;
}

export enum Category {
  TOYS = 'TOYS',
  ACCESSORIES = 'ACCESSORIES',
  FOOD = 'FOOD',
}

registerEnumType(Category, {
  name: 'Category',
  description: 'Product category',
});
