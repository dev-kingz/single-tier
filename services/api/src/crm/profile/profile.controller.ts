import {Controller, Get, Param} from "@nestjs/common";
import {ProfileService} from "./profile.service";
import { Types } from "mongoose";

@Controller("/crm/profile")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(":id")
  async getProfile(@Param("id") id: Types.ObjectId) {
    return this.profileService.getProfile(id);
  }
}
