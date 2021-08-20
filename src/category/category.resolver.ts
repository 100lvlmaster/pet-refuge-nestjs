import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput
  ) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query(() => [Category], { name: 'categories' })
  findAll() {
    return this.categoryService.findAll();
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Mutation(() => Category)
  updateCategory(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput
  ) {
    return this.categoryService.update(
      updateCategoryInput.id,
      updateCategoryInput
    );
  }

  @Mutation(() => Category)
  removeCategory(@Args('id') id: string) {
    return this.categoryService.remove(id);
  }
  @ResolveField('products')
  async products(@Parent() category: Category) {
    return this.categoryService
      .findOne(category.id)
      .products({ where: { categoryId: category.id } });
  }
}
