import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCartInput {
  @Field()
  productId: string;
  @Field()
  userId: string;
}
