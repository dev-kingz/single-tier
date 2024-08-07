import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Request} from "express";
import {Model} from "mongoose";
import {USER_MODEL, UserDocument} from "src/models/schemas/user";

@Injectable()
export class ProfileService {
  constructor(@InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>) {}

  async getProfile(request: Request) {
    return request["user"];
  }
}
