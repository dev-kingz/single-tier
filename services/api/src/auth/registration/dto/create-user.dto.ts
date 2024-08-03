import {IsEmail, IsNotEmpty, IsString, min, MinLength} from "class-validator";
import {PERSONALINFO_MODEL} from "src/models/schemas/personalInfo";
import {PROFILE_MODEL} from "src/models/schemas/profile";
import {IsUnique} from "src/validators/is-unique";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @IsUnique({modelName: PROFILE_MODEL})
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @IsUnique({modelName: PERSONALINFO_MODEL})
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
