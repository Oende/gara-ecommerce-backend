import { IsEmail, isString, IsString, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto{
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    username:string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    password:string;

    @IsEmail()
    email:string;
}