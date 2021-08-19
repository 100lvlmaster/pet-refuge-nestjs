import { PrismaService } from '../prisma/prisma.service';
import { PaginationArgs } from '../common/pagination/pagination.args';
import { PostIdArgs } from '../models/args/post-id.args';
import { UserIdArgs } from '../models/args/user-id.args';
import {
  Resolver,
  Query,
  Parent,
  Args,
  ResolveField,
  Mutation,
} from '@nestjs/graphql';
import { Post } from '../models/post.model';
import { PostOrder } from '../models/inputs/post-order.input';
import { PostConnection } from 'src/models/pagination/post-connection.model';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { CreatePostInput } from './dto/createPost.input';
import { UserEntity } from 'src/decorators/user.decorator';
import { User } from 'src/models/user.model';
import { GqlAuthGuard } from 'src/guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Post)
export class PostResolver {
  constructor(private prisma: PrismaService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Post)
  async createPost(
    @UserEntity() user: User,
    @Args('data') data: CreatePostInput
  ) {
    const newPost = this.prisma.post.create({
      data: {
        published: true,
        title: data.title,
        content: data.content,
        authorId: user.id,
      },
    });
    return newPost;
  }

  @Query(() => PostConnection)
  async publishedPosts(
    @Args() { after, before, first, last }: PaginationArgs,
    @Args({ name: 'query', type: () => String, nullable: true })
    query: string,
    @Args({
      name: 'orderBy',
      type: () => PostOrder,
      nullable: true,
    })
    orderBy: PostOrder
  ) {
    const a = await findManyCursorConnection(
      (args) =>
        this.prisma.post.findMany({
          include: { author: true },
          where: {
            published: true,
            title: { contains: query || '' },
          },
          orderBy: orderBy ? { [orderBy.field]: orderBy.direction } : null,
          ...args,
        }),
      () =>
        this.prisma.post.count({
          where: {
            published: true,
            title: { contains: query || '' },
          },
        }),
      { first, last, before, after }
    );
    return a;
  }

  @Query(() => [Post])
  userPosts(@Args() id: UserIdArgs) {
    return this.prisma.user
      .findUnique({ where: { id: id.userId } })
      .posts({ where: { published: true } });
  }

  @Query(() => Post)
  async post(@Args() id: PostIdArgs) {
    return this.prisma.post.findUnique({ where: { id: id.postId } });
  }

  @ResolveField('author')
  async author(@Parent() post: Post) {
    return this.prisma.post.findUnique({ where: { id: post.id } }).author();
  }
}
