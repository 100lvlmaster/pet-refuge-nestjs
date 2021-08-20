import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ProductService } from './product.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { Category } from 'src/category/entities/category.entity';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput
  ) {
    return this.productService.create(createProductInput);
  }

  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.productService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput
  ) {
    return this.productService.update(
      updateProductInput.id,
      updateProductInput
    );
  }
  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => String }) id: string) {
    return this.productService.remove(id);
  }
  @ResolveField('category')
  async category(@Parent() product: Product): Promise<Category> {
    return this.productService.findOne(product.id).category();
  }
}
