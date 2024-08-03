import {Injectable} from "@nestjs/common";
import {LoginDto} from "./dto/login.dto";

@Injectable()
export class AuthenticatorService {
  async login(loginDTO: LoginDto) {
    return "login";
  }
}
