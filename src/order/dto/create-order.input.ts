import { InputType, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';
@InputType()
export class CreateOrderInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field()
  @IsNotEmpty()
  productId: string;

  @Field()
  @IsInt()
  quantity: number;
}
