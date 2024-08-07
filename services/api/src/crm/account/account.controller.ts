import {Controller, Delete, Req, UseGuards} from "@nestjs/common";
import {AccountService} from "./account.service";
import {AuthGuard} from "src/auth/guards";
import {Request} from "express";

@Controller("/crm/account")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @UseGuards(AuthGuard)
  @Delete()
  async deleteAccount(@Req() request: Request) {
    return this.accountService.deleteAccount(request);
  }
}
