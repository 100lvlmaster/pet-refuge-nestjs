import { ArgsType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@ArgsType()
export class PostIdArgs {
  @IsNotEmpty()
  @IsNumber()
  postId: number;
}
