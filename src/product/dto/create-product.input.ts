import { InputType, Field, Float } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { Category } from '../entities/product.entity';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Float)
  price: number;

  @Field(() => Float)
  discount: number;

  @Field(() => [String])
  mediaUrl: string[];

  @Field()
  @IsEnum(() => Category)
  category: Category;

  @Field()
  storeId: string;
}
