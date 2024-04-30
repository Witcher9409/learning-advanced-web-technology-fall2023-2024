/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';


export class cartDto {

    @IsNotEmpty()
    //@IsString()
    userId: number;

  @IsNotEmpty()
  //@IsString()
  pid: number;

 

}