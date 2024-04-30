/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { carts } from 'src/entities/cart.entity';
import { cartDto } from './dto/cart.dto';
import { User } from 'src/entities/user.entity';
import { products } from 'src/entities/product.entity';


@Injectable()
export class cartService {

  constructor(
    @InjectRepository(carts)
    private readonly cartRepository: Repository<carts>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(products)
    private readonly productRepository: Repository<products>,
  ) { }

  async cart(userId: number, pid: number): Promise<carts> {
    const users = await this.userRepo.findOne({ where: { id: userId } });
    const pro = await this.productRepository.findOne({ where: { id: pid } });

    if (!users) {
      throw new NotFoundException('cant find user ID');
    }

    if (!pro) {
      throw new NotFoundException('cant find product');
    }


    const message = this.cartRepository.create({ userId: userId, pid: pid});

    return await this.cartRepository.save(message);


  }


  async getAllcarts(): Promise<carts[]> {
    return this.cartRepository.find();
  }

  
  

  async countcarts(): Promise<number> {
    return this.cartRepository.count();
  }

  async getcartById(id: number): Promise<carts> {
    const cart = await this.cartRepository.findOne({ where: { id } });

    if (!cart) {
      throw new NotFoundException('cart not found');
    }



    return cart;
  }

  async updatecart(id: number, updatecartDto: cartDto): Promise<carts> {

    const cart = await this.getcartById(id);

    cart.id = updatecartDto.pid;
    

    return this.cartRepository.save(cart);
  }

  async deletecart(id: number): Promise<string> {
    const result = await this.cartRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return `Post with ID ${id} deleted successfully`;
  }
}