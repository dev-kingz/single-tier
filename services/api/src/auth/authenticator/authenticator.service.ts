import {Injectable} from "@nestjs/common";
import {LoginDto} from "./dto";

@Injectable()
export class AuthenticatorService {
  async login(loginDTO: LoginDto) {
    return "login";
  }
}
