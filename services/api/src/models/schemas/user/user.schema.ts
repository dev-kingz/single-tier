import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Types} from "mongoose";
import {Profile, PROFILE_MODEL} from "../profile";
import {Account, ACCOUNT_MODEL} from "../account";

@Schema({
  timestamps: true,
})
export class User {
  @Prop({type: Types.ObjectId, ref: `${PROFILE_MODEL}`})
  profile: Types.ObjectId | Profile;

  @Prop({type: Types.ObjectId, ref: `${ACCOUNT_MODEL}`})
  account: Types.ObjectId | Account;
}

export type UserDocument = User & Document;

export const USER_MODEL = User.name; // User

export const UserSchema = SchemaFactory.createForClass(User);

