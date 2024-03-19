import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  fullName: string;

  @IsString({ message: 'valid name is required' })
  @IsNotEmpty()
  userName: string;


  @IsEmail()
  email: string;

  @IsString()
  password: string;
  @IsString()
  confirmpassword: string;
  @IsString()
  address: string;

  @IsString()
  companyname: string;

  @IsString()
  phonenumber: string;

  @IsString()
  city: string;

  @IsString()
  country: string;


}
