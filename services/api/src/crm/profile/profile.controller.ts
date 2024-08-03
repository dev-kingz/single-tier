import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {ProfileService} from "./profile.service";
import { Types } from "mongoose";
import { JwtGuard } from "src/auth/authenticator/guards/jwt.guard";

@Controller("/crm/profile")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(JwtGuard)
  @Get(":id")
  async getProfile(@Param("id") id: Types.ObjectId) {
    return await this.profileService.getProfile(id);
  }
}
