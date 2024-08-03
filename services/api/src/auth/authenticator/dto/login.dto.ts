import {IsEmail, IsNotEmpty, IsString} from "class-validator";
import {PERSONALINFO_MODEL} from "src/models/schemas/personalInfo";
import {Exists} from "src/validators/exists";

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @Exists({modelName: PERSONALINFO_MODEL})
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
