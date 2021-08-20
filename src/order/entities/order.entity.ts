import { ObjectType, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/models/base.model';

@ObjectType()
export class Order extends BaseModel {
  @Field()
  productId: string;
  @Field()
  userId: string;
}
