/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Put, Delete, Param, UseGuards, Query, /*UploadedFile, UseInterceptors*/ } from '@nestjs/common';
import { cartService } from './cart.service';
import { cartDto } from './dto/cart.dto';
import { carts } from 'src/entities/cart.entity';
import { AuthGuard } from 'src/users/auth/auth.guard';

@Controller('cart')
export class cartController {
  constructor(private readonly cartService: cartService) { }

  // @UseGuards(AuthGuard)
  @Post("add")
  async cart(@Body() requestDto: cartDto): Promise<Object> {
    return await this.cartService.cart(requestDto.userId, requestDto.pid);
  }

  // @UseGuards(AuthGuard)
  @Get()
  async getAllcarts(): Promise<carts[]> {
    return this.cartService.getAllcarts();
  }

  //  @UseGuards(AuthGuard)
  @Get(':id')
  async getcartById(@Param('id') id: number): Promise<carts> {
    return this.cartService.getcartById(id);
  }

  // @UseGuards(AuthGuard)
  @Put(':id')
  async updatecart(@Param('id') id: number, @Body() updatecartDto: cartDto) {
    return this.cartService.updatecart(id, updatecartDto);
  }

  // @UseGuards(AuthGuard)
  @Delete(':id')
  async deletecart(@Param('id') id: number) {
    return this.cartService.deletecart(id);
  }
}