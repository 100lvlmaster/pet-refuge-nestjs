import { ObjectType, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/models/base.model';
import { Category } from 'src/product/entities/product.entity';

@ObjectType()
export class Order extends BaseModel {
  @Field()
  productId: string;

  @Field()
  userId: string;

  @Field()
  quantity: number;

  @Field()
  category: Category;
}
