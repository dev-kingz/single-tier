import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Request} from "express";
import {Model} from "mongoose";
import {USER_MODEL, UserDocument} from "src/models/schemas/user";

@Injectable()
export class AccountService {
  constructor(@InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>) {}

  async deleteAccount(request: Request) {
    try {
      const user = request["user"];
      const deletedUser = await this.userModel.findByIdAndDelete(user._id);
      if (deletedUser) {
        return {message: "Account deleted successfully!"};
      } else {
        throw new Error("Account not found!");
      }
    } catch (error) {
      throw new Error("Account deletion failed!");
    }
  }
}
