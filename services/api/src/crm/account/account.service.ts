import {Delete, Injectable, Param, UseGuards} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model, Types} from "mongoose";
import {AuthGuard} from "src/auth/guards";
import {USER_MODEL, UserDocument} from "src/models/schemas/user";

@Injectable()
export class AccountService {
  constructor(@InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>) {}

  
  async deleteAccount(id: Types.ObjectId) {
    try {
      const deletedUser = await this.userModel.findByIdAndDelete(id);
      if (deletedUser) {
        return {message: "Account deleted successfully!"};
      } else {
        throw new Error("Account not found!");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
