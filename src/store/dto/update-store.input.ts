import { CreateStoreInput } from './create-store.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStoreInput extends PartialType(CreateStoreInput) {
  @Field(() => ID)
  id: string;
}
