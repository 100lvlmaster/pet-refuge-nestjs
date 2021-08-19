import { InputType, Field, Float } from '@nestjs/graphql';

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
  categoryId: string;

  @Field()
  storeId: string;
}
