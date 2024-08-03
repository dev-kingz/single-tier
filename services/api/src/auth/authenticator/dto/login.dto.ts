import {IsEmail, IsNotEmpty, IsString} from "class-validator";
import { ACCOUNT_MODEL } from "src/models/schemas/account";
import { Exists } from "src/validators/exists";

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @Exists({modelName: ACCOUNT_MODEL}, {message: "Account does not exist"})
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
