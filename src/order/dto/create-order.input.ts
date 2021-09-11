import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { Category } from 'src/product/entities/product.entity';
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

  @Field()
  @IsNotEmpty()
  @IsEnum(Category)
  category: Category;
}
