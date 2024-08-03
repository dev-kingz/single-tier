import {IsEmail, IsNotEmpty, IsString, min, MinLength} from "class-validator";
import {USER_MODEL} from "src/models/schemas/user";
import {IsUnique} from "src/validators/is-unique";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @IsUnique({modelName: USER_MODEL})
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @IsUnique({modelName: USER_MODEL})
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
