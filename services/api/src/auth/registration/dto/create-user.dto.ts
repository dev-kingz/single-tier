import {IsEmail, IsNotEmpty, IsString} from "class-validator";
import {PERSONALINFO_MODEL} from "src/models/schemas/personalInfo";
import {PROFILE_MODEL} from "src/models/schemas/profile";
import {IsUnique} from "src/validators/is-unique";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsUnique({modelName: PROFILE_MODEL})
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @IsUnique({modelName: PERSONALINFO_MODEL})
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
