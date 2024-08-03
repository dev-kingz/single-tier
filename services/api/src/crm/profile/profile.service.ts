import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model, Types} from "mongoose";
import {USER_MODEL, UserDocument} from "src/models/schemas/user";

@Injectable()
export class ProfileService {
  constructor(@InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>) {}

  async getProfile(id: Types.ObjectId) {
    return this.userModel.findById(id).select("name username email");
  }
}
