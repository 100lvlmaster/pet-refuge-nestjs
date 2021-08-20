import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoryService } from 'src/category/category.service';

@Module({
  imports: [PrismaModule],
  providers: [ProductResolver, ProductService, CategoryService],
})
export class ProductModule {}
