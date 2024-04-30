import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, Matches } from 'class-validator';

export class CreateAdminDto {


    @IsString({ message: 'userName must be a string' })
    userName: string;


    @IsEmail({}, { message: 'email must be valid' })
    @IsNotEmpty({ message: 'email is required.' })
    email: string;

    @IsNotEmpty({ message: 'password is required' })
    @IsString({ message: 'password must be a string' })
    password: string;
}

export class loginAdminDTO {
    @IsEmail() email: string;
    @IsNotEmpty() password: string;
}
