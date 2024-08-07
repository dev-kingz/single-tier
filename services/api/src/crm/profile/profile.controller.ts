import {Controller, Get, Req, UseGuards} from "@nestjs/common";
import {ProfileService} from "./profile.service";
import {AuthGuard} from "src/auth/guards";
import { Request } from "express";

@Controller("/crm/profile")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getProfile(@Req() request: Request) {
    return await this.profileService.getProfile(request);
  }
}
