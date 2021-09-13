import { ObjectType, registerEnumType } from '@nestjs/graphql';
import { BaseModel } from 'src/models/base.model';
import { Product } from 'src/product/entities/product.entity';

@ObjectType()
export class Order extends BaseModel {
  productId: string;
  userId: string;
  quantity: number;
  product: Product;
  status: Status;
}
export enum Status {
  CART = 'CART',
  BOUGHT = 'BOUGHT',
  DELIEVERED = 'DELIEVERED',
}

registerEnumType(Status, {
  name: 'Status',
  description: 'Current order status',
});
