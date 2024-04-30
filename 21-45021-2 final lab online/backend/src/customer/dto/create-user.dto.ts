import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, Matches } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty({ message: 'fullName is required' })
  @Length(8, 100, {
    message: 'fullName length must be between 8 and 100 characters',
  })
  @IsString({ message: 'fullName must be a string' })
  fullName: string;

  @IsNotEmpty({ message: 'userName is required' })
  @Length(4, 100, {
    message: 'userName length must be between 8 and 100 characters',
  })
  @IsString({ message: 'userName must be a string' })
  userName: string;


  @IsEmail({}, { message: 'email must be valid' })
  @IsNotEmpty({ message: 'email is required.' })
  email: string;

  @IsNotEmpty({ message: 'password is required' })
  @IsString({ message: 'password must be a string' })
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
    message:
      'Passwords must be at least 8 characters, should include atleast one uppercase and one lowercase letter and a special character and a digit',
  })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'instituteName is required.' })
  instituteName: string;

  @IsString()
  @IsNotEmpty({ message: 'employmentStatus is required.' })
  employmentStatus: string;

  @IsString()
  @IsNotEmpty({ message: 'legalAgreement is required.' })
  legalAgreement: string;

  @IsString()
  profilePhoto: string;
}

export class loginDTO {
  @IsEmail() email: string;
  @IsNotEmpty() password: string;
}
function MatchesProperty(arg0: string): (target: CreateUserDto, propertyKey: "confirmedPassword") => void {
  throw new Error('Function not implemented.');
}

