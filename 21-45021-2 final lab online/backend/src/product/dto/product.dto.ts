/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';


export class productDto {

    @IsNotEmpty()
    //@IsString()
    userId: number;

  @IsNotEmpty()
  @IsString()
  pname: string;

  @IsNotEmpty()
  @IsString()
  description: string;

}