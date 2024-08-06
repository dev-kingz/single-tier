import {Controller, Delete, Param, UseGuards} from "@nestjs/common";
import {AccountService} from "./account.service";
import {Types} from "mongoose";
import {JwtGuard} from "src/auth/authenticator/guards/jwt.guard";

@Controller("/crm/account")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @UseGuards(JwtGuard)
  @Delete(":id")
  async deleteAccount(@Param("id") id: Types.ObjectId) {
    return this.accountService.deleteAccount(id);
  }
}
