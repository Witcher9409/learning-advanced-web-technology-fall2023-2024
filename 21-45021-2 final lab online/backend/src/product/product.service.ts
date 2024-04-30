/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { products } from 'src/entities/product.entity';
import { productDto } from './dto/product.dto';
import { User } from 'src/entities/user.entity';


@Injectable()
export class productService {

  constructor(
    @InjectRepository(products)
    private readonly productRepository: Repository<products>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) { }

  async product(userId: number, pname: string, description: string): Promise<products> {
    const users = await this.userRepo.findOne({ where: { id: userId } });

    if (!users) {
      throw new NotFoundException('cant find admin ID');
    }


    const message = this.productRepository.create({ userId: userId, pname: pname, description: description });

    return await this.productRepository.save(message);


  }


  async getAllproducts(): Promise<products[]> {
    return this.productRepository.find();
  }

  //Sajid
  async getproducts(subString: string): Promise<products[]> {
    return this.productRepository.find({
      where: { pname: Like(`%${subString}%`) },
    });
  }
  //Sajid
  async countproducts(): Promise<number> {
    return this.productRepository.count();
  }

  async getproductById(id: number): Promise<products> {
    const product = await this.productRepository.findOne({ where: { id } });

    if (!product) {
      throw new NotFoundException('product not found');
    }



    return product;
  }

  async updateproduct(id: number, updateproductDto: productDto): Promise<products> {

    const product = await this.getproductById(id);

    product.pname = updateproductDto.pname;
    product.description = updateproductDto.description;

    return this.productRepository.save(product);
  }

  async deleteproduct(id: number): Promise<string> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return `Post with ID ${id} deleted successfully`;
  }
}