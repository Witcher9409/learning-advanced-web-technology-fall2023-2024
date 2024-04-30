/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productController } from './product.controller';
import { productService } from './product.service';
import { User } from 'src/entities/user.entity';
import { products } from 'src/entities/product.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, products])],
    exports: [TypeOrmModule, productService],
    controllers: [productController],
    providers: [productService],
})
export class productModule { }
