import {Controller, Delete, Req, Res, UseGuards} from "@nestjs/common";
import {AccountService} from "./account.service";
import {AuthGuard} from "src/auth/guards";
import { Request, Response, response } from "express";

@Controller("/crm/account")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @UseGuards(AuthGuard)
  @Delete()
  async deleteAccount(@Req() request: Request, @Res({passthrough: true}) response: Response) {
    return this.accountService.deleteAccount(request,response);
  }
}
