/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cartController } from './cart.controller';
import { cartService } from './cart.service';
import { User } from 'src/entities/user.entity';
import { carts } from 'src/entities/cart.entity';
import { products } from 'src/entities/product.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, products, carts])],
    exports: [TypeOrmModule, cartService],
    controllers: [cartController],
    providers: [cartService],
})
export class cartModule { }
