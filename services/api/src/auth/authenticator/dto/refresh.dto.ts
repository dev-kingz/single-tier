import {IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class RefreshDto {
  @IsBoolean()
  @IsOptional()
  stayLoggedIn: boolean;
}
