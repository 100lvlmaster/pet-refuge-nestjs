import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsArray } from 'class-validator';
@InputType()
export class CreateCategoryInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  description: string;

  @Field(() => [String])
  @IsNotEmpty()
  @IsArray()
  mediaUrl: string[];
}
