/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Put, Delete, Param, UseGuards, Query, /*UploadedFile, UseInterceptors*/ } from '@nestjs/common';
import { productService } from './product.service';
import { productDto } from './dto/product.dto';
import { products } from 'src/entities/product.entity';
import { AuthGuard } from 'src/users/auth/auth.guard';

@Controller('product')
export class productController {
  constructor(private readonly productService: productService) { }

  // @UseGuards(AuthGuard)
  @Post("product")
  async product(@Body() requestDto: productDto): Promise<Object> {
    return await this.productService.product(requestDto.userId, requestDto.pname, requestDto.description);
  }

  // @UseGuards(AuthGuard)
  @Get('/')
  async getproducts(@Query('subString') subString: string): Promise<products[]> {
    if (subString) {
      return this.productService.getproducts(subString);
    } else {
      return this.productService.getAllproducts();
    }
  }

  //  @UseGuards(AuthGuard)
  @Get(':id')
  async getproductById(@Param('id') id: number): Promise<products> {
    return this.productService.getproductById(id);
  }

  @Get()
  async getAllProducts(): Promise<products[]> {
    return this.productService.getAllproducts();
  }

  // @UseGuards(AuthGuard)
  @Put(':id')
  async updateproduct(@Param('id') id: number, @Body() updateproductDto: productDto) {
    return this.productService.updateproduct(id, updateproductDto);
  }

  // @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteproduct(@Param('id') id: number) {
    return this.productService.deleteproduct(id);
  }
}