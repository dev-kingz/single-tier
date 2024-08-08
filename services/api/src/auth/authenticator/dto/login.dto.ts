import {IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString} from "class-validator";
import {USER_MODEL} from "src/models/schemas/user";
import {Exists} from "src/validators/exists";

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @Exists({modelName: USER_MODEL}, {message: "Invalid email or password!"})
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  @IsOptional()
  stayLoggedIn: boolean;
}
